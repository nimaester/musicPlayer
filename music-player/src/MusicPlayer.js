import React, { useState } from "react";

const MusicPlayer = ({
  setPlaying,
  currentTrack,
  setCurrentTrack,
  isPlaying,
  audioRef,
  setSongInfo,
  songInfo,
}) => {
  const formatTrackTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
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

  const trackHandler = (type) => {

    if (type === "next" ) {

    } else {

    }
  }

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
        <p>{formatTrackTime(songInfo.duration || "")}</p>
      </div>
      <div className='player-buttons'>
        <i onClick={() => trackHandler(previous)} className='fas fa-angle-left previous' />
        {isPlaying ? (
          <i onClick={playSong} className='fas fa-pause pause' />
        ) : (
          <i onClick={playSong} className='fas fa-play play' />
        )}
        <i onClick={() => trackHandler(previous)} className='fas fa-angle-right next' />
      </div>
    </div>
  );
};

export default MusicPlayer;
