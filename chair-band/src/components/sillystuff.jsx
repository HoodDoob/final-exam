import styles from "../styles/page.module.scss";
import { useState, useEffect } from "react";
import YouTubeEmbed from "./youtube";
import SingleVideo from "./singlevideo";
import { TextModifierContext } from './TextModifier';
import { useContext } from "react";

export default function SillyStuff(props) {
  const [sillystuff, setSillystuff] = useState([]);
  const { modifyEnabled, modifyAllText } = useContext(TextModifierContext);

  useEffect(() => {
    if (modifyEnabled) {
      modifyAllText();
    }
  }, []);

  useEffect(() => {
    function handleVideos() {
      props.videos.filter((item) => {
        if (item.categories[0] === 9) {
          setSillystuff(sillystuff => [...sillystuff, item]);
        }
      });
    }
    handleVideos();
  }, []);
  console.log(sillystuff);

  function closePopup() {
    props.setPopupState(false);
    console.log("popup closed");
  }


  return (
    <div className={`${styles.gridSetup} ${styles.gridVideos}`}>
      <div className={styles.title}>
        <h1>silly stuff</h1>
        <button  onClick={() => props.changePage(5)}>back</button>
      </div>

      <div  className={styles.videoGrid}>
        {sillystuff.map((video, i) => (
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