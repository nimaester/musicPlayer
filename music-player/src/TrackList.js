import React from 'react';
import TrackSong from './TrackSong';

const TrackList = ({songs}) => {
  return (
    <div className='track-list'>
      <h2 className='title'>Track List</h2>
      <div className='track-songs'>
      {songs.map((track, index) => (
        <TrackSong track={track} key={track.id}/>
      ))}
      </div>
    </div>
  );
};

export default TrackList;