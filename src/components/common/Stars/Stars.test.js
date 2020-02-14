import React from 'react';
import { shallow } from 'enzyme';
import Stars from './Stars';

describe('Component Stars', () => {
  it('should render without crashing', () => {
    const component = shallow(<Stars />);
    expect(component).toBeTruthy();
  });
});
