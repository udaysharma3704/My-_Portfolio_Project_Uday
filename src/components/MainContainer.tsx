import { lazy, PropsWithChildren, Suspense, useEffect, useState } from "react";
import About from "./About";
import Career from "./Career";
import Contact from "./Contact";
import Cursor from "./Cursor";
import Landing from "./Landing";
import Navbar from "./Navbar";
import SocialIcons from "./SocialIcons";
import WhatIDo from "./WhatIDo";
import Work from "./Work";
import setSplitText from "./utils/splitText";

// Lazy loading the TechStack (C++, Java, AWS bubbles) for better performance
const TechStack = lazy(() => import("./TechStack"));

const MainContainer = ({ children }: PropsWithChildren) => {
  const [isDesktopView, setIsDesktopView] = useState<boolean>(
    window.innerWidth > 1024
  );

  useEffect(() => {
    const resizeHandler = () => {
      // Re-calculates text animations on window resize
      setSplitText();
      setIsDesktopView(window.innerWidth > 1024);
    };
    
    resizeHandler();
    window.addEventListener("resize", resizeHandler);
    
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []); // Removed isDesktopView from dependency to prevent unnecessary re-runs

  return (
    <div className="container-main">
      {/* Interactive Cursor Effect */}
      <Cursor />
      
      {/* Navigation and Social Sidebar */}
      <Navbar />
      <SocialIcons />

      {/* 3D Character Rendering (The 'children' from App.tsx) */}
      {isDesktopView && children}

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div className="container-main">
            {/* Landing Section: On mobile, the 3D character moves inside here */}
            <Landing>{!isDesktopView && children}</Landing>
            
            <About />
            <WhatIDo />
            <Career /> {/* Your Learning Journey timeline */}
            <Work />   {/* Your C++, Java, and Cloud Projects */}

            {/* TechStack 3D Physics Scene (Hidden on mobile for performance) */}
            {isDesktopView && (
              <Suspense fallback={<div className="loading-placeholder">Loading Tech Stack...</div>}>
                <TechStack />
              </Suspense>
            )}

            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;