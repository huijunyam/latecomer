import { connect } from 'react-redux';
import Stat from './stat';
import { fetchStudents } from '../../actions/classlist_actions';

const mapDispatchToProps = dispatch => ({
  fetchStudents: () => dispatch(fetchStudents())
});

export default connect(null, mapDispatchToProps)(Stat);
