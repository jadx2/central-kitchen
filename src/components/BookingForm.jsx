import PropTypes from 'prop-types';

const BookingForm = (props) => {
  const {
    onSubmit,
    onChange,
    dates,
    date,
  } = props;

  return (
    <form onSubmit={onSubmit} className="booking-form">
      <h2 className="form-title">BOOK NOW YOUR WORKSHOP!</h2>
      <select
        className="dates"
        name="dates"
        required
        id="dates"
        onChange={onChange}
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
  );
};

BookingForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  dates: PropTypes.arrayOf(PropTypes.string),
  date: PropTypes.string.isRequired,
};

BookingForm.defaultProps = {
  dates: [],
};
export default BookingForm;
