import { connect } from 'react-redux';
import User from '../components/user/User';
import { sessionLogin } from '../actions/sessionActions';


const mapStateToProps = () => ({
  buttonText: 'Login'
});

const mapDispatchToProps = dispatch => ({
  handleSubmit(events, username, password) {
    event.preventDefault();
    dispatch(sessionLogin(username, password));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);