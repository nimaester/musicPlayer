import React from "react";

const TrackInfo = ({ currentTrack }) => {
  return (
    <div className='song-container'>
      <img src={currentTrack.image_cover} alt='' />
      <h2>{currentTrack.title}</h2>
      <h4>{currentTrack.artist}</h4>
    </div>
  );
};

export default TrackInfo;
