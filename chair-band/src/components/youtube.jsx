import YouTube from 'react-youtube';
//npm install react-youtube


export default function YouTubeEmbed({videoId}) {
        // YouTube options (e.g., player size, autoplay, etc.)
        const opts = {
          height: '360',
          width: '640',
          playerVars: {
            autoplay: 0,
          },
        };

        return <YouTube videoId={videoId} opts={opts} />;
} 
