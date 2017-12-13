import React from 'react';
import { shallow } from 'enzyme';

import User from './';

describe('<User />', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<User match={{ params: { login: 'abc' } }} />);
    expect(wrapper).toMatchSnapshot();
  });
});
