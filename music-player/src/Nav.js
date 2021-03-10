import React from "react";

const Nav = ({ setShowTracks, showTracks }) => {
  return (
    <nav>
      <div className='header'>
        <h2>Music Player</h2>
        <button
          className={showTracks ? "highlight" : ""}
          onClick={() => {
            setShowTracks(!showTracks);
          }}
        >
          Track List{" "}
        </button>
      </div>
    </nav>
  );
};

export default Nav;
