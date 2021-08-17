/* eslint-disable operator-linebreak */

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { signupUser } from '../actions';

const Signup = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] =
    useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'username') {
      setUsername(value);
    }
    if (name === 'email') {
      setEmail(value);
    }
    if (name === 'password') {
      setPassword(value);
    }
    if (name === 'password-confirmation') {
      setPasswordConfirmation(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      signupUser({
        username,
        email,
        password,
        password_confirmation: passwordConfirmation,
      }),
    );
    setUsername('');
    setEmail('');
    setPassword('');
    setPasswordConfirmation('');
    history.push('/workshops');
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">
          Username:
          <input
            type="text"
            name="username"
            id="username"
            required
            onChange={handleChange}
          />
        </label>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            name="email"
            id="email"
            required
            onChange={handleChange}
          />
        </label>
        <label htmlFor="password">
          Password:
          <input
            type="password"
            name="password"
            id="password"
            required
            onChange={handleChange}
          />
        </label>
        <label htmlFor="password-confirmation">
          Password Confirmation:
          <input
            type="password"
            name="password-confirmation"
            id="password-confirmation"
            required
            onChange={handleChange}
          />
        </label>
        <button type="submit">Signup</button>
      </form>
      <p>Have an account?</p>
      <Link to="/login">Login Here</Link>
    </div>
  );
};

export default Signup;
