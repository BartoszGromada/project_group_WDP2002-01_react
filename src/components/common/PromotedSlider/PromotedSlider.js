import React from 'react';

import Button from '../Button/Button';
import styles from './PromotedSlider.module.scss';

const PromotedSlider = () => (
  <div className={styles.sliderWrapper}>
    <div className={styles.content}>
      <h2 className={styles.title}>
        INDOOR <span>FURNITURE</span>
      </h2>
      <h3 className={styles.subtitle}>SAVE UP TO 50% OF ALL FURNITURE</h3>
      <Button noHover variant='slider'>
        {' '}
        SHOP NOW{' '}
      </Button>
    </div>
  </div>
);

export default PromotedSlider;
