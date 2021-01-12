import React from "react";

const TrackSong = ({ id, track, songs, setCurrentSong, setPlaying }) => {
  const selectSong = (event) => {
    const selectedSong = songs.filter((song) => song.id === id);
    setCurrentSong(selectedSong[0]);
    setPlaying(false);
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
