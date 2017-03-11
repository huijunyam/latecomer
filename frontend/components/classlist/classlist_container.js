import { connect } from 'react-redux';
import ClassList from './classlist';
import { fetchClasses } from '../../actions/classlist_actions';

const mapStateToProps = state => {
  const classes = Object.keys(state.classes).map(id => state.classes[id]);
  return {classes};
};

const mapDispatchToProps = dispatch => ({
  fetchClasses: () => dispatch(fetchClasses())
});

export default connect(mapStateToProps, mapDispatchToProps)(ClassList);
