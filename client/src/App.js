import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar'
import ChampionList from './components/ChampionList'
import ChampionInfo from './components/ChampionInfo'
import SummonerInfo from './components/SummonerInfo'
import FreeRotation from './components/FreeRotation'
import Home from './components/Home';
import Leaderboard from './components/Leaderboard';


function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Switch>
          <Route
            path="/summoner/:_id"
            render={(props) => (
              <SummonerInfo {...props}/>
            )}
          />

          <Route
            path="/champion/:_id"
            render={(props) => (
              <ChampionInfo {...props}/>
            )}
          />

          <Route path="/leaderboard">
            <Leaderboard />
          </Route>

          <Route path="/rotation">
            <FreeRotation />
          </Route>
          
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
