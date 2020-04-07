import { ACTION_SET_NAME } from '../actions/actionTypes';

const initialState = 'Gus';

const nameReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_SET_NAME: {
      const { name } = action.payload;
      return name;
    }
    default:
      return state;
  }
};
export default nameReducer;
