import React from 'react';
import ShopBox from '../../common/ShopBox/ShopBox';
import ShopTable from '../../common/ShopTable/ShopTable';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';

class Shop extends React.Component {
  render() {
    return (
      <div>
        <ShopBox />
        <ShopTable />
        <NewFurniture />
      </div>
    );
  }
}

export default Shop;
