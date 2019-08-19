import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
  if(!song){
    return <div>Select a song, please!</div>
  }
  return (
    <div>
      <h3>Details for:</h3>
      <p>
        Title: {song.title}
        <br />
        Duration: {song.duration}
      </p>
    </div>
  );
};

// this is the place to customize the key for your props object to be displayed
const mapStateToProps = (state) => {
  return { song: state.selectedSong }
};

export default connect(mapStateToProps)(SongDetail);
