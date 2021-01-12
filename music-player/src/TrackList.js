import React from "react";
import TrackSong from "./TrackSong";

const TrackList = ({ songs, setCurrentSong, setPlaying }) => {
  return (
    <div className='track-list'>
      <h2 className='title'>Track List</h2>
      <div className='track-songs'>
        {songs.map((track, index) => (
          <TrackSong
            key={track.id}
            track={track}
            id={track.id}
            songs={songs}
            setCurrentSong={setCurrentSong}
            setPlaying={setPlaying}
          />
        ))}
      </div>
    </div>
  );
};

export default TrackList;
