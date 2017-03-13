import { connect } from 'react-redux';
import Graph from './graph';
import { clearError, sendError, fetchStudents } from '../../actions/classlist_actions';

const mapStateToProps = state => ({
  errors: state.errors
});

const mapDispatchToProps = dispatch => ({
  clearError: () => dispatch(clearError()),
  sendError: (error) => dispatch(sendError(error)),
  fetchStudents: () => dispatch(fetchStudents())
});

export default connect(mapStateToProps, mapDispatchToProps)(Graph);
