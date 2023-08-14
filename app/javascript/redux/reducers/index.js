import { combineReducers } from 'redux';

const greetingReducer = (state = { message: '' }, action) => {
  switch (action.type) {
    case 'FETCH_RANDOM_GREETING':
      return { message: action.payload };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  greeting: greetingReducer,
});

export default rootReducer;
