import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import UserControl from './components/UserControl';
import Workshops from './containers/Workshops';

const Routes = () => (
  <Router>
    <div className="container">
      <Navbar />
      <main className="main">
        <UserControl />
        <Switch>
          <Route exact path="/workshops" component={Workshops} />
        </Switch>
      </main>
    </div>
  </Router>
);

export default Routes;
