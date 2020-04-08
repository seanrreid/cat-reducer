import {
  ACTION_SET_NAME,
  ACTION_SET_ACTIVITY,
  ACTION_ADD_CAT,
} from '../actions/actionTypes';

const initialState = {
  cats: {
    1001: {
      name: 'Beans',
      activity: 'meowing',
    },
    1002: {
      name: 'Bandit',
      activity: 'eating',
    },
  },
};

const catReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_ADD_CAT: {
      const { name, activity } = action.payload;
      const newCat = { id: 1003, details: { name, activity } };
      console.log('new cat', newCat);
      return {
        ...state,
        newCat,
      };
    }
    case ACTION_SET_ACTIVITY: {
      const { id, activity } = action.payload;
      return {
        ...state,
        activity,
      };
    }
    case ACTION_SET_NAME: {
      const { name } = action.payload;
      return name;
    }
    default: {
      return state;
    }
  }
};

export default catReducer;
