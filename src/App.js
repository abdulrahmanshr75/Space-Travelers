import './App.css';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { useEffect } from 'react';
import getReservation from './components/GetRockets';
import { setReservation } from './redux/rockets/rockets';
import NavBar from './Pages/NavBar';
import MyProfile from './components/MyProfile';
import Rockets from './components/Rockets';
import store from './redux/configureStore';
import Missions from './components/Missions';

function App() {
  useEffect(async () => {
    const data = await getReservation();
    store.dispatch(setReservation(data));
  }, []);

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Rockets />
          </Route>
          <Route path="/Missions">
            <Missions />
          </Route>
          <Route path="/MyProfile">
            <MyProfile />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
