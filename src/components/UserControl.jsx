import { Link } from 'react-router-dom';

const UserControl = () => (
  <div>
    <Link to="/workshops">Sign Up</Link>
    <span>|</span>
    <Link to="/workshops">Login</Link>
  </div>
);

export default UserControl;
