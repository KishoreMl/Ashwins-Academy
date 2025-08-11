import { createSignal } from 'solid-js';
import './App.css';
import Header from './Components/Header';
import BlogSection from './Components/BlogSection';
import ChatWidget from './Components/ChatWidget';
import MainPage from './Components/MainPage';
import DashboardContainer from './Components/DashboardContainer';
import CallMeBackModal from './Components/CallMeBackModal';
import companyLogo from './assets/Company_Logo.png';
import PricingPage from './Components/PricingPage';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = createSignal(false);
  const [isModalOpen, setIsModalOpen] = createSignal(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen());
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
    closeMobileMenu(); // Close mobile menu if open
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div class="App">
      <Header 
        isMobileMenuOpen={isMobileMenuOpen()}
        toggleMobileMenu={toggleMobileMenu}
        openModal={openModal}
      />
      
      {/* Hero Section */}
      <MainPage />
      
      {/* Dashboard Analytics Section */}
      <DashboardContainer />
      
      {/* Blog Sections */}
      <section class="content-sections">
          <BlogSection />
      </section>

      <PricingPage />
      
      <ChatWidget />

      {/* Mobile Menu Overlay */}
      <div class={`mobile-menu-overlay ${isMobileMenuOpen() ? 'active' : ''}`} onClick={closeMobileMenu}></div>
      
      {/* Mobile Side Menu */}
      <nav class={`mobile-menu ${isMobileMenuOpen() ? 'active' : ''}`}>
        <div class="mobile-menu-header">
          <div class="mobile-logo">
            <img src={companyLogo} alt="Ashwin's Academy Logo" class="mobile-logo-image" />
            <span class="mobile-logo-text">Ashwin's Academy</span>
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
          <a href="#blog" onClick={closeMobileMenu}>About Us</a>
          
          <button class="mobile-cta-button" onClick={openModal}>Call me back</button>
        </div>
      </nav>

      {/* Modal Component */}
      {isModalOpen() && (
        <CallMeBackModal 
          isOpen={isModalOpen()} 
          onClose={closeModal} 
        />
      )}
    </div>
  );
}

export default App;