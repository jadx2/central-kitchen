import { Link } from 'react-router-dom';

const Navbar = () => {
  const logo = 'Central Kitchen';

  return (
    <nav className="menu">
      <h1>{logo}</h1>
      <Link to="/workshops">Workshops</Link>
      <Link to="/chefs">Chefs</Link>
      <div className="social-media" />
    </nav>
  );
};

export default Navbar;
