import React from 'react';
import PropTypes from 'prop-types';

import styles from './PromotedBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faExchangeAlt,
  faShoppingBasket,
  faEye,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';
import Circle from '../Circle/Circle';
import Stars from '../Stars/Stars';

const ProductBox = ({ id, name, price, stars, img, oldPrice, opinion }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.photo}>
        <img src={img} alt={`${name} bed`} />
        <div className={styles.buttons}>
          <Button variant='small'>
            <FontAwesomeIcon icon={faShoppingBasket} /> ADD TO CART
          </Button>
        </div>
        <div className={styles.circles}>
          <Circle number='25' description='DAYS' />
          <Circle number='10' description='HRS' />
          <Circle number='45' description='MINS' />
          <Circle number='30' description='SECS' />
        </div>
      </div>
      <div className={styles.content}>
        <h5>{name}</h5>
        <div className={styles.stars}>
          <Stars product={id} opinion={opinion} stars={stars} />
        </div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.actions}>
        <div className={styles.outlines}>
          <Button variant='outlinePromoted'>
            <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
          </Button>
          <Button variant='outlinePromoted'>
            <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
          </Button>
          <Button variant='outlinePromoted'>
            <FontAwesomeIcon icon={faEye}>See details</FontAwesomeIcon>
          </Button>
        </div>
        <div className={styles.price}>
          {oldPrice && <div className={styles.oldPrice}></div>}
          {oldPrice && (
            <Button noHover variant='oldPrice'>
              <del>$ {oldPrice}</del>
            </Button>
          )}
          <Button noHover variant='price'>
            $ {price}
          </Button>
        </div>
      </div>
    </div>
  );
};

ProductBox.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  oldPrice: PropTypes.number,
  opinion: PropTypes.number,
  promo: PropTypes.string,
  stars: PropTypes.number,
  img: PropTypes.string,
};

export default ProductBox;
