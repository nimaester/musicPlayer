import React from 'react';

const Nav = ({setShowTracks, showTracks}) => {
  return (
    <div>
      <nav>
        <h1>Waves</h1>
        <button onClick={() => {
          setShowTracks(!showTracks)
        }}>
        LIBRARY
        <i className="fas fa-music"></i>
        </button>
      </nav>
    </div>
  );
};

export default Nav;