import React from 'react';

const Song = ({currentSong, setSongs}) => {

  return (
    <div className="song-container">
      <img src={currentSong.image_cover} alt="" />
      <h2>{currentSong.title}</h2>
      <h4>{currentSong.artist}</h4>
    </div>
  );
};

export default Song;