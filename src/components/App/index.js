import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './style.css';
import HeaderWithUserName from '../../containers/HeaderWithUserName'
import User from '../User';
import ContributorFilter from '../ContributorFilter'
import UserDetails from '../../containers/UserDetails'
import FetchedContributors from '../../containers/FetchedContributors'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <HeaderWithUserName />
          
          <label style={{display: 'block', marginTop: 40, marginBottom: 10}}>(Redux Demo) Set user first name to see it reflect in header</label>
          <UserDetails />

          <label style={{display: 'block', marginTop: 40, marginBottom: 10}}>(Redux Saga Demo) Clicking on button below will make redux-saga call API to get list of contributors</label>
          <Route path="/:filter?"render={({ match: { params } }) => (
            <div>
              <FetchedContributors filter={params.filter || 'SHOW_ALL'} />
            </div>
          )} />

          <label style={{display: 'block', marginTop: 40, marginBottom: 10}}>(React Router Demo) Clicking on filter below changes URL which in turn fires Redux action</label>
          <ContributorFilter />

          <div>
            <Route exact={true} path="/" render={() => (
              <div>Contributors of React</div>
            )} />
            <Route path="/contributors/:login" component={User} />
          </div>

        </div>
      </Router>
    );
  }
}

export default App;
