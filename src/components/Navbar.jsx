import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faGithub,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import UserControl from './UserControl';

const Navbar = () => {
  const user = useSelector(
    (state) => state.authorization.username,
  );
  const logged = useSelector(
    (state) => state.authorization.token,
  );

  return (
    <nav className="menu">
      <h1 className="logo">Central Kitchen</h1>
      <div className="user">
        <p>WELCOME</p>
        {user ? <p>{user.toUpperCase()}</p> : <p />}
      </div>
      <div className="nav-links">
        <NavLink
          to="/workshops"
          className="nav-link"
          activeClassName="nav-link active"
        >
          WORKSHOPS
        </NavLink>
        <NavLink
          to="/chefs"
          className="nav-link"
          activeClassName="nav-link active"
        >
          CHEFS
        </NavLink>
        <UserControl logged={logged} />
      </div>
      <div className="social-media">
        <a
          className="social-media-link"
          href="https://twitter.com/thecatcodes"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a
          className="social-media-link"
          href="https://github.com/jadx2"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          className="social-media-link"
          href="https://www.linkedin.com/in/jaimdelmar/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
        <p className="footer">© 2021 JAIM DELMAR</p>
      </div>
    </nav>
  );
};

export default Navbar;
