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

  useEffect(() => {
    console.log(workshops);
  });

  return (
    <div>
      <h1>Workshops</h1>
      <Slider workshops={workshops} />
    </div>
  );
};

export default Workshops;
