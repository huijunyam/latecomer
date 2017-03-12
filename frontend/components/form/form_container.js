import { connect } from 'react-redux';
import Form from './form';
import { clearError, sendError, updateStudent, fetchStudent } from '../../actions/classlist_actions';

const mapStateToProps = (state, ownProps) => ({
  studentId: parseInt(ownProps.params.studentId),
  errors: state.errors,
  classes: state.classes,
  student: state.studentDetail
});

const mapDispatchToProps = dispatch => ({
  clearError: () => dispatch(clearError()),
  sendError: (error) => dispatch(sendError(error)),
  updateStudent: student => dispatch(updateStudent(student)),
  fetchStudent: id => dispatch(fetchStudent(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
