import { connect } from 'react-redux';
import NewStudent from './new_student';
import { createStudent, clearError, fetchClasses } from '../../actions/classlist_actions';

const mapStateToProps = state => ({
  errors: state.errors,
  classes: Object.keys(state.classes).map(id => state.classes[id]),
  classnames: Object.keys(state.classes).map(id => state.classes[id].name)
});

const mapDispatchToProps = dispatch => ({
  createStudent: (student) => dispatch(createStudent(student)),
  clearError: () => dispatch(clearError()),
  fetchClasses: () => dispatch(fetchClasses())
});

export default connect(mapStateToProps, mapDispatchToProps)(NewStudent);
