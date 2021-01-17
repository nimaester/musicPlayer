import React from "react";

const TrackSong = ({ isPlaying, track, songs, setCurrentSong, setPlaying, audioRef }) => {
  const selectSong = (event) => {
    setCurrentSong(track);

    if (isPlaying) {
      const autoPlay = audioRef.current.play();
      if (autoPlay !== undefined) {
        autoPlay.then((audio) => {
          audioRef.current.play()
        })
      }
    }

  };

  return (
    <div onClick={selectSong} className='track-song'>
      <img src={track.image_cover} alt='' />
      <div className='song-desc'>
        <h2>{track.title}</h2>
        <h4>{track.artist}</h4>
      </div>
    </div>
  );
};

export default TrackSong;
