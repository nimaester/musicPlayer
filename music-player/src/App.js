import React from 'react';
import MusicPlayer from './MusicPlayer';
import Song from './Song';
import './styles/app.scss';

const App = () => {
  return (
    <div className="App">
      <Song />
      <MusicPlayer />
    </div>
  );
}

export default App;
