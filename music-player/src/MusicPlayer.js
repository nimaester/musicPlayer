import React, { useRef } from 'react';

const MusicPlayer = ({currentSong, setCurrentSong}) => {

  const audioRef = useRef(null);
  const playSong = () => {

  }

  return (
    <div className="player">
      <div className="controls">
        <p>Start</p>
        <input type="range" />
        <p>End</p>
      </div>
      <div className="player-buttons">
        <i className="fas fa-angle-left previous" />
        <i onClick={playSong} className="fas fa-play play"/>
        <i className="fas fa-angle-right next" />
      </div>
      <audio src={currentSong.audio} />

    </div>
  );
};

export default MusicPlayer;