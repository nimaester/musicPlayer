import React from 'react';

const TrackSong = ({track}) => {

  return (
    <div className="track-song">
      <img src={track.image_cover} alt="" />
      <h2>{track.title}</h2>
      <h4>{track.artist}</h4>
    </div>
  );
};

export default TrackSong;