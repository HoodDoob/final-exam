import styles from "../styles/page.module.scss";
import YouTube from "react-youtube";
//npm install react-youtube

export default function YouTubeEmbed(props) {
  // YouTube options (e.g., player size, autoplay, etc.)
  const opts = {
    height: "",
    width: "",
    playerVars: {
      autoplay: true,
      controls: 0, // Disable player controls
      showinfo: 0, // Hide video title and uploader info
      modestbranding: 0, // Hide YouTube logo
      fs: 0, // Disable fullscreen button
    },
  };

  return (

    <h1>{props.video.name}</h1>
      // <YouTube videoId={props.videoId} opts={opts} />

  );
}
