import React, { useState, useEffect } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";

const VideoPlayer = () => {
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    const options = {
      techOrder: ["html5", "flash"],
      sourceOrder: false,
      autoplay: true,
      controls: true,
      sources: [
        {
          type: "video/mp4",
          src:
            "https://instincthub.nyc3.digitaloceanspaces.com/instincthub/Rust_basic.mp4",
          withCredentials: true,
        },
      ],
    };

    const player = videojs("video-player", options);
    setPlayer(player);

    return () => {
      player.dispose();
    };
  }, []);

  return (
    <div>
      <div data-vjs-player>
        <video id="video-player" className="video-js"></video>
      </div>
    </div>
  );
};

export default VideoPlayer;
