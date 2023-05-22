import styles from "../styles/page.module.scss";
import { useState } from "react";
import YouTubeEmbed from "./youtube";

export default function Clips(props) {
  const [popupState, setPopupState] = useState(false);
  let videoId;
  const mcGonagall = "1dDwdhgxZ8M";
  const stringTheory = "n7cOlBxtKSo";

  function openPopup(id) {
    videoId = id;
    console.log(videoId);
    setPopupState(!popupState);
    console.log("popup open", popupState);
  }

  return (
    <div className={`${styles.gridSetup} ${styles.gridVideos}`}>
      <div className={styles.title}>
        <h1>clips</h1>
        <button onClick={() => props.changePage(5)}>back</button>
      </div>

      <div
        onClick={() => openPopup(mcGonagall)}
        className={styles.thumbnailCont}>
        <p>open video here</p>
      </div>

      <div
        onClick={() => openPopup(stringTheory)}
        className={styles.thumbnailCont}>
        <p>open video here</p>
      </div>

      {popupState && (
        <div onClick={() => openPopup()} className={styles.popupCont}>
          <YouTubeEmbed
            videoId={videoId}
            popupState={popupState}
            openPopup={openPopup}
          />
        </div>
      )}
    </div>
  );
}
