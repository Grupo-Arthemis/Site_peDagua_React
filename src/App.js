import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createHashHistory } from 'history';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import Home from './components/Home/Home';
import Projeto from './components/Projeto/Projeto';
import Perguntas from './components/Perguntas/Perguntas'; 
import Grupo from './components/Grupo/Grupo';

const hashHistory = createHashHistory();

function App() {
  return (
    <Router history={hashHistory}>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/projeto" component={Projeto} />
        <Route path="/perguntas" component={Perguntas} />
        <Route path="/grupo" component={Grupo} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
