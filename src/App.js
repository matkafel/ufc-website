import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Rankings from './components/Rankings/Rankings';
import History from './components/History/History';
import HallOfFame from './components/HallOfFame/HallOfFame';
import MainPage from './components/MainPage/MainPage';


const App = () => {
  return (
    <Router>
      <div className="App">
        <div className="container">
          <Route path="/" exact render={() => <MainPage />} />
          <Route path="/rankings" exact render={() => <Rankings />} />
          <Route path="/history" exact render={() => <History />} />
          <Route path="/hall-of-fame" exact render={() => <HallOfFame />} />
        </div>
      </div>
    </Router>
  )
}

export default App;
