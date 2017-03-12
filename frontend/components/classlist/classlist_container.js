import { connect } from 'react-redux';
import ClassList from './classlist';
import { fetchClasses } from '../../actions/classlist_actions';

const mapStateToProps = state => ({
  classes: Object.keys(state.classes).map(id => state.classes[id])
});

const mapDispatchToProps = dispatch => ({
  fetchClasses: () => dispatch(fetchClasses())
});

export default connect(mapStateToProps, mapDispatchToProps)(ClassList);
