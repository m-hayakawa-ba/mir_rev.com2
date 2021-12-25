import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';

import Header       from './pages/Header';
import Footer       from './pages/Footer';

import Home         from './pages/Home';
import Example      from './pages/Example';
import Game         from './pages/Game';
import ExternalLink from './pages/ExternalLink';
import Profile      from './pages/Profile';

import ScrollToTop  from './Component/ScrollToTop'; 

function App() {
  return (
    <div id="app-wrap">
      <Header />
      <Switch>
        <Route path="/"        exact component={Home} />
        <Route path="/example" exact component={Example} />
        <Route path="/game"    exact component={Game} />
        <Route path="/link"    exact component={ExternalLink} />
        <Route path="/profile" exact component={Profile} />
      </Switch>
      <Footer />
    </div>
  );
}

ReactDOM.render((
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  ), document.getElementById('app')
)