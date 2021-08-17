import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Carousel from 'react-multi-carousel';
import getWorkshops from '../actions';
import 'react-multi-carousel/lib/styles.css';
import Card from '../components/Card';

const Workshops = () => {
  const dispatch = useDispatch();
  const workshops = useSelector((state) => state.workshops);

  useEffect(() => {
    dispatch(getWorkshops());
  }, []);

  useEffect(() => {
    console.log(workshops);
  });
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div>
      <h1>Workshops</h1>
      <Carousel itemClass="carousel-item-padding-2-px" responsive={responsive}>
        {workshops.map((workshop) => (
          <Card key={workshop.title} workshop={workshop} />
        ))}
      </Carousel>
    </div>
  );
};

export default Workshops;
