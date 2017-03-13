import { connect } from 'react-redux';
import Calendar from './calendar';
import { fetchStudents } from '../../actions/classlist_actions';
import { filteredCalendar } from '../../util/selector';

const mapStateToProps = state => {
  const students = Object.keys(state.students).map(id => state.students[id])
  .filter(student => student.lateness > 0);
  const filteredStudents = filteredCalendar(students);
  return {filteredStudents};
};

const mapDispatchToProps = dispatch => ({
  fetchStudents: () => dispatch(fetchStudents())
});

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
