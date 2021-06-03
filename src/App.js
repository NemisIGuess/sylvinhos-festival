import './App.css';
import Navigation from './Components/Navigation/Navigation';
import Landing from './Components/Landing/Landing';
import Events from './Components/Events/Events';
import FAQ from './Components/FAQ/FAQ';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app scrollbar-hidden">
      <Navigation />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/eventos" component={Events} />
        <Route path="/FAQ" component={FAQ} />
      </Switch>
    </div>
  );
}

export default App;
