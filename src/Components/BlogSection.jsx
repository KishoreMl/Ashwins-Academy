import { coursesLink } from '../utils/constants';

const handleClick = () => {
    window.open(coursesLink, "_blank");
  };
const BlogSection = () => {
    return (
        <div class="container">
            <div class="sections-grid">
            {/* Study in Germany Blog Section */}
            <div class="blog-section">
            <div class="section-header">
                <h2>Study in Germany</h2>
                <div class="university-search-button">
                    <button class="primary-button view-all-btn" onClick={handleClick}>International Programmes in Germany</button>
                </div>
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

            </div>
            </div>
        </div>
      </div>
    )
}

export default BlogSection;