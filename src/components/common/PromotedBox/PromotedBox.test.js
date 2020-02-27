import React from 'react';
import { shallow } from 'enzyme';
import PromotedBox from './PromotedBox';

describe('Component ProductBox', () => {
  it('should render without crashing', () => {
    const component = shallow(<PromotedBox />);
    expect(component).toBeTruthy();
  });
});
