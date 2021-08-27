import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import DefaultRoutes from './Routes';
import WelcomePage from './containers/WelcomePage';
import './assets/styles/App.scss';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={WelcomePage} />
      <Route component={DefaultRoutes} />
    </Switch>
  </Router>
);

export default App;
