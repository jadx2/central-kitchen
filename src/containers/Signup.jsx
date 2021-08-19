import { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { signupUser } from '../actions';

const Signup = (props) => {
  const { history } = props;
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = // eslint-disable-line
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
    history.goBack();
  };

  return (
    <div className="form-container">
      <h2 className="form-title">SIGNUP</h2>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="username">
          Username:
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Enter your username..."
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
            placeholder="Enter a valid email..."
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
            placeholder="Enter a password..."
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
            placeholder="Re enter your password..."
            required
            onChange={handleChange}
          />
        </label>
        <button type="submit">SIGNUP</button>
      </form>
      <div className="login-link">
        <p>Have an account?</p>
        <Link to="/login">Login Here</Link>
      </div>
    </div>
  );
};

Signup.propTypes = {
  history: PropTypes.shape({
    goBack: PropTypes.func,
  }).isRequired,
};

export default Signup;
