import React from 'react';
import { shallow } from 'enzyme';
import SwipeComponent from './SwipeComponent';

describe('Component SwipeComponent', () => {
  it('should render without crashing', () => {
    const component = shallow(<SwipeComponent />);
    expect(component).toBeTruthy();
  });
});
