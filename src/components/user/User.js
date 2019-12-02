import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getSessionId } from '../../selectors/sessionSelectors';

const User = ({ buttonText, handleSubmit }) => {
  const sessionId = useSelector(getSessionId);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  if(sessionId) return <Redirect to="/" />;

  return (
    <form onSubmit={event => handleSubmit(event, username, password)}>
      <label htmlFor="username">Username</label>
      <input name="username" type="text" value={username} onChange={({ target }) => setUsername(target.value)} />
      <label htmlFor="password">Password</label>
      <input name="password" type="password" value={password} onChange={({ target }) => setPassword(target.value)} />
      <button>{buttonText}</button>
    </form>
  );
};

User.propTypes = {
  buttonText: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default User;