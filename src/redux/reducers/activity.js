import { ACTION_SET_ACTIVITY } from '../actions/actionTypes';

const initialState = 'napping';

const activityReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_SET_ACTIVITY: {
      const { activity } = action.payload;
      return activity;
    }
    default: {
      return state;
    }
  }
};

export default activityReducer;
