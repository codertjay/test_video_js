import React, { useRef, useEffect } from "react";
import videojs from "video.js";
import "videojs-contrib-hls";

const LoginVideoPlayer = () => {
  const playerRef = useRef(null);

  TestCode();
  
  useEffect(() => {
    const player = videojs(playerRef.current, {
      sources: [
        {
          src:
            "https://instincthub.nyc3.digitaloceanspaces.com/instincthub/Rust_basic.mp4",
          type: "video/mp4",
          xhr: {
            headers: {
              Authorization:
                "Bearer dop_v1_c83d0878125b67070a5e26de30f46c534acff5ff535697bd182f612f8bd7b98f",
            },
          },
        },
      ],
    });

    return () => {
      player.dispose();
    };
  }, []);

  return (
    <video
      id="my-video-player"
      ref={playerRef}
      className="video-js vjs-default-skin"
      controls
    />
  );
};

export default LoginVideoPlayer;

const TestCode = () => {
  var myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    "Bearer dop_v1_c83d0878125b67070a5e26de30f46c534acff5ff535697bd182f612f8bd7b98f"
  );

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch(
    "https://instincthub.nyc3.digitaloceanspaces.com/instincthub/Rust_basic.mp4",
    requestOptions
  )
    .then((response) => console.log(response.text()))
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
};
