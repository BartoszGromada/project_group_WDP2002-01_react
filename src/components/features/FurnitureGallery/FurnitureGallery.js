import React from 'react';
// import PropTypes from 'prop-types';

import styles from './FurnitureGallery.module.scss';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//   faStar,
//   faExchangeAlt,
//   faShoppingBasket,
// } from '@fortawesome/free-solid-svg-icons';
import PromoProduct from './../PromoProduct/PromoProduct';

class FurnitureGallery extends React.Component {
  state = {
    activePage: 0,
    activeCategory: 'bed',
  };

  render() {
    // const { categories } = this.props;

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className='row'>
            <div className={'col-12 col-md-6 ' + styles.gallery}>
              <h3>Furniture Gallery</h3>
              <div className={styles.menu}>
                <ul>
                  <li>
                    <a href='#'>Featured</a>
                  </li>
                  <li>
                    <a href='#'>Top seller</a>
                  </li>
                  <li>
                    <a href='#'>Sale off</a>
                  </li>
                  <li>
                    <a href='#'>Top rated</a>
                  </li>
                </ul>
              </div>
              <div className={styles.product}></div>
              <div className={styles.slider}>
                <div className={styles.arrow}>
                  <a href='#'>&#x3c;</a>
                </div>
                <div className={styles.thumbnails}>
                  <div className={styles.thumbnail}></div>
                  <div className={styles.thumbnail}></div>
                  <div className={styles.thumbnail}></div>
                  <div className={styles.thumbnail}></div>
                  <div className={styles.thumbnail}></div>
                  <div className={styles.thumbnail}></div>
                </div>
                <div className={styles.arrow}>
                  <a href='#'>&#x3e;</a>
                </div>
              </div>
            </div>

            <div className={'col-12 col-md-6 ' + styles.promotion}>
              <PromoProduct />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FurnitureGallery;
