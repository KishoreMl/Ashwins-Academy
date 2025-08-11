import { coursesLink } from '../utils/constants';
import Blog1 from '../assets/blog1.jpg';
import Blog2 from '../assets/blog2.jpg';
import Blog3 from '../assets/blog3.jpg';

const handleBlogClick = (link) => {
    window.open(link, "_blank");
  };

const handleCoursesClick = () => {
    window.open(coursesLink, "_blank");
  };

const blogs = [
    {
        title:"21 Reasons Why to Study in Germany",
        link:"https://www.cbs.de/en/blog/why-study-in-germany",
        src:Blog1,
        date:"Jun 16, 2025"
    },
    {
        title:"Studying in Germany",
        link:"https://www.daad.in/en/study-research-in-germany/studying-in-germany/",
        src:Blog2,
        date:"Feb 7, 2025"
    },
    {
        title:"Reasons for studying in Germany",
        link:"https://www.expatrio.com/about-germany/reasons-studying-germany",
        src:Blog3,
        date:"Aug 13, 2024"
    },
]

const BlogSection = () => {
    return (
        <div class="container">
            <div class="sections-grid">
            {/* Study in Germany Blog Section */}
            <div class="blog-section">
            <div class="section-header">
                <h2>Study in Germany</h2>
                <div class="university-search-button">
                    <button class="primary-button view-all-btn" onClick={handleCoursesClick}>International Programmes in Germany</button>
                </div>
            </div>
            
            <div class="blog-grid">
                {blogs.map((blog) => (
                    <article class="blog-card" onClick={() => handleBlogClick(blog.link)}>
                        <img src={blog.src} alt={blog.title} class="blog-image" />
                        <div class="blog-content">
                            <span class="blog-date">{blog.date}</span>
                            <h3>{blog.title}</h3>
                        </div>
                    </article>
                ))}
                </div>  

            </div>
            </div>
        </div>
    )
}

export default BlogSection;