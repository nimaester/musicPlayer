import React, { useRef, useState } from "react";

const MusicPlayer = ({
  setPlaying,
  currentSong,
  setCurrentSong,
  isPlaying,
}) => {
  const formatTrackTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

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

  const changeTrack = (event) => {
    audioRef.current.currentTime = event.target.value;
    setSongInfo({
      ...songInfo,
      current: event.target.value,
    });
  };

  const playSong = () => {
    if (isPlaying) {
      setPlaying(false);
      audioRef.current.pause();
    } else {
      setPlaying(true);
      audioRef.current.play();
    }
  };

  return (
    <div className='player'>
      <div className='controls'>
        <p>{formatTrackTime(songInfo.current)}</p>
        <input
          onChange={changeTrack}
          min={0}
          max={songInfo.duration || 0}
          value={songInfo.current}
          type='range'
        />
        <p>{formatTrackTime(songInfo.duration)}</p>
      </div>
      <div className='player-buttons'>
        <i className='fas fa-angle-left previous' />
        {isPlaying ? (
          <i onClick={playSong} className='fas fa-pause pause' />
        ) : (
          <i onClick={playSong} className='fas fa-play play' />
        )}
        <i className='fas fa-angle-right next' />
      </div>
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

export default MusicPlayer;
