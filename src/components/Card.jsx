import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Card = (props) => {
  const { workshop } = props;
  return (
    <Link to="/workshop" className="card">
      <figure className="card-img">
        <img src={workshop.image} alt={workshop.title} />
      </figure>
    </Link>
  );
};

Card.propTypes = {
  workshop: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    menu: PropTypes.shape({
      dish1: PropTypes.string,
      dish2: PropTypes.string,
      dish3: PropTypes.string,
    }),
    dates: PropTypes.arrayOf(PropTypes.string),
    image: PropTypes.string,
  }).isRequired,
};

export default Card;
