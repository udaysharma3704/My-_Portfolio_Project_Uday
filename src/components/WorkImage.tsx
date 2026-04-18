import { useState } from "react";
import { MdArrowOutward } from "react-icons/md";

interface Props {
  // image: string;  <-- You can remove this from props if you won't use it
  alt?: string;
  video?: string;
  link?: string;
}

const WorkImage = (props: Props) => {
  const [hovering, setHovering] = useState(false);

  return (
    <div className="work-image">
      <a
        className="work-image-in"
        href={props.link}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        target="_blank"
        rel="noreferrer"
        data-cursor={"disable"}
      >
        {props.link && (
          <div className="work-link">
            <MdArrowOutward />
          </div>
        )}
        
        {/* IMAGE REMOVED FROM HERE */}

        {/* If you want the video to be visible ALWAYS (not just hover), 
           remove the 'hovering &&' condition below 
        */}
        {props.video && (
          <video 
            src={`/videos/${props.video}`} 
            autoPlay 
            muted 
            playsInline 
            loop 
            className="work-video-layer"
          ></video>
        )}
      </a>
    </div>
  );
};

export default WorkImage;