import React from "react";

const Nav = ({ setShowTracks, showTracks }) => {
  return (
    <div>
      <nav>
        <h1>Lo-Fi Station</h1>
        <button className={showTracks ? "highlight" : ""}
          onClick={() => {
            setShowTracks(!showTracks);
          }}
        >
          Track List {' '}
          <i className='fas fa-music'></i>
        </button>
      </nav>
    </div>
  );
};

export default Nav;
