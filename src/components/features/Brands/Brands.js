import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import styles from './Brands.module.scss';

const Brands = ({ brands }) => (
  <div className={styles.root}>
    <div className='container'>
      <div className={styles.component}>
        <button className={styles.arrow}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <div className={styles.row}>
          {brands.map(brand => (
            <div key={brand.id} className={styles.box}>
              <img src={brand.image} alt={brand.image} />
            </div>
          ))}
        </div>
        <button className={styles.arrow}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  </div>
);

Brands.propTypes = {
  brands: PropTypes.array,
};

export default Brands;
