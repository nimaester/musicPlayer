import React, { useRef } from 'react';

const MusicPlayer = ({setPlaying, currentSong, setCurrentSong, isPlaying}) => {

  const audioRef = useRef(null);
  const playSong = () => {
    if (isPlaying) {
      setPlaying(false);
      audioRef.current.pause();
    } else {
      setPlaying(true);
      audioRef.current.play();
    }
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
      <audio ref={audioRef} src={currentSong.audio}></audio>

    </div>
  );
};

export default MusicPlayer;