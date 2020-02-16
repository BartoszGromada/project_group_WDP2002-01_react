import React from 'react';
import PropTypes from 'prop-types';

import styles from './FurnitureGallery.module.scss';
import PromoProduct from './../PromoProduct/PromoProduct';
import FurnitureGalleryActions from '../FurnitureGalleryActions/FurnitureGalleryActions';
import FurnitureGalleryPrice from '../FurnitureGalleryPrice/FurnitureGalleryPrice';
import initialState from '../../../redux/initialState';

class FurnitureGallery extends React.Component {
  static propTypes = {
    products: PropTypes.node,
    tabs: PropTypes.node,
  };

  render() {
    return (
      <div className={styles.root}>
        <div className='container'>
          <div className='row'>
            <div className={'col-12 col-md-6 ' + styles.gallery}>
              <h3>Furniture Gallery</h3>
              <div className={styles.menu}>
                <ul>
                  {initialState.tabs.map(tab => (
                    <li key={tab.id}>
                      <a href='#'>{tab.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={styles.product}>
                <img src={initialState.products[0].img}></img>
                <FurnitureGalleryActions />
                <FurnitureGalleryPrice
                  name={initialState.products[0].name}
                  price={initialState.products[0].price}
                  promoPrice={initialState.products[0].promoPrice}
                  stars={initialState.products[0].stars}
                />
              </div>
              <div className={styles.slider}>
                <div className={styles.arrow}>
                  <a href='#'>&#x3c;</a>
                </div>
                <div className={styles.thumbnails}>
                  {initialState.products.slice(0, 6).map(product => (
                    <div key={product.id} className={styles.thumbnail}>
                      <img src={product.img}></img>
                    </div>
                  ))}
                </div>
                <div className={styles.arrow}>
                  <a href='#'>&#x3e;</a>
                </div>
              </div>
            </div>
            <PromoProduct />
          </div>
        </div>
      </div>
    );
  }
}

export default FurnitureGallery;
