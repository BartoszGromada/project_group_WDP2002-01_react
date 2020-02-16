import React from 'react';
import PropTypes from 'prop-types';
import styles from './PromoProduct.module.scss';
import initialState from '../../../redux/initialState';
import Button from '../../common/Button/Button';

class PromoProduct extends React.Component {
  static propTypes = {
    products: PropTypes.node,
  };

  render() {
    return (
      <div className={'col-12 col-md-6 ' + styles.promotion}>
        <div className={styles.root}>
          <div className={styles.promo}>
            <img
              src={initialState.products[0].img}
              alt={initialState.products[0].category}
            ></img>
            <div className={styles.info}>
              <p>
                From
                <span>{'$' + initialState.products[0].price}</span>
              </p>
              <h2>{initialState.products[0].category}</h2>
              <Button variant='cta'>Shop now</Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PromoProduct;
