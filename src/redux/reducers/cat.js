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
      const uniqueId =
        Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15);

      return {
        cats: {
          ...state.cats,
          [uniqueId]: { name, activity },
        },
      };
    }

    case ACTION_SET_ACTIVITY: {
      const { id, activity } = action.payload;
      const name = state.cats[id].name;
      return {
        cats: {
          ...state.cats,
          [id]: { name, activity },
        },
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
