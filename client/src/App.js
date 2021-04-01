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

          
          
          <Route path="/">
            <ChampionList />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
