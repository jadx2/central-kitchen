import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCaretRight,
  faCaretLeft,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Slider = (props) => {
  const { workshops } = props;
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(
      current === workshops.length - 1 ? 0 : current + 1,
    );
  };

  const prevSlide = () => {
    setCurrent(
      current === 0 ? workshops.length - 1 : current - 1,
    );
  };

  if (!Array.isArray(workshops) || workshops.length <= 0) {
    return null;
  }

  return (
    <div className="slider">
      <button
        type="button"
        className=" arrow left-arrow"
        onClick={prevSlide}
      >
        <FontAwesomeIcon icon={faCaretLeft} />
      </button>
      <button
        type="button"
        className="arrow right-arrow"
        onClick={nextSlide}
      >
        <FontAwesomeIcon icon={faCaretRight} />
      </button>

      {workshops.map((workshop, index) => (
        <Link
          to="/workshops"
          className={
            index === current ? 'slide active' : 'slide'
          }
          key={workshop.title}
        >
          {index === current && (
            <>
              <div className="info-holder">
                <h3 className="slide-title">
                  {workshop.title}
                </h3>
                <p className="slide-description">
                  {workshop.description.substring(0, 300)}
                  ...
                </p>
              </div>
              <img
                src={workshop.image}
                alt={workshop.title}
                className="image"
              />
            </>
          )}
        </Link>
      ))}
    </div>
  );
};

Slider.propTypes = {
  workshops: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.integer,
      title: PropTypes.string,
      description: PropTypes.string,
      menu: PropTypes.shape({
        dish1: PropTypes.string,
        dish2: PropTypes.string,
        dish3: PropTypes.string,
      }),
      dates: PropTypes.arrayOf(PropTypes.string),
    }),
  ).isRequired,
};

export default Slider;
