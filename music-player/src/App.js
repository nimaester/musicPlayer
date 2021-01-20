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
  const [trackInfo, setTrackInfo] = useState({
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
    setTrackInfo({
      ...trackInfo,
      current,
      duration,
      sliderPercent: sliderAmount,
    });
  };

  const trackEndHandler = async () => {
    let index = tracks.findIndex((track) => (
      track.id === currentTrack.id
    ))
    await setCurrentTrack(tracks[(index + 1) % tracks.length])

  }

  return (
    <div className={`main ${showTracks ? 'track-list-open' : 'overlay'}`}>
      <Nav showTracks={showTracks} setShowTracks={setShowTracks} />
      <TrackInfo currentTrack={currentTrack} />
      <TrackPlayer
        tracks={tracks}
        isPlaying={isPlaying}
        setPlaying={setPlaying}
        currentTrack={currentTrack}
        setCurrentTrack={setCurrentTrack}
        audioRef={audioRef}
        trackInfo={trackInfo}
        setTrackInfo={setTrackInfo}
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
        onEnded={trackEndHandler}
      />
    </div>
  );
};

export default App;
