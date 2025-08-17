import { coursesLink } from '../../utils/constants';
import Blog1 from '../../assets/Blog1.jpg';
import Blog2 from '../../assets/Blog2.jpg';
import Blog3 from '../../assets/Blog3.jpg';

const handleBlogClick = (link) => {
    window.open(link, "_blank");
  };

const handleCoursesClick = () => {
    window.open(coursesLink, "_blank");
  };

const BlogSection = () => {
    return (
        <div class="container"> 
            <div class="sections-grid">
            <div class="blog-section">
                <div class="section-header">
                    <h2>Study in Germany</h2>
                    <div class="university-search-button">
                        <button class="primary-button view-all-btn" onClick={handleCoursesClick}>International Programmes in Germany</button>
                    </div>
                </div>
                
                <div class="blog-grid">
                        <article class="blog-card" onClick={() => handleBlogClick("https://www.cbs.de/en/blog/why-study-in-germany")}>
                            <img src={Blog1} alt="21 Reasons Why to Study in Germany" class="blog-image" />
                            <div class="blog-content">
                                <span class="blog-date">Jun 16, 2025</span>
                                <h3>21 Reasons Why to Study in Germany</h3>
                            </div>
                        </article>
                        <article class="blog-card" onClick={() => handleBlogClick("https://www.daad.in/en/study-research-in-germany/studying-in-germany/")}>
                            <img src={Blog2} alt="Studying in Germany" class="blog-image" />
                            <div class="blog-content">
                                <span class="blog-date">Feb 7, 2025</span>
                                <h3>Studying in Germany</h3>
                            </div>
                        </article>
                        <article class="blog-card" onClick={() => handleBlogClick("https://www.expatrio.com/about-germany/reasons-studying-germany")}>
                            <img src={Blog3} alt="Reasons for studying in Germany" class="blog-image" />
                            <div class="blog-content">
                                <span class="blog-date">Aug 13, 2024</span>
                                <h3>Reasons for studying in Germany</h3>
                            </div>
                        </article>
                    </div>  
                </div>
            </div>
        </div>
    )
}

export default BlogSection;