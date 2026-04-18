import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Learning <span>&</span>
          <br /> Tech Stack
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          {/* YEAR 3: Cloud & Advanced Systems */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Cloud & Infrastructure</h4>
                <h5>AWS | Cloud Computing</h5>
              </div>
              <h3>YEAR 3</h3>
            </div>
            <p>
              Mastering **AWS Services** (EC2, S3, RDS, DynamoDB). Currently preparing for the 
              **AWS Certified Cloud Practitioner** exam and implementing auto-scaling 
              infrastructure for scalable web applications.
            </p>
          </div>

          {/* YEAR 2: Java & Application Logic */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Application Development</h4>
                <h5>Java | SQL | Databases</h5>
              </div>
              <h3>YEAR 2</h3>
            </div>
            <p>
              Focused on **Java Enterprise** and database management. Built a full-stack 
              **Movie Booking System** using Java and integrated MySQL for real-time 
              transaction processing and seat reservation logic.
            </p>
          </div>

          {/* YEAR 1: Core Fundamentals */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Programming Foundations</h4>
                <h5>C++ | OOP | DSA</h5>
              </div>
              <h3>YEAR 1</h3>
            </div>
            <p>
              Built a strong foundation in **Data Structures and Algorithms** using **C++**. 
              Applied **Object-Oriented Programming** principles to develop a persistent 
              **Car Rental Management System** with advanced File I/O operations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;