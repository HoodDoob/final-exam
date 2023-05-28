import Image from "next/image";
import styles from "../styles/page.module.scss";
import { useState } from "react";

export default function SingleVideo(props) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className={styles.hoverContainer}>
      <div
        onClick={() => props.openVideo(props.video.title.rendered)}
        className={styles.singlevideoCont}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        
        {isHovered && (
          <div className={styles.hiddencontent}>
            <h3>{props.video.video_title}</h3>
          </div>
        )}
        <Image
          priority
          src={props.video.thumbnail_link}
          alt=""
          width={200}
          height={100}
        />
      </div>
    </div>
  );
}
