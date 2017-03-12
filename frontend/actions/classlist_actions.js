import * as ClasslistUtil from '../util/classlist_api_util';

export const RECEIVE_CLASSES = "RECEIVE_CLASSES";
export const RECEIVE_CLASS = "RECEIVE_CLASS";

export const receiveClasses = classes => ({
  type: RECEIVE_CLASSES,
  classes
});

export const receiveClass = classDetail => ({
  type: RECEIVE_CLASS,
  classDetail
});

export const fetchClasses = () => dispatch => (
  ClasslistUtil.fetchClasses().then(classes => dispatch(receiveClasses(classes)))
);

export const fetchClass = id => dispatch => (
  ClasslistUtil.fetchClass(id).then(classDetail => dispatch(receiveClass(classDetail)))
);
