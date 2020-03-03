import React from 'react';
import PropTypes from 'prop-types';

import Price from '../../common/Price/PriceContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import styles from './FurnitureGalleryPrice.module.scss';
import { Link } from 'react-router-dom';

const FurnitureGalleryPrice = ({ stars, name, price, oldPrice }) => (
  <div>
    <div className={styles.price}>
      <h5 className={styles.promoPrice}>
        <Price>{price}</Price>
      </h5>
      <s>
        <h6 className={styles.regularPrice}>
          <Price>{oldPrice}</Price>
        </h6>
      </s>
    </div>
    <div className={styles.name}>
      <div className={styles.decorationRight}></div>
      <div className={styles.decorationLeft}></div>
      <h5>{name}</h5>
      <div className={styles.stars}>
        {[1, 2, 3, 4, 5].map(i => (
          <Link key={i} to='/'>
            {i <= stars ? (
              <FontAwesomeIcon icon={faStar}>{i} stars</FontAwesomeIcon>
            ) : (
              <FontAwesomeIcon icon={farStar}>{i} stars</FontAwesomeIcon>
            )}
          </Link>
        ))}
      </div>
    </div>
  </div>
);

FurnitureGalleryPrice.propTypes = {
  stars: PropTypes.number,
  name: PropTypes.string,
  price: PropTypes.number,
  oldPrice: PropTypes.number,
};

export default FurnitureGalleryPrice;
