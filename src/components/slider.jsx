import { useState } from 'react';
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
        className="left-arrow"
        onClick={prevSlide}
      >
        Prev
      </button>
      <button
        type="button"
        className="right-arrow"
        onClick={nextSlide}
      >
        Next
      </button>

      {workshops.map((workshop, index) => (
        <div
          className={
            index === current ? 'slide active' : 'slide'
          }
          key={workshop.title}
        >
          {index === current && (
            <img
              src={workshop.image}
              alt={workshop.title}
              className="image"
            />
          )}
        </div>
      ))}
    </div>
  );
};

Slider.propTypes = {
  workshops: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      menu: PropTypes.arrayOf(
        PropTypes.shape({
          dish1: PropTypes.string,
          dish2: PropTypes.string,
          dish3: PropTypes.string,
        }),
      ),
      dates: PropTypes.arrayOf(PropTypes.string),
    }),
  ).isRequired,
};

export default Slider;
