import { coursesLink } from '../../utils/constants';

const handleBlogClick = (link) => {
    window.open(link, "_blank");
  };

const handleCoursesClick = () => {
    window.open(coursesLink, "_blank");
  };

const blogs = [
    {
        title: "21 Reasons Why to Study in Germany",
        link: "https://www.cbs.de/en/blog/why-study-in-germany",
        src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&auto=format&fit=crop&q=60",
        date: "Jun 16, 2025",
    },
    {
        title: "Studying in Germany",
        link: "https://www.daad.in/en/study-research-in-germany/studying-in-germany/",
        src: "https://images.unsplash.com/photo-1460518451285-97b6aa326961?w=800&auto=format&fit=crop&q=60",
        date: "Feb 7, 2025",
    },
    {
        title: "Reasons for studying in Germany",
        link: "https://www.expatrio.com/about-germany/reasons-studying-germany",
        src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&auto=format&fit=crop&q=60",
        date: "Aug 13, 2024",
    },
];

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