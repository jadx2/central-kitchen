import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../actions';

const UserControl = () => {
  const dispatch = useDispatch();
  const logged = useSelector(
    (state) => state.authorization.token,
  );

  const handelLogout = () => {
    dispatch(logoutUser());
  };

  const renderByAuthorization = () => {
    if (logged) {
      return (
        <button type="button" onClick={handelLogout}>
          Logout
        </button>
      );
    }
    return (
      <>
        <Link to="signup">Signup</Link>
        <span>|</span>
        <Link to="/login">Login</Link>
      </>
    );
  };

  return <div>{renderByAuthorization()}</div>;
};

export default UserControl;
