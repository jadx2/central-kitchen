import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Workshops from './containers/Workshops';
import Signup from './containers/Signup';
import Login from './containers/Login';

const Routes = () => (
  <Router>
    <div className="container">
      <Navbar />
      <main className="main">
        <Switch>
          <Route
            exact
            path="/workshops"
            component={Workshops}
          />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
        </Switch>
      </main>
    </div>
  </Router>
);

export default Routes;
