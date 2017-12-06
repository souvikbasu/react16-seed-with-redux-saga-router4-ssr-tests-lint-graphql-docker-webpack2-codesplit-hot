import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import logo from './logo.svg';
import './style.css';
import User from '../User';
import Footer from '../Footer'
import AddTodo from '../../containers/AddTodo'
import VisibleTodoList from '../../containers/VisibleTodoList'
import FetchedContributors from '../../containers/FetchedContributors'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <FetchedContributors />
          <div>
            <Route exact={true} path="/" render={() => (
              <div>Contributors of React</div>
            )} />
            <Route path="/contributors/:login" component={User} />
          </div>

          <Route path="/:filter?"render={({ match: { params } }) => (
            <div>
              <AddTodo />
              <VisibleTodoList filter={params.filter || 'SHOW_ALL'} />
              <Footer />
            </div>
          )} />
        </div>
      </Router>
    );
  }
}

export default App;
