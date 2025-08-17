import { createSignal } from 'solid-js';
import './App.css';
import Header from './Components/Header&Navigation/Header';
import BlogSection from './Components/BlogSection/BlogSection';
import MainPage from './Components/MainSection/MainPage';
import DashboardContainer from './Components/DashboardSection/DashboardContainer';
import CallMeBackModal from './Components/Common/ContactModal';
import PricingPage from './Components/PricingSection/PricingPage';
import MobileMenu from './Components/Header&Navigation/MobileMenu';
import AboutUs from './Components/AboutUs/AboutUs';
import Services from './Components/ServicesSection/Services';
import Toast from './Components/Common/Toast';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = createSignal(false);
  const [isModalOpen, setIsModalOpen] = createSignal(false);
  const [modalTitle, setModalTitle] = createSignal("Call Me Back");
  const [modalType, setModalType] =  createSignal("call");
  const [pricingPlan, setPricingPlan] = createSignal(null);
  const [isToastVisible, setIsToastVisible] = createSignal(false);
  const [toastData, setToastData] = createSignal({ title: "", message: "", type: "success" });
  const [toastTimeout, setToastTimeout] = createSignal(null);

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
      setIsMobileMenuOpen(false);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen());
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const openContactModal = (title,type) => {
    if(type.includes("enroll")){
      setModalType("enroll");
      setPricingPlan(type.split("-")[1]);
    }
    else{
      setModalType(type);
    }
    setModalTitle(title);
    setIsModalOpen(true);
    closeMobileMenu(); 
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const showToast = (title, type, message, duration = 4000) => {
    // Clear any existing timeout
    if (toastTimeout()) {
      clearTimeout(toastTimeout());
    }
    // Set toast data and show it
    setToastData({ title, message, type });
    setIsToastVisible(true);

    // Auto-hide after specified duration
    const timeoutId = setTimeout(() => {
      setIsToastVisible(false);
    }, duration);
    
    setToastTimeout(timeoutId);
  };

  const hideToast = () => {
    if (toastTimeout()) {
      clearTimeout(toastTimeout());
      setToastTimeout(null);
    }
    setIsToastVisible(false);
  };

  return (
    <div class="App" onClick={handleAnchorClick}>
      <Header 
        isMobileMenuOpen={isMobileMenuOpen()}
        toggleMobileMenu={toggleMobileMenu}
        openModal={() => openContactModal("Call Me Back", "call")}
      />
      
      <section id="home"><MainPage 
        onFreeProfileEvaluationClick={() => openContactModal("Profile Evaluation", "profile")} 
        onToastClick={showToast}
      /></section>
      <section id="courses"><DashboardContainer /></section>
      <section id="blog" class="content-sections"><BlogSection /></section>
      <section id="pricing"><PricingPage openModal={(title,type) => openContactModal(title,type)} /></section>
      <section id="services"><Services /></section>
      <section id="about"><AboutUs /></section>
      
      <MobileMenu isOpen={isMobileMenuOpen()} onClose={closeMobileMenu} openModal={openContactModal("Call Me Back", "call")} />

      {isModalOpen() && (
        <CallMeBackModal 
          isOpen={isModalOpen()} 
          onClose={closeModal} 
          title={modalTitle()}
          type={modalType()}
          onToast={showToast}
          plan={pricingPlan()}
        />
      )}

      {isToastVisible() && (
        <Toast 
          title={toastData().title} 
          message={toastData().message} 
          type={toastData().type}
          onClose={hideToast}
        />
      )}
    </div>
  );
}

export default App;