import { createSignal } from 'solid-js';
import companyLogo from '../assets/Company_Logo.png';
import { coursesLink } from '../utils/constants';

const handleCoursesClick = () => {
    window.open(coursesLink, "_blank");
};

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = createSignal(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen());
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <header class="header">
            <div class="container">
                <div class="logo">
                    <img src={companyLogo} alt="Ashwin's Academy Logo" class="logo-image" />
                    <span class="logo-text">Ashwin's Academy</span>
                </div>
                
                {/* Desktop Navigation */}
                <nav class="nav desktop-nav">
                    <a href="#pricing">Pricing</a>
                    <div class="dropdown" onClick={handleCoursesClick}>
                        <a href="#courses">Courses</a>
                    </div>
                    <div class="dropdown">
                        <a href="#services">Services</a>
                    </div>
  
                    <a href="#blog">About Us</a>
                </nav>
                
                <div class="header-actions">
                    <button class="cta-button desktop-cta">Call me back</button>
                    
                    {/* Mobile Menu Button */}
                    <button 
                        class={`mobile-menu-btn ${isMobileMenuOpen() ? 'active' : ''}`}
                        onClick={toggleMobileMenu}
                        aria-label="Toggle mobile menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div class={`mobile-menu-overlay ${isMobileMenuOpen() ? 'active' : ''}`} onClick={closeMobileMenu}></div>
            
            {/* Mobile Side Menu */}
            <nav class={`mobile-menu ${isMobileMenuOpen() ? 'active' : ''}`}>
                <div class="mobile-menu-header">
                    <div class="mobile-logo">
                    </div>
                    <button class="mobile-menu-close" onClick={closeMobileMenu} aria-label="Close menu">
                        ×
                    </button>
                </div>
                
                <div class="mobile-menu-content">
                    <a href="#pricing" onClick={closeMobileMenu}>Pricing</a>
                    <a href="#courses" onClick={closeMobileMenu}>Courses</a>
                    <a href="#services" onClick={closeMobileMenu}>Services</a>
                    <a href="#partner" onClick={closeMobileMenu}>Partner Services</a>
                    <a href="#tools" onClick={closeMobileMenu}>Tools</a>
                    <a href="#blog" onClick={closeMobileMenu}>Blog</a>
                    
                    <button class="mobile-cta-button" onClick={closeMobileMenu}>Call me back</button>
                </div>
            </nav>
        </header>
    )
}

export default Header;