import React from 'react'
import VideoPlayer from 'video-player'
import {Player} from '@clappr/player'

const PlayerComponent = () => {
    return (
        <VideoPlayer>
            <Player
                source={{
                    hls: 'https://instincthub.nyc3.digitaloceanspaces.com/instincthub/test/maeet.mp4',
                    poster: 'https://instincthub.nyc3.digitaloceanspaces.com/instincthub/test/maeet.mp4'
                }}
                playsInline
                autoPlay
            />
        </VideoPlayer>
    );
}


export default PlayerComponent;