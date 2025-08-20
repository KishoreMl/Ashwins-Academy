import companyLogo from '../../assets/Company_Logo.png';
import { coursesLink } from '../../utils/constants';

const handleCoursesClick = () =>{
    window.open(coursesLink,"_blank");
}
const MobileMenu = (props) =>{
    return(
        <>  
        {/* Mobile Menu Overlay */}
            <div class={`mobile-menu-overlay ${props.isOpen ? 'active' : ''}`} onClick={props.onClose}></div>
            
            {/* Mobile Side Menu */}
            <nav class={`mobile-menu ${props.isOpen ? 'active' : ''}`}>
                <div class="mobile-menu-header">
                <div class="mobile-logo">
                    <img src={companyLogo} alt="Ashwin's Academy Logo" class="mobile-logo-image" />
                    <span class="mobile-logo-text">Ashwin's Academy</span>
                </div>
                <button class="mobile-menu-close" onClick={props.onClose} aria-label="Close menu">
                    ×
                </button>
                </div>
                
                <div class="mobile-menu-content">
                <a href="#pricing" onClick={props.onClose}>Pricing</a>
                <a href="#courses" onClick={handleCoursesClick}>Courses</a>
                <a href="#services" onClick={props.onClose}>Services</a>
                <a href="#about" onClick={props.onClose}>About Us</a>
                
                <button class="mobile-cta-button" onClick={() => props.openModal("Call Me Back", "call")}>Call me back</button>
                </div>
            </nav>
        </>
    )
}

export default MobileMenu;