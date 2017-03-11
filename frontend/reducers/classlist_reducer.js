import { RECEIVE_CLASSES } from '../actions/classlist_actions';

const ClassesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CLASSES:
      return action.classes;
    default:
      return state;
  }
};

export default ClassesReducer;
