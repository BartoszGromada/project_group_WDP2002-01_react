import React from 'react';
// import PropTypes from 'prop-types';
import styles from './PromoProduct.module.scss';

import Button from '../../common/Button/Button';

class PromoProduct extends React.Component {
  render() {
    return (
      <div className={styles.root}>
        <div className={styles.promo}>
          <img
            src='https://cdn.shopify.com/s/files/1/0099/6682/products/190306_CURIOUS_GRACE_D3_01_0007-LOW-RES.jpg?v=1552344611'
            alt='chair'
          ></img>
          <div className={styles.info}>
            <p>
              From
              <span>$50.80</span>
            </p>
            <h2>Bedroom Bed</h2>
            <Button variant='cta'>Shop now</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default PromoProduct;
