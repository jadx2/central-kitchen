import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faGithub,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import { NavLink } from 'react-router-dom';
// import NavLink from './NavLink';

const Navbar = () => (
  <nav className="menu">
    <h1 className="logo">Central Kitchen</h1>
    <div className="nav-links">
      <NavLink
        to="/workshops"
        className="nav-link"
        activeClassName="nav-link active"
      >
        Workshops
      </NavLink>
      <NavLink
        to="/chefs"
        className="nav-link"
        activeClassName="nav-link active"
      >
        Chefs
      </NavLink>
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

export default Navbar;
