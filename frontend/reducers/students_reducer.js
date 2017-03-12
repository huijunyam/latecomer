import { RECEIVE_STUDENTS } from '../actions/classlist_actions';

const StudentReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_STUDENTS:
      return action.students;
    default:
      return state;
  }
};

export default StudentReducer;
