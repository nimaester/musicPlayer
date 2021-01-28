import React from "react";

const Track = ({
  setTracks,
  isPlaying,
  track,
  tracks,
  setCurrentTrack,
  setPlaying,
  audioRef,
  setShowTracks
}) => {
  const selectSong = (event) => {
    setCurrentTrack(track);
    const newTracks = tracks.map((song) =>
      song.id === track.id ? (song.active = true) : (song.active = false)
    );
    if (isPlaying) {
      const autoPlay = audioRef.current.play();
      autoPlay !== undefined
        ? autoPlay.then((audio) => {
            audioRef.current.play();
          })
        : null;
    }
    if (window.innerWidth < 760) {
        setShowTracks(false);
    }
  };

  return (
    <div
      onClick={selectSong}
      className={`track-song ${track.active ? 'selected ' : ''}`}
    >
      <img src={track.artwork} alt='' />
      <div className='song-desc'>
        <h2>{track.title}</h2>
        <h4>{track.artist}</h4>
      </div>
      <p className={`${isPlaying && track.active ? 'dot-flashing' : ''}`}/>
    </div>
  );
};

export default Track;
