import React from 'react';

const MusicPlayer = () => {
  return (
    <div className="player">
      <div className="controls">
        <p>Start</p>
        <input type="range" />
        <p>End</p>
      </div>
      <div className="player-buttons">
        <i className="fas fa-angle-left previous" />
        <i className="fas fa-play play"/>
        <i className="fas fa-angle-right next" />
      </div>

    </div>
  );
};

export default MusicPlayer;