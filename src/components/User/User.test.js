import React from 'react';
import ReactDOM from 'react-dom';
import User from './';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const match = {
    params: {
      login: 'abc'
    }
  };

  ReactDOM.render(<User match={ match } />, div);
});
