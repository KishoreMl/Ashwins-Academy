import { createSignal } from 'solid-js';
import './App.css';
import Header from './Components/Header&Navigation/Header';
import BlogSection from './Components/BlogSection/BlogSection';
import MainPage from './Components/MainSection/MainPage';
import DashboardContainer from './Components/DashboardSection/DashboardContainer';
import CallMeBackModal from './Components/Common/CallMeBackModal';
import PricingPage from './Components/PricingSection/PricingPage';
import MobileMenu from './Components/Header&Navigation/MobileMenu';
import AboutUs from './Components/AboutUs/AboutUs';
import Services from './Components/ServicesSection/Services';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = createSignal(false);
  const [isModalOpen, setIsModalOpen] = createSignal(false);

  const handleAnchorClick = (event) => {
    const target = event.target.closest('a');
    if (!target) return;
    const href = target.getAttribute('href');
    if (!href || !href.startsWith('#')) return;

    const id = href.slice(1);
    const el = document.getElementById(id);
    if (el) {
      event.preventDefault();
      const headerOffset = 80;
      const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      // Close mobile menu after navigation
      setIsMobileMenuOpen(false);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen());
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
    closeMobileMenu(); 
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div class="App" onClick={handleAnchorClick}>
      <Header 
        isMobileMenuOpen={isMobileMenuOpen()}
        toggleMobileMenu={toggleMobileMenu}
        openModal={openModal}
      />
      
      <section id="home"><MainPage /></section>
      <section id="courses"><DashboardContainer /></section>
      <section id="blog" class="content-sections"><BlogSection /></section>
      <section id="pricing"><PricingPage /></section>
      <section id="services"><Services /></section>
      <section id="about"><AboutUs /></section>
      
      <MobileMenu isOpen={isMobileMenuOpen()} onClose={closeMobileMenu} openModal={openModal} />

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