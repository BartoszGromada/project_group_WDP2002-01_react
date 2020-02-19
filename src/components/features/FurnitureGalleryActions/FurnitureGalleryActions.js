import React from 'react';
// import PropTypes from 'prop-types';

import styles from './FurnitureGalleryActions.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeart,
  faExchangeAlt,
  faShoppingBasket,
  faEye,
} from '@fortawesome/free-solid-svg-icons';
import Button from '../../common/Button/Button';

const FurnitureGalleryActions = () => (
  <div className={styles.actions}>
    <div className={styles.action}>
      <div className={styles.icon}>
        <Button variant='outlineColor'>
          <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
        </Button>
      </div>
      <div className={styles.info}>Like</div>
    </div>

    <div className={styles.action}>
      <div className={styles.icon}>
        <Button variant='outlineColor'>
          <FontAwesomeIcon icon={faExchangeAlt}></FontAwesomeIcon>
        </Button>
      </div>
      <div className={styles.info}>Shipping</div>
    </div>
    <div className={styles.action}>
      <div className={styles.icon}>
        <Button variant='outlineColor'>
          <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
        </Button>
      </div>
      <div className={styles.info}>Details</div>
    </div>
    <div className={styles.action}>
      <div className={styles.icon}>
        <Button variant='outlineColor'>
          <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon>
        </Button>
      </div>
      <div className={styles.info}>Buy now</div>
    </div>
  </div>
);

export default FurnitureGalleryActions;
