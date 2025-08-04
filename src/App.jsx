import './App.css';
import companyLogo from './assets/Company_Logo.png';

function App() {
  return (
    <div className="App">
      {/* Header Navigation */}
      <header className="header">
        <div className="container">
          <div className="logo">
            <img src={companyLogo} alt="Ashwin's Academy Logo" className="logo-image" />
            <span className="logo-text">Ashwin's Academy</span>
          </div>
          
          <nav className="nav">
            <a href="#pricing">Pricing</a>
            <div className="dropdown">
              <a href="#courses">Courses</a>
            </div>
            <div className="dropdown">
              <a href="#services">Services <span className="dropdown-arrow">▼</span></a>
            </div>
            <div className="dropdown">
              <a href="#partner">Partner Services <span className="dropdown-arrow">▼</span></a>
            </div>
            <div className="dropdown">
              <a href="#tools">Tools <span className="dropdown-arrow">▼</span></a>
            </div>
            <a href="#blog">Blog</a>
          </nav>
          
          <button className="cta-button">Call me back</button>
        </div>
      </header>

      {/* Hero Section */}
      <main className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              All-In-One Platform For<br/>
              Pursuing Your Career in Abroad
            </h1>
            
            <p className="hero-subtitle">
              Kickstart your German study adventure with us! Enjoy free support, our premium<br/>
              services, and insightful resources - all just for you.
            </p>
            
            <div className="hero-buttons">
              <button className="primary-button">Free Profile Evaluation</button>
              <button className="secondary-button">Watch Video</button>
            </div>
          </div>
        </div>
      </main>

      {/* Dashboard Analytics Section */}
      <section className="dashboard-analytics">
        <div className="container">
          <div className="dashboard-grid">
            {/* New Visitors Chart */}
            <div className="analytics-card visitors-card">
              <h3>New visitors</h3>
              <div className="circular-chart-container">
                <div className="circular-chart">
                  <div className="chart-center">
                    <div className="total-visitors">102,928</div>
                  </div>
                </div>
                <div className="chart-legend">
                  <div className="legend-item">
                    <span className="legend-color winter"></span>
                    <span className="legend-text">68,642 Winter</span>
                  </div>
                  <div className="legend-item">
                    <span className="legend-color summer"></span>
                    <span className="legend-text">34,286 Summer</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Enrolled Students */}
            <div className="analytics-card enrolled-card">
              <h3>Enrolled Student</h3>
              <div className="enrolled-count">1128</div>
            </div>

            {/* Top Universities */}
            <div className="analytics-card universities-card">
              <h3>Top Universities</h3>
              <div className="universities-list">
                <div className="university-item">
                  <div className="university-logo">
                    <div className="logo-circle tum">TUM</div>
                  </div>
                  <div className="university-info">
                    <div className="university-name">Technical University of Munich</div>
                  </div>
                  <div className="university-rank">
                    <span className="rank-label">QS Rank</span>
                    <span className="rank-number">37</span>
                  </div>
                </div>

                <div className="university-item">
                  <div className="university-logo">
                    <div className="logo-circle tud">TU</div>
                  </div>
                  <div className="university-info">
                    <div className="university-name">TU Dresden</div>
                  </div>
                  <div className="university-rank">
                    <span className="rank-number">246</span>
                  </div>
                </div>

                <div className="university-item">
                  <div className="university-logo">
                    <div className="logo-circle uom">🎓</div>
                  </div>
                  <div className="university-info">
                    <div className="university-name">University of Mannheim</div>
                  </div>
                  <div className="university-rank">
                    <span className="rank-number">454</span>
                  </div>
                </div>

                <div className="university-item">
                  <div className="university-logo">
                    <div className="logo-circle fub">📘</div>
                  </div>
                  <div className="university-info">
                    <div className="university-name">Freie Universität Berlin</div>
                  </div>
                  <div className="university-rank">
                    <span className="rank-number">98</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Successful Students */}
            <div className="analytics-card students-card">
              <h3>Successful Students</h3>
              <div className="students-list">
                <div className="student-item">
                  <div className="student-avatar">
                    <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face" alt="Hardik" />
                  </div>
                  <span className="student-name">Hardik Mud</span>
                </div>

                <div className="student-item">
                  <div className="student-avatar">
                    <img src="https://images.unsplash.com/photo-1494790108755-2616b73d7e5b?w=40&h=40&fit=crop&crop=face" alt="Hridya" />
                  </div>
                  <span className="student-name">Hridya Ranj</span>
                </div>

                <div className="student-item">
                  <div className="student-avatar">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face" alt="Jibin" />
                  </div>
                  <span className="student-name">Jibin Thom</span>
                </div>

                <div className="student-item">
                  <div className="student-avatar">
                    <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face" alt="Poornima" />
                  </div>
                  <span className="student-name">Poornima M</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Content Sections */}
      <section className="content-sections">
        <div className="container">
          <div className="sections-grid">
            {/* Study in Germany Blog Section */}
            <div className="blog-section">
              <div className="section-header">
                <h2>Study in Germany</h2>
                <button className="view-all-btn">View All →</button>
              </div>
              
              <div className="blog-grid">
                <article className="blog-card">
                  <img src="https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=300&h=200&fit=crop" alt="University building" className="blog-image" />
                  <div className="blog-content">
                    <span className="blog-date">Jun 16, 2023</span>
                    <h3>Top Private Universities in Germany for International Students</h3>
                  </div>
                </article>

                <article className="blog-card">
                  <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=300&h=200&fit=crop" alt="Students" className="blog-image" />
                  <div className="blog-content">
                    <span className="blog-date">Jun 15, 2023</span>
                    <h3>Top 10 Universities for Winter Intake in Germany</h3>
                  </div>
                </article>

                <article className="blog-card">
                  <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop" alt="Beach scene" className="blog-image" />
                  <div className="blog-content">
                    <span className="blog-date">Jun 13, 2023</span>
                    <h3>Summer vs. Winter Intake for MS in Germany: Choose the Perfect Study Abroad Intake for You</h3>
                  </div>
                </article>

                <article className="blog-card question-card">
                  <div className="question-icon">?</div>
                  <div className="blog-content">
                    <span className="blog-date">Jun 12, 2023</span>
                    <h3>Study in Germany: Frequently Asked Questions - Answered</h3>
                  </div>
                </article>

                <article className="blog-card">
                  <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=300&h=200&fit=crop" alt="Money" className="blog-image" />
                  <div className="blog-content">
                    <span className="blog-date">Jun 11, 2023</span>
                    <h3>How Much Does it Cost to Study in Germany</h3>
                  </div>
                </article>

                <article className="blog-card">
                  <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=300&h=200&fit=crop" alt="Study desk" className="blog-image" />
                  <div className="blog-content">
                    <span className="blog-date">Jun 6, 2023</span>
                    <h3>Studying in Germany vs. USA - A Comprehensive Comparison</h3>
                  </div>
                </article>
              </div>
            </div>

            {/* Free Platform Section */}
            <div className="platform-section">
              <h2>Free Platform</h2>
              
              <div className="platform-features">
                <div className="feature-card">
                  <div className="feature-icon">📘</div>
                  <div className="feature-content">
                    <h3>MS in Germany Blog</h3>
                    <p>Free Information on everything you need to study in Germany</p>
                  </div>
                </div>

                <div className="feature-card">
                  <div className="feature-icon">📱</div>
                  <div className="feature-content">
                    <h3>MS in Germany App</h3>
                    <p>Free web app to take you through step by step application process</p>
                  </div>
                </div>

                <button className="get-started-btn">Get started</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* University Search Section */}
      <section className="university-search">
        <div className="container">
          <div className="search-filters">
            <select className="filter-select">
              <option>Intake</option>
            </select>
            <select className="filter-select">
              <option>University Type</option>
            </select>
            <select className="filter-select">
              <option>IELTS</option>
            </select>
            <select className="filter-select">
              <option>German Grade</option>
            </select>
          </div>

          <div className="university-grid">
            <div className="university-card">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop" alt="University of Cologne" className="university-image" />
              <div className="university-content">
                <h3>University of Cologne</h3>
                <p>MSc in Physics (Cologne)</p>
                <button className="save-btn">Save</button>
              </div>
            </div>

            <div className="university-card">
              <img src="https://images.unsplash.com/photo-1562774053-701939374585?w=300&h=200&fit=crop" alt="University of Hamburg" className="university-image" />
              <div className="university-content">
                <h3>University of Hamburg</h3>
                <p>Master of Science in Economics</p>
                <button className="save-btn">Save</button>
              </div>
            </div>

            <div className="university-card">
              <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=300&h=200&fit=crop" alt="TU Bergakademie Freiberg" className="university-image" />
              <div className="university-content">
                <h3>TU Bergakademie Freiberg</h3>
                <p>Applied Geoscience</p>
                <button className="save-btn">Save</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chat Widget */}
      <div className="chat-widget">
        <div className="chat-content">
          <span className="chat-text">Need Help? <strong>Chat with Us</strong></span>
          <div className="chat-icon">💬</div>
        </div>
      </div>
    </div>
  );
}

export default App;