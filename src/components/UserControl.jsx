import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../actions';

const UserControl = (props) => {
  const { logged } = props;
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  const renderByAuthorization = () => {
    if (logged) {
      return (
        <div className="user-control">
          <NavLink
            className="nav-link"
            activeClassName="nav-link active"
            to="/dashboard"
          >
            DASHBOARD
          </NavLink>
          <button type="button" className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      );
    }
    return (
      <div className="user-control">
        <NavLink
          className="nav-link"
          activeClassName="nav-link active"
          to="/signup"
        >
          SIGNUP
        </NavLink>
        <NavLink
          className="nav-link"
          activeClassName="nav-link active"
          to="/login"
        >
          LOGIN
        </NavLink>
      </div>
    );
  };

  return <div>{renderByAuthorization()}</div>;
};

UserControl.propTypes = {
  logged: PropTypes.string,
};

UserControl.defaultProps = {
  logged: '',
};

export default UserControl;
