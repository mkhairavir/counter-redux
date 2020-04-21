import React from 'react';
import './App.css';
import IceCream from './Pages/IceCream'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Header from './Components/Header'
import Cakes from './Pages/Cakes'

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <Switch>
        <Route exact path="/">
            <Home />
          </Route>
          <Route path="/icecream">
            <IceCream />
          </Route>
          <Route exact path="/cakes">
            <Cakes />
          </Route>
        </Switch>
      
      </Router>
    </div>
  );
}

export default App;
