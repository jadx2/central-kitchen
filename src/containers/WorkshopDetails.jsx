import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons';
import { createAttendance, getDetails } from '../actions';
import BookingForm from '../components/BookingForm';

const WorkshopDetails = (props) => {
  const { history } = props;
  const { workshopId } = useParams();
  const [date, setDate] = useState('');
  const dispatch = useDispatch();
  const workshop = useSelector((state) => state.details);
  const userId = useSelector((state) => state.authorization.id);
  const token = useSelector((state) => state.authorization.token);
  const {
    id,
    title,
    description,
    menu,
    dates,
    image,
  } = workshop;

  useEffect(() => {
    dispatch(getDetails(workshopId));
  }, []);

  const handleChange = (e) => {
    setDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (token) {
      dispatch(
        createAttendance({
          userId,
          id,
          date,
          token,
        }),
      );
      history.push('/dashboard');
    } else {
      history.push('/signup');
    }
  };

  const goBack = () => {
    history.goBack();
  };

  return (
    <div className="workshop-details-container">
      <div className="workshop-info">
        <h1 className="workshop-title">{title}</h1>
        <figure className="workshop-image">
          <img src={image} alt={title} />
        </figure>
        <p className="workshop-description">{description}</p>
        <p className="menu">MENU</p>
        <ul>
          {menu
            ? menu.map((dish) => (
              <li key={dish} className="menu-item">
                {dish}
              </li>
            ))
            : null}
        </ul>
      </div>
      <div className="divider" />
      <BookingForm
        onSubmit={handleSubmit}
        onChange={handleChange}
        date={date}
        dates={dates}
      />
      <button className="btn back-btn" type="button" onClick={goBack}>
        <FontAwesomeIcon icon={faCaretLeft} />
      </button>
    </div>
  );
};

WorkshopDetails.propTypes = {
  history: PropTypes.shape({
    goBack: PropTypes.func,
    push: PropTypes.func,
  }).isRequired,
};

export default WorkshopDetails;
