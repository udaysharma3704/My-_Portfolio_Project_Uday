import { useState } from "react";
import { MdArrowOutward } from "react-icons/md";

interface Props {
  image: string;
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
        
        {/* We use 'hovering' here to fade the image out when the video plays */}
        <img 
          src={props.image} 
          alt={props.alt} 
          style={{ 
            opacity: hovering && props.video ? 0 : 1, 
            transition: 'opacity 0.3s ease' 
          }}
        />

        {/* We use 'hovering' here to only play the video on hover */}
        {props.video && hovering && (
          <video 
            src={`/videos/${props.video}`} 
            autoPlay 
            muted 
            playsInline 
            loop 
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
          ></video>
        )}
      </a>
    </div>
  );
};

export default WorkImage;