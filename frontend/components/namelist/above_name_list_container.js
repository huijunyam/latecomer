import { connect } from 'react-redux';
import AboveNameList from './above_name_list';
import { fetchStudents } from '../../actions/classlist_actions';

const mapStateToProps = (state, ownProps) => ({
  numId: parseInt(ownProps.params.numId),
  students: Object.keys(state.students).map(id => state.students[id])
});

const mapDispatchToProps = dispatch => ({
  fetchStudents: () => dispatch(fetchStudents()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AboveNameList);
