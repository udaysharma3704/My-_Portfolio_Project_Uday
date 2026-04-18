import "./styles/Work.css";
import WorkImage from "./WorkImage"; // The import causing the error

const projects = [
  {
    title: "Scalable OTT Platform",
    category: "Cloud Infrastructure & UI/UX",
    tools: "AWS (EC2, S3), CloudFront, React",
    image: "/images/ott-platform.webp", 
    video: "ott-demo.mp4",
    link: "https://github.com/udaysharma3704", 
  },
  {
    title: "Car Rental System",
    category: "Application Development",
    tools: "C++, OOP, File Handling",
    image: "/images/car-rental-ui.webp",
    video: "car-demo.mp4",
    link: "https://github.com/udaysharma3704",
  },
  {
    title: "Movie Booking System",
    category: "Java Enterprise",
    tools: "Java, MySQL, RESTful APIs",
    image: "/images/movie-booking.webp",
    video: "movie-demo.mp4",
    link: "https://github.com/udaysharma3704",
  },
];

const Work = () => {
  return (
    <div className="work-section section-container" id="work">
      <div className="work-container">
        <div className="work-header">
          <h2 className="section-title">Selected Work</h2>
        </div>
        <div className="work-items">
          {projects.map((project, index) => (
            <div className="work-item" key={index}>
              <div className="work-info">
                <h3>{project.title}</h3>
                <p>{project.category}</p>
                <span>{project.tools}</span>
              </div>
              
              {/* FIXED: This is where WorkImage is now being 'read' and used */}
              <WorkImage 
                image={project.image} 
                video={project.video} 
                link={project.link} 
                alt={project.title}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;