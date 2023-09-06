import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import Home from './components/Home/Home';
import Perguntas from './components/Perguntas/Perguntas'; 

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route path="/perguntas" component={Perguntas} />
      </Switch>
    <Footer />
    </Router>
  );
}

export default App;