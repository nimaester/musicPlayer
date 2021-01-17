import React from "react";

const TrackSong = ({
  setSongs,
  isPlaying,
  track,
  songs,
  setCurrentSong,
  setPlaying,
  audioRef,
}) => {
  const selectSong = (event) => {
    setCurrentSong(track);
    const newTracks = songs.map((song) =>
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
  };

  return (
    <div
      onClick={selectSong}
      className={`track-song ${track.active ? "selected" : ""}`}
    >
      <img src={track.image_cover} alt='' />
      <div className='song-desc'>
        <h2>{track.title}</h2>
        <h4>{track.artist}</h4>
      </div>
    </div>
  );
};

export default TrackSong;
