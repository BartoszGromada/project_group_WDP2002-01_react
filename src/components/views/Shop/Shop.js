import React from 'react';
import ShopBox from '../../common/ShopBox/ShopBox';
import ShopTable from '../../common/ShopTable/ShopTable';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import Newsletter from '../../common/Newsletter/Newsletter';

const Shop = () => (
  <div>
    <ShopBox />
    <ShopTable />
    <NewFurniture />
    <Newsletter />
  </div>
);

export default Shop;
