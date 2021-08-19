import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Slider from '../components/slider';
import { getWorkshops } from '../actions';

const Workshops = () => {
  const dispatch = useDispatch();
  const workshops = useSelector((state) => state.workshops);

  useEffect(() => {
    dispatch(getWorkshops());
  }, []);

  return (
    <div className="workshops">
      <h1 className="workshops-title">WORKSHOPS</h1>
      <p className="workshops-subtitle">
        Click on the workshop for more detail
      </p>
      <p className="dots">...................</p>
      <Slider workshops={workshops} />
    </div>
  );
};

export default Workshops;
