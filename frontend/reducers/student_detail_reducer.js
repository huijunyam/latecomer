import { RECEIVE_STUDENT } from '../actions/classlist_actions';

const defaultState = {
  id: -1,
  name: "",
  dates: [],
  lateness: 0,
  classroom: {}
};

const StudentDetailReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_STUDENT:
      return action.student;
    default:
      return state;
  }
};

export default StudentDetailReducer;
