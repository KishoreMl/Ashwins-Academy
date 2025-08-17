import { createSignal, onMount, onCleanup } from 'solid-js';
import emailjs from '@emailjs/browser';
import { emailConfig } from '../../utils/emailConfig';

const ContactModal = (props) => {
    const [formData, setFormData] = createSignal({
        name: '',
        email: '',
        phone: '',
        place: '',
        reason: ''
    });
    
    const [isSubmitting, setIsSubmitting] = createSignal(false);

    const handleInputChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    // Email validation regex
    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    // Check if form is valid for submission
    const isFormValid = () => {
        const data = formData();
        
        // Required fields based on form type
        const requiredFields = ['name', 'email', 'phone', 'place'];
        if (props.type !== 'enroll' && props.type !== 'profile') {
            requiredFields.push('reason');
        }

        // Check if all required fields are filled
        const allFieldsFilled = requiredFields.every(field => 
            data[field] && data[field].trim().length > 0
        );

        // Check email validity
        const emailValid = data.email && isValidEmail(data.email.trim());

        // Check phone number (basic validation - at least 10 digits)
        const phoneValid = data.phone && data.phone.replace(/\D/g, '').length === 10;

        return allFieldsFilled && emailValid && phoneValid;
    };

    const getReason = () => {
        if(props.type === "enroll"){
           return "The Client has enrolled for the " + props.plan + " plan";
        }
        else if(props.type === "profile"){
            return "Profile Evaluation";
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = formData();
        
        setIsSubmitting(true);

        try {
            const templateParams = {
                from_name: data.name,
                from_email: data.email,
                phone: data.phone,
                place: data.place,
                reason: data.reason || getReason(),
                email: emailConfig.recipientEmail
            };

            // Send email
            await emailjs.send(emailConfig.serviceId, emailConfig.templateId, templateParams, emailConfig.publicKey);
            
            // Success
            props.onToast?.('Success!', 'success', 'Thank you! We have received your request and will contact you soon.');
            
            // Reset form
            setFormData({
                name: '',
                email: '',
                phone: '',
                place: '',
                reason: ''
            });
            props.onClose?.();
        } catch (error) {
            console.error('Email sending failed:', error);
            props.onToast?.('Error', 'error', 'Failed to send your request. Please try again or contact us directly.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            props.onClose?.();
        }
    };

    const handleEscapeKey = (e) => {
        if (e.key === 'Escape') {
            props.onClose?.();
        }
    };

    onMount(() => {
        document.addEventListener('keydown', handleEscapeKey);
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    });

    onCleanup(() => {
        document.removeEventListener('keydown', handleEscapeKey);
        document.body.style.overflow = 'auto'; // Restore scrolling
    });

    return (
        <div 
            class={`modal-overlay ${props.isOpen ? 'active' : ''}`}
            onClick={handleOverlayClick}
        >
            <div class="modal-container">
                <div class="modal-header">
                    <h2>{props.title}</h2>
                    <button 
                        class="modal-close" 
                        onClick={props.onClose}
                        aria-label="Close modal"
                    >
                        ×
                    </button>
                </div>
                
                <div class="modal-content">
                    <form onSubmit={handleSubmit} class="modal-form">
                        <div class="form-group">
                            <input 
                                type="text" 
                                placeholder="Full Name" 
                                value={formData().name}
                                onInput={(e) => handleInputChange('name', e.target.value)}
                                class={formData().name && formData().name.trim().length === 0 ? 'invalid' : ''}
                                required
                            />
                        </div>
                        
                        <div class="form-group">
                            <input 
                                type="email" 
                                placeholder="Email Address" 
                                value={formData().email}
                                onInput={(e) => handleInputChange('email', e.target.value)}
                                class={formData().email && !isValidEmail(formData().email.trim()) ? 'invalid' : ''}
                                required
                            />
                        </div>
                        
                        <div class="form-group">
                            <input 
                                type="tel" 
                                placeholder="Phone Number" 
                                value={formData().phone}
                                onInput={(e) => handleInputChange('phone', e.target.value)}
                                class={formData().phone && formData().phone.replace(/\D/g, '').length < 10 ? 'invalid' : ''}
                                required
                            />
                        </div>

                        <div class="form-group">
                            <input 
                                type="text" 
                                placeholder="Place or City" 
                                value={formData().place}
                                onInput={(e) => handleInputChange('place', e.target.value)}
                                class={formData().place && formData().place.trim().length === 0 ? 'invalid' : ''}
                                required
                            />
                        </div>
                        {
                            props.type !== 'enroll' && props.type !== 'profile' && (
                            <div class="form-group">
                                <input 
                                    type="text" 
                                    placeholder="Reason for calling" 
                                    value={formData().reason}
                                    onInput={(e) => handleInputChange('reason', e.target.value)}
                                    class={formData().reason && formData().reason.trim().length === 0 ? 'invalid' : ''}
                                    required
                                />
                            </div>)
                        }
                        
                        <div class="form-actions">
                            <button 
                                type="submit" 
                                class="btn-submit" 
                                disabled={!isFormValid() || isSubmitting()}
                            >
                                {isSubmitting() ? 'Sending...' : 'Submit Request'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactModal;