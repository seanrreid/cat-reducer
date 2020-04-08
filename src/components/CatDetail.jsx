import React from 'react';

import { connect } from 'react-redux';
import { setActivity } from '../redux/actions';

const CatDetail = ({ cat, setActivity }) => {
  const { name, activity, catId } = cat;
  return (
    <li>
      <p>
        {name} is: {activity}
      </p>
      <button onClick={() => setActivity({ id: catId, activity: 'eating' })}>
        Eating
      </button>
      <button onClick={() => setActivity({ id: catId, activity: 'napping' })}>
        Nap
      </button>
      <button onClick={() => setActivity({ id: catId, activity: 'playing' })}>
        Play
      </button>
    </li>
  );
};

// const mapStateToProps = (state) => {
//   const { activity, name } = state;
//   return { activity, name };
// };

export default connect(null, { setActivity })(CatDetail);
