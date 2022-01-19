import './App.css';
import HomePage from './pages/homepage/Homepage';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      {/* <HomePage/> */}
      <Switch>
        <Route exact path="/" component={HomePage}/>
      </Switch>
    </div>
  );
}

export default App;
