import styles from "../styles/page.module.scss";
import YouTubeEmbed from "./youtube";

export default function Clips(props) {
  const videoId = '1dDwdhgxZ8M';

  return (
    <div className={`${styles.gridSetup} ${styles.gridVideos}`}>
      <div className={styles.title}>
        <h1>clips</h1>
        <button  onClick={() => props.changePage(5)}>back</button>
      </div>
      
      <YouTubeEmbed videoId={videoId} />
      <YouTubeEmbed videoId={videoId} />
      <YouTubeEmbed videoId={videoId} />
      <YouTubeEmbed videoId={videoId} />
      <YouTubeEmbed videoId={videoId} />
      <YouTubeEmbed videoId={videoId} />

    </div>
  );
}
