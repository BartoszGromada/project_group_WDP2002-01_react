import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

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
        SHOP NOW
      </Button>
    </div>
    <div className={styles.buttonsWrapper}>
      <Button noHover variant='arrow'>
        <FontAwesomeIcon icon={faChevronLeft} />
      </Button>
      <Button noHover variant='arrow'>
        <FontAwesomeIcon icon={faChevronRight} />
      </Button>
    </div>
  </div>
);

export default PromotedSlider;
