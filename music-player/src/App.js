import React, { useState, useRef } from "react";
import MusicPlayer from "./MusicPlayer";
import Song from "./Song";
import "./styles/app.scss";
import songList from "./SongLists";
import TrackList from "./TrackList";

const App = () => {
  const [songs, setSongs] = useState(songList());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    current: 0,
    duration: 0,
  });

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
