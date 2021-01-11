import React, { useState } from 'react';
import MusicPlayer from './MusicPlayer';
import Song from './Song';
import './styles/app.scss';
import songList from './SongLists';

const App = () => {

  const [songs, setSongs] = useState(songList());
  const [currentSong, setCurrentSong] = useState(songs[0]);

  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <MusicPlayer currentSong={currentSong, setCurrentSong} />
    </div>
  );
}

export default App;
