import { FC } from "react";

const VideoSrc:FC = () => {
  return (
    <div className="container">
      <iframe
        width="100%"
        height="630"
        src="https://www.youtube.com/embed/G4UHPQ-GfcE?controls=0"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoSrc;
