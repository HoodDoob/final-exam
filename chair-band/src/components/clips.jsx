import styles from "../styles/page.module.scss";
import { useState } from "react";
import YouTubeEmbed from "./youtube";
import SingleVideo from "./singlevideo";

export default function Clips(props) {

  const mcGonagall = "1dDwdhgxZ8M";
  const stringTheory = "n7cOlBxtKSo";

  function closePopup() {
    props.setPopupState(false);
    console.log("popup closed");
  }

  return (
    <div className={`${styles.gridSetup} ${styles.gridVideos}`}>
      <div className={styles.title}>
        <h1>clips</h1>
        <button onClick={() => props.changePage(5)}>back</button>
      </div>

      <div>
        {props.videos.map((video, i) => (
          <SingleVideo 
          video={video}
          key={i}
          openVideo={props.openVideo}
          />
        ))}
      </div>

 {/*      <div
        onClick={() => openPopup(mcGonagall)}
        className={styles.thumbnailCont}>
        <p>open video here</p>
      </div>

      <div
        onClick={() => openPopup(stringTheory)}
        className={styles.thumbnailCont}>
        <p>open video here</p>
      </div> */}

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
