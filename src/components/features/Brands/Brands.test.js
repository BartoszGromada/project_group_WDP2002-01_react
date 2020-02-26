import React from 'react';
import { shallow } from 'enzyme';
import Brands from './Brands';

const mockBrands = [
  {
    id: 'brand-2',
    name: 'brand 2',
    image: 'https://www.logologo.com/logos/city-logo.jpg',
  },
  {
    id: 'brand-3',
    name: 'brand 3',
    image: 'https://www.logologo.com/logos/red-s-logo.jpg',
  },
];

describe('Component Brands', () => {
  it('should render without crashing', () => {
    const component = shallow(<Brands brands={mockBrands} />);
    expect(component).toBeTruthy();
  });
});
