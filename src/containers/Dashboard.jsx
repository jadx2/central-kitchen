import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAttendances } from '../actions';

const Dashboard = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.authorization.token);
  const attendances = useSelector((state) => state.attendances);

  useEffect(() => {
    dispatch(getAttendances(token));
  }, []);

  return (
    <div className="attendance-container">
      <h1 className="dashboard-title">DASHBOARD</h1>
      <h2 className="dashboard-subtitle">Check your booked workshops</h2>
      <p className="dots">...................</p>
      <div className="attendances">
        {attendances
          ? attendances.map((attendance) => (
            <div className="attendance" key={attendance.id}>
              <p className="attendance-title">
                {attendance.attended_workshop.title}
              </p>
              <p className="attendance-date">{attendance.date}</p>
            </div>
          ))
          : null}
      </div>
    </div>
  );
};

export default Dashboard;
