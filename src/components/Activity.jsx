import React from 'react';

import { connect } from 'react-redux';
import { setActivity } from '../redux/actions';

import UpdateName from './UpdateName';

const Activity = ({ name, activity, setActivity }) => {
  return (
    <div>
      <h2>
        {name} is: {activity}
      </h2>
      <button onClick={() => setActivity('eating')}>Eating</button>
      <button onClick={() => setActivity('napping')}>Nap</button>
      <button onClick={() => setActivity('playing')}>Play</button>
      <hr />
      <UpdateName />
    </div>
  );
};

const mapStateToProps = (state) => {
  const { activity, name } = state;
  return { activity, name };
};

export default connect(mapStateToProps, { setActivity })(Activity);
