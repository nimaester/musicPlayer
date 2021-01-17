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

  const audioRef = useRef(null);

  return (
    <div className='App'>
      <Song currentSong={currentSong} />
      <MusicPlayer
        isPlaying={isPlaying}
        setPlaying={setPlaying}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
      />
      <TrackList
        setPlaying={setPlaying}
        songs={songs}
        setCurrentSong={setCurrentSong}
      />
    </div>
  );
};

export default App;
