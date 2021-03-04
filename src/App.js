import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './css/socicon.css';
import './css/iconsmind.css';
import './css/interface-icons.css';
import './css/lightbox.min.css';
import './css/theme.css';
import './css/custom.css';

import Home from './components/Home/';
import Header from './components/Header/Header';
import Resources from './components/Resources/';
import Events from './components/Events/';
import Organization from './components/Organization/';
import NotFound from './components/NotFound';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Router>
          <Header link={Link} />
          <Switch>
            <Route path='/' exact>
              <Home />
            </Route>
            <Route path='/resources' exact>
              <Resources />
            </Route>
            <Route path='/events' exact>
              <Events />
            </Route>
            <Route path='/organization' exact>
              <Organization />
            </Route>
            <Route
              path='/slack'
              component={() => {
                window.location.href =
                  'https://join.slack.com/t/jdsb/shared_invite/enQtNzA0NTY3OTE2ODg3LTE5ZTE5ODI5YmE5YTUzN2UyOWUxZmM1ZDZlNDliZTgxYTg0ODRlMmM3OThkY2JlZDRlNjIzYmJiMjNjNDBjOWQ';
                return null;
              }}
            />
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
