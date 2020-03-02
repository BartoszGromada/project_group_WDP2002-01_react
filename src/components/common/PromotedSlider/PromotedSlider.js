import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button/Button';
import styles from './PromotedSlider.module.scss';

const PromotedSlider = ({ img, name }) => (
  <div className={styles.sliderWrapper}>
    <img src={img} alt={name} />
    <div className={styles.content}>
      <h2 className={styles.title}>
        INDOOR <span>FURNITURE</span>
      </h2>
      <h3 className={styles.subtitle}>SAVE UP TO 50% OF ALL FURNITURE</h3>
      <Button noHover variant='slider'>
        SHOP NOW
      </Button>
    </div>
  </div>
);

PromotedSlider.propTypes = {
  name: PropTypes.string,
  img: PropTypes.string,
};

export default PromotedSlider;
