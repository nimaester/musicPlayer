import React, { useEffect } from "react";

const TrackPlayer = ({
  tracks,
  setPlaying,
  currentTrack,
  setCurrentTrack,
  isPlaying,
  audioRef,
  setTrackInfo,
  trackInfo,
  sliderAmount
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
    setTrackInfo({
      ...trackInfo,
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

  const trackHandler = async (type) => {
    let index = tracks.findIndex((track) => (
      track.id === currentTrack.id
    ))
    if (type === "next") {
      await setCurrentTrack(tracks[(index + 1) % tracks.length])
    } else if (type === "previous"){
      if ((index - 1) % tracks.length === -1) {
        setCurrentTrack(tracks[tracks.length - 1])
      } else {
        setCurrentTrack(tracks[(index - 1) % tracks.length])
      }
    }
    if(isPlaying) {
      audioRef.current.play()
    }
  }

  const sliderAnimation = {
    transform: `translateX(${trackInfo.sliderPercent}%)`
  }

  const slidedGradientAnimation = {
    // background: `linear-gradient(to right, ${currentTrack.color[0]}, ${currentTrack.color[1]})`
    background: '#32e0c4'
  }

  return (
    <div className='player'>
      <div className='controls'>
        <p>{formatTrackTime(trackInfo.current)}</p>
        <div style={slidedGradientAnimation} className='track'>
          <input
            onChange={changeTrack}
            min={0}
            max={trackInfo.duration || 0}
            value={trackInfo.current}
            type='range'
          />
          <div style={sliderAnimation} className='track-animation' />
        </div>
        <p>{formatTrackTime(trackInfo.duration || "")}</p>
      </div>
      <div className='player-buttons'>
        <i onClick={() => trackHandler("previous")} className='fas fa-angle-left fa-2x previous' />
        {isPlaying ? (
          <i onClick={playSong} className='fas fa-pause fa-lg pause' />
        ) : (
          <i onClick={playSong} className='fas fa-play fa-lg play' />
        )}
        <i onClick={() => trackHandler("next")} className='fas fa-angle-right fa-2x next' />
      </div>
    </div>
  );
};

export default TrackPlayer;
