import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

const WelcomePage = () => (
  <div className="welcome-container">
    <h1 className="welcome-title">Central Kitchen</h1>
    <Link className="welcome-btn" to="/workshops">
      Start cooking!
      <FontAwesomeIcon
        className="arrow"
        icon={faCaretRight}
      />
    </Link>
  </div>
);

export default WelcomePage;
