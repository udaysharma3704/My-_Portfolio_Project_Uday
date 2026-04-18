import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };

  useEffect(() => {
    if (ScrollTrigger.isTouch) {
      containerRef.current.forEach((container) => {
        if (container) {
          container.classList.remove("what-noTouch");
          container.addEventListener("click", () => handleClick(container));
        }
      });
    }
    return () => {
      containerRef.current.forEach((container) => {
        if (container) {
          container.removeEventListener("click", () => handleClick(container));
        }
      });
    };
  }, []);

  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line x1="0" y1="0" x2="0" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="7,7" />
              <line x1="100%" y1="0" x2="100%" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="7,7" />
            </svg>
          </div>

          {/* SECTION 1: APPLICATION DEVELOPMENT */}
          <div className="what-content what-noTouch" ref={(el) => setRef(el, 0)}>
            <div className="what-border1">
              <svg height="100%">
                <line x1="0" y1="0" x2="100%" y2="0" stroke="white" strokeWidth="2" strokeDasharray="6,6" />
                <line x1="0" y1="100%" x2="100%" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="6,6" />
              </svg>
            </div>
            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>APP DEVELOPMENT</h3>
              <h4>C++, Java & OOP Architecture</h4>
              <p>
                Building high-performance applications with a focus on Object-Oriented 
                Programming. From memory management in C++ to enterprise logic in Java.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">C++ (DSA)</div>
                <div className="what-tags">Java</div>
                <div className="what-tags">OOP Design</div>
                <div className="what-tags">MySQL</div>
                <div className="what-tags">System Design</div>
                <div className="what-tags">Agile</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>

          {/* SECTION 2: CLOUD & INFRASTRUCTURE */}
          <div className="what-content what-noTouch" ref={(el) => setRef(el, 1)}>
            <div className="what-border1">
              <svg height="100%">
                <line x1="0" y1="100%" x2="100%" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="6,6" />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>CLOUD & INFRA</h3>
              <h4>AWS & Scalable Systems</h4>
              <p>
                Designing and deploying cloud-native solutions. I focus on highly available 
                infrastructure, automation, and optimizing cloud data lifecycles.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">AWS (EC2/S3)</div>
                <div className="what-tags">Cloud Deployment</div>
                <div className="what-tags">Linux / Bash</div>
                <div className="what-tags">RDS & DynamoDB</div>
                <div className="what-tags">Auto Scaling</div>
                <div className="what-tags">IAM & Security</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");
  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);
    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}