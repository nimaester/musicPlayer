import React from "react";
import TrackSong from "./TrackSong";

const TrackList = ({ showTracks, setSongs, isPlaying, songs, setCurrentSong, setPlaying, audioRef }) => {
  return (
    <div className={`track-list ${showTracks ? 'active' : ""}`}>
      <h2 className='title'>Track List</h2>
      <div className='track-songs'>
        {songs.map((track, index) => (
          <TrackSong
            audioRef={audioRef}
            key={track.id}
            track={track}
            songs={songs}
            setCurrentSong={setCurrentSong}
            setPlaying={setPlaying}
            isPlaying={isPlaying}
            setSongs={setSongs}
          />
        ))}
      </div>
    </div>
  );
};

export default TrackList;
