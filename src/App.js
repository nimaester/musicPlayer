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
  const [shuffle, setShuffle] = useState(false);
  const [repeat, setRepeat] = useState(false);

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

  const shuffleHandler = () => {
    return Math.floor(Math.random() * Math.floor(tracks.length))
  }

  const trackEndHandler = async () => {
    let index = tracks.findIndex((track) => (
      track.id === currentTrack.id
    ))
    if (repeat) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    } else if (shuffle) {
      await setCurrentTrack(tracks[shuffleHandler()]);
    } else {
      await setCurrentTrack(tracks[(index + 1) % tracks.length])
    }
  }

  return (
    <div className={`main ${showTracks ? 'track-list-open' : ''}`}>
      <div className="bc">
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
          shuffle={shuffle}
          setShuffle={setShuffle}
          repeat={repeat}
          setRepeat={setRepeat}
          shuffleHandler={shuffleHandler}
        />
      </div>
      <TrackList
        audioRef={audioRef}
        isPlaying={isPlaying}
        setPlaying={setPlaying}
        tracks={tracks}
        setCurrentTrack={setCurrentTrack}
        setTracks={setTracks}
        showTracks={showTracks}
        setShowTracks={setShowTracks}
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
