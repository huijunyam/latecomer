import { RECEIVE_CLASS } from '../actions/classlist_actions';

const defaultState = {
  id: -1,
  name: "",
  students: [],
};

const ClassDetailReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CLASS:
      return action.classDetail;
    default:
      return state;
  }
};

export default ClassDetailReducer;
