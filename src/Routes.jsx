import { Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Workshops from './containers/Workshops';
import Signup from './containers/Signup';
import Login from './containers/Login';

const DefaultRoutes = () => (
  <div className="container">
    <Navbar />
    <Route path="/workshops" component={Workshops} />
    <Route path="/signup" component={Signup} />
    <Route path="/login" component={Login} />
  </div>
);

export default DefaultRoutes;
