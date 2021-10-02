import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import RocketDetails from './components/RocketDetails';
import './App.css';

const App = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path = '/' component= {About}/>
          <Route exact path = '/rocket' component = {RocketDetails}/>
        </Switch>
      </BrowserRouter>  
    </div>
  );
}

export default App;
