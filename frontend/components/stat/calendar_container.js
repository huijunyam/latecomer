import { connect } from 'react-redux';
import Calendar from './calendar';
import { filteredCalendar } from '../../util/selector';

const mapStateToProps = state => {
  const students = Object.keys(state.students).map(id => state.students[id])
  .filter(student => student.lateness > 0);
  const filteredStudents = filteredCalendar(students);
  return {filteredStudents};
};

export default connect(mapStateToProps, null)(Calendar);
