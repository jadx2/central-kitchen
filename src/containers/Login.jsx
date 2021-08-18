import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { loginUser } from '../actions';

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'email') {
      setEmail(value);
    }
    if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      loginUser({
        email,
        password,
      }),
    );
    setEmail('');
    setPassword('');
    history.push('/workshops');
  };

  return (
    <div className="form-container">
      <h2 className="form-title">LOGIN</h2>
      <form className="form" onSubmit={handleSubmit}>
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
        <button type="submit">LOGIN</button>
      </form>
      <div className="login-link">
        <p>Don&apos;t have an account?</p>
        <Link to="/signup">Signup here</Link>
      </div>
    </div>
  );
};

export default Login;
