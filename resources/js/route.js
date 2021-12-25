import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Router,
  Routes,
  Route,
} from 'react-router-dom';

import Header       from './pages/Header';
import Footer       from './pages/Footer';

import Home         from './pages/Home';
import Example      from './pages/Example';
import Game         from './pages/Game';
import ExternalLink from './pages/ExternalLink';
import Profile      from './pages/Profile';

// import ScrollToTop  from './Component/ScrollToTop'; 

function App() {
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path="/"        element={<Home />} />
        <Route path="/example" element={<Example />} />
        <Route path="/game"    element={<Game />} />
        <Route path="/link"    element={<ExternalLink />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </React.Fragment>
  );
}

ReactDOM.render((
    <BrowserRouter>
      {/* <ScrollToTop> */}
        <App />
      {/* </ScrollToTop> */}
    </BrowserRouter>
  ), document.getElementById('app')
)