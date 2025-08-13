import companyLogo from '../../assets/Company_Logo.png';
import { coursesLink } from '../../utils/constants';

const handleCoursesClick = () => {
    window.open(coursesLink, "_blank");
};
const Header = (props) => {
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
                    <a href="#about">About Us</a>
                    <a onClick={props.openModal}>Call me back</a>
                </nav>
                
                <div class="header-actions">
                    {/* Mobile Menu Button */}
                    <button 
                        class={`mobile-menu-btn ${props.isMobileMenuOpen ? 'active' : ''}`}
                        onClick={props.toggleMobileMenu}
                        aria-label="Toggle mobile menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header;