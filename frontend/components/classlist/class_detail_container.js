import { connect } from 'react-redux';
import ClassDetail from './class_detail';
import { fetchClass, deleteStudent } from '../../actions/classlist_actions';

const mapStateToProps = (state, ownProps) => {
  const classId = parseInt(ownProps.params.classId);
  const classDetail = state.classDetail;
  return {
    classId,
    classDetail,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchClass: (id) => dispatch(fetchClass(id)),
  deleteStudent: id => dispatch(deleteStudent(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ClassDetail);
