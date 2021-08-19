import { Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Workshops from './containers/Workshops';
import Signup from './containers/Signup';
import Login from './containers/Login';
import WorkshopDetails from './containers/WorkshopDetails';

const DefaultRoutes = () => (
  <div className="container">
    <Navbar />
    <Route exact path="/workshops" component={Workshops} />
    <Route exact path="/workshops/:workshopId" component={WorkshopDetails} />
    <Route exact path="/signup" component={Signup} />
    <Route exact path="/login" component={Login} />
  </div>
);

export default DefaultRoutes;
