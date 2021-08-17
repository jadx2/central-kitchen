import { Link } from 'react-router-dom';

const WelcomePage = () => {
  const title = 'Welcome Page';

  return (
    <div>
      <h1>{title}</h1>
      <Link to="/workshops">View Workshops</Link>
    </div>
  );
};

export default WelcomePage;
