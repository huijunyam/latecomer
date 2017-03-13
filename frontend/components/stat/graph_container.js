import { connect } from 'react-redux';
import Graph from './graph';
import { fetchStudents } from '../../actions/classlist_actions';

const mapStateToProps = state => {
  const errors = state.errors;
  const students = Object.keys(state.students).map(id => state.students[id])
  .filter(student => student.lateness > 0);
  return {errors, students};
};

const mapDispatchToProps = dispatch => ({
  fetchStudents: () => dispatch(fetchStudents())
});

export default connect(mapStateToProps, mapDispatchToProps)(Graph);
