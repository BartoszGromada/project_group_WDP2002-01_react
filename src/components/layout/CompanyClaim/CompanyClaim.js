import React from 'react';
// import PropTypes from 'prop-types';

import styles from './CompanyClaim.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const CompanyClaim = () => (
  <div className={styles.root}>
    <div className='container'>
      <div
        className={`row align-items-start align-items-md-center ${styles.companyinfo}`}
      >
        <div
          className={`col-md-4 col-12 order-md-1 order-3 text-md-left text-right ${styles.phoneNumber}`}
        >
          <p className={styles.text}>
            <FontAwesomeIcon className={styles.icon} icon={faMobileAlt} />
            <span className={styles.text}>2300 - 3560 -222</span>
          </p>
        </div>
        <div className={`col-md-4 col-6 order-md-2 order-1 text-center ${styles.logo}`}>
          <Link to='/'>
            <img src='/images/logo.png' alt='Bazar' />
          </Link>
        </div>
        <div className={`col-md-4 col-6 order-md-3 order-2 text-center ${styles.cart}`}>
          <Link to='/' className={styles.cartBox}>
            <div className={styles.cartIcon}>
              <FontAwesomeIcon className={styles.icon} icon={faShoppingBasket} />
            </div>
            <div className={styles.cartCounter}>99999</div>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

// CompanyClaim.propTypes = {};

export default CompanyClaim;
