/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-indent */
/* eslint-disable indent */

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons';
import { createAttendance, getDetails } from '../actions';

const WorkshopDetails = (props) => {
  const { history } = props;
  const { workshopId } = useParams();
  const [date, setDate] = useState('');
  const dispatch = useDispatch();
  const workshop = useSelector((state) => state.details);
  const userId = useSelector((state) => state.authorization.id);
  const token = useSelector((state) => state.authorization.token);
  const { id, title, description, menu, dates, image } = workshop;

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
          attendee_id: userId,
          attended_workshop_id: id.toString(),
          date,
          token,
        }),
      );
      console.log(userId, id, date, token);
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
      <form onSubmit={handleSubmit} className="booking-form">
        <h2 className="form-title">BOOK NOW YOUR WORKSHOP!</h2>
        <select
          className="dates"
          name="dates"
          required
          id="dates"
          onChange={handleChange}
          value={date}
        >
          <option value="">Select date</option>
          {dates
            ? dates.map((date) => (
                <option key={date} value={date}>
                  {date}
                </option>
              ))
            : null}
        </select>
        <button className="btn submit-btn" type="submit">
          BOOK NOW!
        </button>
      </form>
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
