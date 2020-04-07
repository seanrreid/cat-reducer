import React from 'react';

import { connect } from 'react-redux';
import { eat, nap, play } from '../redux/actions/activity';

const Activity = ({ activity, eat, nap, play }) => {
  return (
    <div>
      <h2>THE CAT IS: {activity}</h2>
      <button onClick={() => eat()}>Eating</button>
      <button onClick={() => nap()}>Nap</button>
      <button onClick={() => play()}>Play</button>
    </div>
  );
};

// THIS IS THE SUBSCRIBER!!!!!
// It listens for changes in state.
// It SUBSCRIBES to the state changes...
const mapStateToProps = (state) => {
  const { activity } = state;
  return activity;
};

export default connect(mapStateToProps, { eat, nap, play })(Activity);
