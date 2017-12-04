import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import logo from './logo.svg';
import './style.css';
import User from '../User';

class App extends Component {

  state = {
    contributors: null
  };

  componentDidMount() {
    // fetch('https://api.github.com/repos/facebook/react/contributors')
    // .then(res => res.json())
    // .then(contributors => {
    //   this.setState({
    //     contributors: contributors
    //   });
    // });
  }

  render() {
    const { contributors } = this.state;
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>

          <div>
          {contributors ? (
            contributors.map(c => (
              <div key={c.id}>
                <Link to={`/contributors/${c.login}`}>
                  {c.login}
                </Link>
              </div>
            ))
          ) : (
            <div>Loading...</div>
          )
          }
          </div>
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
