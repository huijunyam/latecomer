import { connect } from 'react-redux';
import Welcome from './welcome';
import { login, clearError } from '../../actions/session_actions';

const mapStateToProps = state => ({
  errors: state.session.errors
});

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user)),
  clearError: () => dispatch(clearError())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Welcome);
