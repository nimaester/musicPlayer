import React, { useEffect } from "react";

const TrackPlayer = ({
  tracks,
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

  useEffect(() => {
    const newTracks = tracks.map((song) =>
      song.id === currentTrack.id ? (song.active = true) : (song.active = false)
    );
    if (isPlaying) {
      const autoPlay = audioRef.current.play();
      autoPlay !== undefined
        ? autoPlay.then((audio) => {
            audioRef.current.play();
          })
        : null;
    }
  }, [currentTrack])

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
    let index = tracks.findIndex((track) => (
      track.id === currentTrack.id
    ))
    if (type === "next") {
      setCurrentTrack(tracks[(index + 1) % tracks.length])
    } else if (type === "previous"){
      if ((index - 1) % tracks.length === -1) {
        setCurrentTrack(tracks[tracks.length - 1])
      } else {
        setCurrentTrack(tracks[(index - 1) % tracks.length])
      }
    }
  }

  return (
    <div className='player'>
      <div className='controls'>
        <p>{formatTrackTime(songInfo.current)}</p>
        <div className='track'>
          <input
            onChange={changeTrack}
            min={0}
            max={songInfo.duration || 0}
            value={songInfo.current}
            type='range'
          />
          <div className='track-animation' />
        </div>
        <p>{formatTrackTime(songInfo.duration || "")}</p>
      </div>
      <div className='player-buttons'>
        <i onClick={() => trackHandler("previous")} className='fas fa-angle-left previous' />
        {isPlaying ? (
          <i onClick={playSong} className='fas fa-pause pause' />
        ) : (
          <i onClick={playSong} className='fas fa-play play' />
        )}
        <i onClick={() => trackHandler("next")} className='fas fa-angle-right next' />
      </div>
    </div>
  );
};

export default TrackPlayer;
