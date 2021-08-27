import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { loginUser, resetError } from '../actions';

const Login = () => {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.error);
  const token = useSelector((state) => state.authorization.token);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      loginUser({
        email,
        password,
      }),
    );
  };

  useEffect(() => () => dispatch(resetError()), []);

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
            onChange={(e) => setEmail(e.target.value)}
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
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">LOGIN</button>
      </form>
      <div className="login-link">
        <p>Don&apos;t have an account?</p>
        <Link to="/signup">Signup here</Link>
      </div>
      {error.length > 0 && <p>Invalid Credentials</p>}
      {token && <Redirect to="/workshops" />}
    </div>
  );
};

export default Login;
