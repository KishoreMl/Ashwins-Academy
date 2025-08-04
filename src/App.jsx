import './App.css';
import companyLogo from './assets/Company_Logo.png';

function App() {
  return (
    <div class="App">
      {/* Header Navigation */}
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

      {/* Hero Section */}
      <main class="hero">
        <div class="container">
          <div class="hero-content">
            <h1 class="hero-title">
              All-In-One Platform For<br/>
              Pursuing Your Career in Abroad
            </h1>
            
            <p class="hero-subtitle">
              Kickstart your German study adventure with us! Enjoy free support, our premium<br/>
              services, and insightful resources - all just for you.
            </p>
            
            <div class="hero-buttons">
              <button class="primary-button">Free Profile Evaluation</button>
              <button class="secondary-button">Watch Video</button>
            </div>
          </div>
        </div>
      </main>

      {/* Content Sections */}
      <section class="content-sections">
        <div class="container">
          <div class="sections-grid">
            {/* Study in Germany Blog Section */}
            <div class="blog-section">
              <div class="section-header">
                <h2>Study in Germany</h2>
                <button class="view-all-btn">View All →</button>
              </div>
              
              <div class="blog-grid">
                <article class="blog-card">
                  <img src="https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=300&h=200&fit=crop" alt="University building" class="blog-image" />
                  <div class="blog-content">
                    <span class="blog-date">Jun 16, 2023</span>
                    <h3>Top Private Universities in Germany for International Students</h3>
                  </div>
                </article>

                <article class="blog-card">
                  <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=300&h=200&fit=crop" alt="Students" class="blog-image" />
                  <div class="blog-content">
                    <span class="blog-date">Jun 15, 2023</span>
                    <h3>Top 10 Universities for Winter Intake in Germany</h3>
                  </div>
                </article>

                <article class="blog-card">
                  <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop" alt="Beach scene" class="blog-image" />
                  <div class="blog-content">
                    <span class="blog-date">Jun 13, 2023</span>
                    <h3>Summer vs. Winter Intake for MS in Germany: Choose the Perfect Study Abroad Intake for You</h3>
                  </div>
                </article>

                <article class="blog-card question-card">
                  <div class="question-icon">?</div>
                  <div class="blog-content">
                    <span class="blog-date">Jun 12, 2023</span>
                    <h3>Study in Germany: Frequently Asked Questions - Answered</h3>
                  </div>
                </article>

                <article class="blog-card">
                  <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=300&h=200&fit=crop" alt="Money" class="blog-image" />
                  <div class="blog-content">
                    <span class="blog-date">Jun 11, 2023</span>
                    <h3>How Much Does it Cost to Study in Germany</h3>
                  </div>
                </article>

                <article class="blog-card">
                  <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=300&h=200&fit=crop" alt="Study desk" class="blog-image" />
                  <div class="blog-content">
                    <span class="blog-date">Jun 6, 2023</span>
                    <h3>Studying in Germany vs. USA - A Comprehensive Comparison</h3>
                  </div>
                </article>
              </div>
            </div>

            {/* Free Platform Section */}
            <div class="platform-section">
              <h2>Free Platform</h2>
              
              <div class="platform-features">
                <div class="feature-card">
                  <div class="feature-icon">📘</div>
                  <div class="feature-content">
                    <h3>MS in Germany Blog</h3>
                    <p>Free Information on everything you need to study in Germany</p>
                  </div>
                </div>

                <div class="feature-card">
                  <div class="feature-icon">📱</div>
                  <div class="feature-content">
                    <h3>MS in Germany App</h3>
                    <p>Free web app to take you through step by step application process</p>
                  </div>
                </div>

                <button class="get-started-btn">Get started</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* University Search Section */}
      <section class="university-search">
        <div class="container">
          <div class="search-filters">
            <select class="filter-select">
              <option>Intake</option>
            </select>
            <select class="filter-select">
              <option>University Type</option>
            </select>
            <select class="filter-select">
              <option>IELTS</option>
            </select>
            <select class="filter-select">
              <option>German Grade</option>
            </select>
          </div>

          <div class="university-grid">
            <div class="university-card">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop" alt="University of Cologne" class="university-image" />
              <div class="university-content">
                <h3>University of Cologne</h3>
                <p>MSc in Physics (Cologne)</p>
                <button class="save-btn">Save</button>
              </div>
            </div>

            <div class="university-card">
              <img src="https://images.unsplash.com/photo-1562774053-701939374585?w=300&h=200&fit=crop" alt="University of Hamburg" class="university-image" />
              <div class="university-content">
                <h3>University of Hamburg</h3>
                <p>Master of Science in Economics</p>
                <button class="save-btn">Save</button>
              </div>
            </div>

            <div class="university-card">
              <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=300&h=200&fit=crop" alt="TU Bergakademie Freiberg" class="university-image" />
              <div class="university-content">
                <h3>TU Bergakademie Freiberg</h3>
                <p>Applied Geoscience</p>
                <button class="save-btn">Save</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chat Widget */}
      <div class="chat-widget">
        <div class="chat-content">
          <span class="chat-text">Need Help? <strong>Chat with Us</strong></span>
          <div class="chat-icon">💬</div>
        </div>
      </div>
    </div>
  );
}

export default App;