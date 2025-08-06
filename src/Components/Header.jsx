import companyLogo from '../assets/Company_Logo.png';

const Header = () => {
    return (
        <header class="header">
        <div class="container">
          <div class="logo">
            <img src={companyLogo} alt="Ashwin's Academy Logo" class="logo-image" />
            <span class="logo-text">Ashwin's Academy</span>
          </div>
          
          <nav class="nav">
            <a href="#pricing">Pricing</a>
            <div class="dropdown">
              <a href="#courses">Courses</a>
            </div>
            <div class="dropdown">
              <a href="#services">Services <span class="dropdown-arrow">▼</span></a>
            </div>
            <div class="dropdown">
              <a href="#partner">Partner Services <span class="dropdown-arrow">▼</span></a>
            </div>
            <div class="dropdown">
              <a href="#tools">Tools <span class="dropdown-arrow">▼</span></a>
            </div>
            <a href="#blog">Blog</a>
          </nav>
          
          <button class="cta-button">Call me back</button>
        </div>
      </header>
    )
}

export default Header;