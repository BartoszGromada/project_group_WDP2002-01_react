import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import SwipeComponent from '../../common/SwipeComponent/SwipeComponent';

import styles from './Brands.module.scss';

class Brands extends React.Component {
  alertRight(r) {
    alert(r);
  }

  alertLeft(l) {
    alert(l);
  }

  render() {
    const { brands } = this.props;

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={styles.component}>
            <button className={styles.arrow}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>

            <SwipeComponent
              rightAction={() => this.alertRight('you swipe right')}
              leftAction={() => this.alertLeft('you swipe left')}
            >
              <div className={styles.swipe}>
                {brands.map(brand => (
                  <div key={brand.id} className={styles.box}>
                    <img src={brand.image} alt={brand.image} />
                  </div>
                ))}
              </div>
            </SwipeComponent>

            <button className={styles.arrow}>
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Brands.propTypes = {
  brands: PropTypes.array,
};

export default Brands;
