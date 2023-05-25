import styles from "../styles/page.module.scss";
import YouTube from "react-youtube";
//npm install react-youtube

export default function YouTubeEmbed(props) {
  console.log(props.video)
  // YouTube options (e.g., player size, autoplay, etc.)
  const opts = {
    height: "",
    width: "",
    playerVars: {
      autoplay: 1,
      controls: 0, // Disable player controls
      showinfo: 0, // Hide video title and uploader info
      modestbranding: 0, // Hide YouTube logo
      fs: 0, // Disable fullscreen button
    },
  };

  return <YouTube videoId={props.video.video_id} opts={opts} />;
}
