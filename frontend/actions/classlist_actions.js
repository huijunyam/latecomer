import * as ClasslistUtil from '../util/classlist_api_util';
import * as StudentUtil from '../util/student_api_util';

export const RECEIVE_CLASSES = "RECEIVE_CLASSES";
export const RECEIVE_CLASS = "RECEIVE_CLASS";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERROR = "CLEAR_ERROR";

export const RECEIVE_STUDENTS = "RECEIVE_STUDENTS";
export const RECEIVE_STUDENT = "RECEIVE_STUDENT";

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

export const clearError = () => ({
  type: CLEAR_ERROR
});

export const receiveStudents = students => ({
  type: RECEIVE_STUDENTS,
  students
});

export const receiveStudent = student => ({
  type: RECEIVE_STUDENT,
  student
});

export const fetchClasses = () => dispatch => (
  ClasslistUtil.fetchClasses().then(classes => dispatch(receiveClasses(classes)))
);

export const fetchClass = id => dispatch => (
  ClasslistUtil.fetchClass(id).then(classDetail => dispatch(receiveClass(classDetail)))
);

export const fetchStudents = () => dispatch => (
  StudentUtil.fetchStudents().then(students => dispatch(receiveStudents(students)))
);

export const fetchStudent = id => dispatch => (
  StudentUtil.fetchStudent(id).then(student => dispatch(receiveStudent(student)))
);

export const createStudent = student => dispatch => (
  StudentUtil.createStudent(student)
  .then(classDetail => dispatch(receiveClass(classDetail)),
  err => dispatch(receiveErrors(err.responseJSON)))
);

export const updateStudent = student => dispatch => (
  StudentUtil.updateStudent(student).then(classDetail => dispatch(receiveClass(classDetail)))
);

export const deleteStudent = id => dispatch => (
  StudentUtil.deleteStudent(id).then(classDetail => dispatch(receiveClass(classDetail)))
);
