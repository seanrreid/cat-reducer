import React from 'react';

import { connect } from 'react-redux';
import { setActivity } from '../redux/actions';

const CatDetail = ({ cat }) => {
  console.log('cat is ', cat);
  const { name, activity } = cat;
  return (
    <li>
      <h2>
        {name} is: {activity}
      </h2>
      <button onClick={() => setActivity('eating')}>Eating</button>
      <button onClick={() => setActivity('napping')}>Nap</button>
      <button onClick={() => setActivity('playing')}>Play</button>
      <hr />
    </li>
  );
};

// const mapStateToProps = (state) => {
//   const { activity, name } = state;
//   return { activity, name };
// };

export default connect(null, { setActivity })(CatDetail);
