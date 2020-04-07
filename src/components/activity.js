import React from 'react';

import { connect } from 'react-redux';
import { eat, nap, play } from '../redux/actions/activity';

const Activity = ({ name, activity, eat, nap, play }) => {
  return (
    <div>
      <h2>
        {name} is: {activity}
      </h2>
      <button onClick={() => eat()}>Eating</button>
      <button onClick={() => nap()}>Nap</button>
      <button onClick={() => play()}>Play</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { activity, name } = state;
  return { activity, name };
};

export default connect(mapStateToProps, { eat, nap, play })(Activity);
