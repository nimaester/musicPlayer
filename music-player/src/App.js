import React, { useState, useRef } from "react";
import TrackPlayer from "./TrackPlayer";
import TrackInfo from "./TrackInfo";
import "./styles/app.scss";
import Tracks from "./Tracks";
import TrackList from "./TrackList";
import Nav from "./Nav";

const App = () => {
  const [tracks, setTracks] = useState(Tracks());
  const [currentTrack, setCurrentTrack] = useState(tracks[0]);
  const [isPlaying, setPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    current: 0,
    duration: 0,
    sliderPercent: 0,
  });
  const [showTracks, setShowTracks] = useState(false);

  const audioRef = useRef(null);

  const updateTrack = (event) => {
    const current = event.target.currentTime;
    const duration = event.target.duration;
    const currentRounded = Math.round(current);
    const durationRounded = Math.round(duration);
    const sliderAmount = Math.round((currentRounded / durationRounded) * 100);
    setSongInfo({
      ...songInfo,
      current,
      duration,
      sliderPercent: sliderAmount,
    });
  };

  return (
    <div className='App'>
      <Nav showTracks={showTracks} setShowTracks={setShowTracks} />
      <TrackInfo currentTrack={currentTrack} />
      <TrackPlayer
        tracks={tracks}
        isPlaying={isPlaying}
        setPlaying={setPlaying}
        currentTrack={currentTrack}
        setCurrentTrack={setCurrentTrack}
        audioRef={audioRef}
        songInfo={songInfo}
        setSongInfo={setSongInfo}
      />
      <TrackList
        audioRef={audioRef}
        isPlaying={isPlaying}
        setPlaying={setPlaying}
        tracks={tracks}
        setCurrentTrack={setCurrentTrack}
        setTracks={setTracks}
        showTracks={showTracks}
      />
      <audio
        onTimeUpdate={updateTrack}
        ref={audioRef}
        src={currentTrack.audio}
        //updates the current song duration on load
        onLoadedMetadata={updateTrack}
      />
    </div>
  );
};

export default App;
