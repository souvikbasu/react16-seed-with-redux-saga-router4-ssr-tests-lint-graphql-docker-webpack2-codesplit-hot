import React from 'react';
import { shallow } from 'enzyme';

import ContributorFilter from './';

describe('<ContributorFilter />', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<ContributorFilter />);
    expect(wrapper).toMatchSnapshot();
  });
});
