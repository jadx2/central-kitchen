import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import WelcomePage from './containers/WelcomePage';
import Routes from './Routes';
import './assets/styles/App.scss';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={WelcomePage} />
      <Route path="/workshops" component={Routes} />
    </Switch>
  </Router>
);

export default App;
