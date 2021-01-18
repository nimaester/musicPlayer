import React from "react";
import TrackSong from "./TrackSong";

const TrackList = ({
  showTracks,
  setTracks,
  isPlaying,
  tracks,
  setCurrentTrack,
  setPlaying,
  audioRef,
}) => {
  return (
    <div className={`track-list ${showTracks ? "active" : ""}`}>
      <h2 className='title'>Track List</h2>
      <div className='track-tracks'>
        {tracks.map((track, index) => (
          <TrackSong
            audioRef={audioRef}
            key={track.id}
            track={track}
            tracks={tracks}
            setCurrentTrack={setCurrentTrack}
            setPlaying={setPlaying}
            isPlaying={isPlaying}
            setTracks={setTracks}
          />
        ))}
      </div>
    </div>
  );
};

export default TrackList;
