import React, { useRef, useState } from 'react';

const MusicPlayer = ({setPlaying, currentSong, setCurrentSong, isPlaying}) => {


  const formatTrackTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    )
  }

  const [songInfo, setSongInfo] = useState({
    current: null,
    duration: null,
  })
  const audioRef = useRef(null);

  const updateTrack = (event) => {
    const current = event.target.currentTime;
    const duration = event.target.duration;
    setSongInfo({
      ...songInfo, current, duration
    })

  }

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
        <p>{formatTrackTime(songInfo.current)}</p>
        <input type="range" />
        <p>{formatTrackTime(songInfo.duration)}</p>
      </div>
      <div className="player-buttons">
        <i className="fas fa-angle-left previous" />
        <i onClick={playSong} className="fas fa-play play"/>
        <i className="fas fa-angle-right next" />
      </div>
      <audio
        onTimeUpdate={updateTrack}
        ref={audioRef}
        src={currentSong.audio}
        onLoadedMetadata={updateTrack}

      />

    </div>
  );
};

export default MusicPlayer;