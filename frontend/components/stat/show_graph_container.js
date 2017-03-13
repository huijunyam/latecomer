import { connect } from 'react-redux';
import ShowGraph from './show_graph';
import { filteredGraph } from '../../util/selector';

const mapStateToProps = state => {
  const students = Object.keys(state.students).map(id => state.students[id])
  .filter(student => student.lateness > 0);
  const filteredGraphStudents = filteredGraph(students);
  return {filteredGraphStudents};
};

export default connect(mapStateToProps, null)(ShowGraph);
