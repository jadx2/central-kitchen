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
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Login</button>
      </form>
      <p>Don&apos;t have an account?</p>
      <Link to="/signup">Signup here</Link>
    </div>
  );
};

export default Login;
