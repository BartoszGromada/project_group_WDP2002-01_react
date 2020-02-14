import React from 'react';
import { shallow } from 'enzyme';
import FurnitureGallery from './FurnitureGallery';

describe('Component NewFurniture', () => {
  it('should render without crashing', () => {
    const component = shallow(<FurnitureGallery />);
    expect(component).toBeTruthy();
  });
});
