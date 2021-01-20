import React from "react";
import Track from "./Track";

const TrackList = ({
  showTracks,
  setTracks,
  isPlaying,
  tracks,
  setCurrentTrack,
  setPlaying,
  audioRef,
  setShowTracks
}) => {
  return (
    <div className={`track-list ${showTracks ? "active" : ""}`}>
      <h2 className='title'>Track List</h2>
      <div className='track-tracks'>
        {tracks.map((track, index) => (
          <Track
            audioRef={audioRef}
            key={track.id}
            track={track}
            tracks={tracks}
            setCurrentTrack={setCurrentTrack}
            setPlaying={setPlaying}
            isPlaying={isPlaying}
            setTracks={setTracks}
            setShowTracks={setShowTracks}
          />
        ))}
      </div>
    </div>
  );
};

export default TrackList;
