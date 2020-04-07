import { ACTION_SET_NAME } from '../actions/actionTypes';

const initialState = 'Gus';

const nameReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_SET_NAME: {
      const { petName } = action.payload;
      return petName;
    }
    default:
      return state;
  }
};
export default nameReducer;
