import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import Home from './components/Home/Home';
import Perguntas from './components/Perguntas/Perguntas'; 
import Grupo from './components/Grupo/Grupo';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route path="/perguntas" component={Perguntas} />
        <Route path="/grupo" component={Grupo} />
      </Switch>
    <Footer />
    </Router>
  );
}

export default App;