import './App.css';
import MyVideoPlayer from "./VideoPlayer"
import PlayerComponent from "./Players"
import LoginVideoPlayer from "./LoginVideoPlayer"
import React from 'react';

function App() {
    return (
        <div className="App">
            {/*<h1>Testing</h1>*/}
            {/*<PlayerComponent/>*/}
            <LoginVideoPlayer/>
            {/* <MyVideoPlayer/> */}
        </div>
    );
}

export default App;
