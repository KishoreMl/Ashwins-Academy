import { createSignal, onMount, onCleanup } from 'solid-js';

const CallMeBackModal = (props) => {
    const [formData, setFormData] = createSignal({
        name: '',
        email: '',
        phone: ''
    });

    const handleInputChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = formData();
        
        if (!data.name || !data.email || !data.phone) {
            alert('Please fill in all fields');
            return;
        }
        
        alert('Thank you! We will call you back soon.');
        
        // Reset form
        setFormData({
            name: '',
            email: '',
            phone: ''
        });
        
        // Close modal
        props.onClose?.();
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
                    <h2>Call Me Back</h2>
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
                                required
                            />
                        </div>
                        
                        <div class="form-group">
                            <input 
                                type="email" 
                                placeholder="Email Address" 
                                value={formData().email}
                                onInput={(e) => handleInputChange('email', e.target.value)}
                                required
                            />
                        </div>
                        
                        <div class="form-group">
                            <input 
                                type="tel" 
                                placeholder="Phone Number" 
                                value={formData().phone}
                                onInput={(e) => handleInputChange('phone', e.target.value)}
                                required
                            />
                        </div>

                        <div class="form-group">
                            <input 
                                type="place" 
                                placeholder="Place or City" 
                                value={formData().phone}
                                onInput={(e) => handleInputChange('phone', e.target.value)}
                                required
                            />
                        </div>

                        <div class="form-group">
                            <input 
                                type="reason" 
                                placeholder="Reason for calling" 
                                value={formData().phone}
                                onInput={(e) => handleInputChange('phone', e.target.value)}
                                required
                            />
                        </div>
                        
                        <div class="form-actions">
                            <button type="submit" class="btn-submit">
                                Submit Request
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CallMeBackModal;