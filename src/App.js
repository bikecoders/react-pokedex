import React from 'react';
import './App.scss';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './pages/Home.jsx';
import PokemonDetail from './pages/PokemonDetail.jsx';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/pokemon/:id" component={PokemonDetail} />
      </Router>
    </div>
  );
}

export default App;
