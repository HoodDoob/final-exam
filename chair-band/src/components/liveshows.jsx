import styles from "../styles/page.module.scss";
import { useState, useEffect } from "react";
import YouTubeEmbed from "./youtube";
import SingleVideo from "./singlevideo";
import { TextModifierContext } from './TextModifier';
import { useContext } from "react";

export default function Liveshows(props) {
  const [liveshows, setLiveshows] = useState([]);
  const { modifyEnabled, modifyAllText } = useContext(TextModifierContext);

  useEffect(() => {
    if (modifyEnabled) {
      modifyAllText();
    }
  }, []);

  useEffect(() => {
    function handleVideos() {
      props.videos.filter((item) => {
        if (item.categories[0] === 10) {
          setLiveshows(liveshows => [...liveshows, item]);
        }
      });
    }
    handleVideos();
  }, []);
  console.log(liveshows);

  function closePopup() {
    props.setPopupState(false);
    console.log("popup closed");
  }
  return (
    <div className={`${styles.gridSetup} ${styles.gridVideos}`}>
      <div className={styles.title}>
        <h1>live shows</h1>
        <button  onClick={() => props.changePage(5)}>back</button>
      </div>

      <div className={styles.videoGrid}>
        {liveshows.map((video, i) => (
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