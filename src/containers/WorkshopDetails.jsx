/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-indent */
/* eslint-disable indent */

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons';
import { getDetails } from '../actions';

const WorkshopDetails = (props) => {
  const { history } = props;
  const { id } = useParams();
  const [date, setDate] = useState('');
  const dispatch = useDispatch();
  const workshop = useSelector((state) => state.details);
  const { title, description, menu, dates, image } = workshop;

  useEffect(() => {
    dispatch(getDetails(id));
  }, []);

  const handleChange = (e) => {
    setDate(e.target.value);
  };

  useEffect(() => {
    console.log(menu);
  });

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
      <form className="booking-form">
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
      <button className=" btn back-btn" type="button" onClick={goBack}>
        <FontAwesomeIcon icon={faCaretLeft} />
      </button>
    </div>
  );
};

WorkshopDetails.propTypes = {
  history: PropTypes.shape({
    goBack: PropTypes.func,
  }).isRequired,
};

export default WorkshopDetails;
