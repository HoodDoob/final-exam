import styles from "../styles/page.module.scss";
import { useState, useEffect } from "react";
import { TextModifierContext } from './TextModifier';
import { useContext } from "react";
import YouTubeEmbed from "./youtube";
import SingleVideo from "./singlevideo";

export default function Clips(props) {
  const [clips, setClips] = useState([]);
  const { modifyEnabled, modifyAllText } = useContext(TextModifierContext);


  useEffect(() => {
    function handleVideos() {
      props.videos.filter((item) => {
        if (item.categories[0] === 8) {
          setClips(clips => [...clips, item]);
        }
      });
    }
    handleVideos();
  }, []);
  console.log(clips);

  function closePopup() {
    props.setPopupState(false);
    console.log("popup closed");
  }

  useEffect(() => {
    if (modifyEnabled) {
      modifyAllText();
    }
  }, []);

  return (
    <div className={`${styles.gridSetup} ${styles.gridVideos}`}>
      <div className={styles.title}>
        <h1>clips</h1>
        <button onClick={() => props.changePage(5)}>back</button>
      </div>

      <div className={styles.videoGrid}>
        {clips.map((video, i) => (
          <SingleVideo video={video} key={i} openVideo={props.openVideo} />
        ))}
      </div>

      {props.popupState && (
        <div className={styles.popupCont} onClick={() => closePopup()}>
          <YouTubeEmbed
            popupState={props.popupState}
            video={props.openedVideo}
          />
        </div>
      )}
    </div>
  );
}
