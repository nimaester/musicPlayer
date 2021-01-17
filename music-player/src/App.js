import React, { useState, useRef } from "react";
import MusicPlayer from "./MusicPlayer";
import Song from "./Song";
import "./styles/app.scss";
import Tracks from "./Tracks";
import TrackList from "./TrackList";
import Nav from "./Nav";

const App = () => {
  const [songs, setSongs] = useState(Tracks());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    current: 0,
    duration: 0,
  });
  const [showTracks, setShowTracks] = useState(false);

  const audioRef = useRef(null);
  const updateTrack = (event) => {
    const current = event.target.currentTime;
    const duration = event.target.duration;
    setSongInfo({
      ...songInfo,
      current,
      duration,
    });
  };

  return (
    <div className='App'>
      <Nav showTracks={showTracks} setShowTracks={setShowTracks} />
      <Song currentSong={currentSong} />
      <MusicPlayer
        isPlaying={isPlaying}
        setPlaying={setPlaying}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        audioRef={audioRef}
        songInfo={songInfo}
        setSongInfo={setSongInfo}
      />
      <TrackList
        audioRef={audioRef}
        isPlaying={isPlaying}
        setPlaying={setPlaying}
        songs={songs}
        setCurrentSong={setCurrentSong}
        setSongs={setSongs}
        showTracks={showTracks}
      />
      <audio
        onTimeUpdate={updateTrack}
        ref={audioRef}
        src={currentSong.audio}
        //updates the current song duration on load
        onLoadedMetadata={updateTrack}
      />
    </div>
  );
};

export default App;
