import { connect } from 'react-redux';
import User from '../components/user/User';
import { sessionSignup } from '../actions/sessionActions';

const mapStateToProps = () => ({
  buttonText: 'Signup'
});

const mapDispatchToProps = dispatch => ({
  handleSubmit(event, username, password) {
    event.preventDefault();
    dispatch(sessionSignup(username, password));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);