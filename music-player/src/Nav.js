import React from "react";

const Nav = ({ setShowTracks, showTracks }) => {
  return (
    <div>
      <nav>
      <h2>Music Player</h2>
        <button className={showTracks ? "highlight" : ""}
          onClick={() => {
            setShowTracks(!showTracks);
          }}
        >
          Track List {' '}
        </button>
      </nav>
    </div>
  );
};

export default Nav;