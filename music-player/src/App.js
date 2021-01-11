import React, { useState } from 'react';
import MusicPlayer from './MusicPlayer';
import Song from './Song';
import './styles/app.scss';
import songList from './SongLists';

const App = () => {

  const [songs, setSongs] = useState(songList());

  return (
    <div className="App">
      <Song />
      <MusicPlayer />
    </div>
  );
}

export default App;
