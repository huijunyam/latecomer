import * as ClasslistUtil from '../util/classlist_api_util';
import * as StudentUtil from '../util/student_api_util';

export const RECEIVE_CLASSES = "RECEIVE_CLASSES";
export const RECEIVE_CLASS = "RECEIVE_CLASS";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveClasses = classes => ({
  type: RECEIVE_CLASSES,
  classes
});

export const receiveClass = classDetail => ({
  type: RECEIVE_CLASS,
  classDetail
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const fetchClasses = () => dispatch => (
  ClasslistUtil.fetchClasses().then(classes => dispatch(receiveClasses(classes)))
);

export const fetchClass = id => dispatch => (
  ClasslistUtil.fetchClass(id).then(classDetail => dispatch(receiveClass(classDetail)))
);

export const createStudent = student =>  dispatch => (
  StudentUtil.createStudent(student)
  .then(classDetail => dispatch(receiveClass(classDetail))),
  err => dispatch(receiveErrors(err.responseJSON))
);

export const updateStudent = student => dispatch => (
  StudentUtil.updateStudent(student).then(classDetail => dispatch(receiveClass(classDetail)))
);

export const deleteStudent = id => dispatch => (
  StudentUtil.deleteStudent(id).then(classDetail => dispatch(receiveClass(classDetail)))
);
