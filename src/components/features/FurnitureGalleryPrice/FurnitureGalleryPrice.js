import React from 'react';
import PropTypes from 'prop-types';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './FurnitureGalleryPrice.module.scss';

class FurnitureGalleryPrice extends React.Component {
  render() {
    const { stars } = this.props;
    return (
      <div>
        <div className={styles.price}>
          <h5 className={styles.promoPrice}>$120,00</h5>
          <s>
            <h6 className={styles.regularPrice}>$160,00</h6>
          </s>
        </div>
        <div className={styles.name}>
          <div className={styles.decorationRight}></div>
          <div className={styles.decorationLeft}></div>
          <h5>Aenean Ru Bristique</h5>
          <div className={styles.rating}>
            <div className={styles.stars}>
              {[1, 2, 3, 4, 5].map(i => (
                <a key={i} href='#'>
                  {i <= stars ? (
                    <FontAwesomeIcon icon={faStar}>{i} stars</FontAwesomeIcon>
                  ) : (
                    <FontAwesomeIcon icon={faStar}>{i} stars</FontAwesomeIcon>
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

FurnitureGalleryPrice.propTypes = {
  stars: PropTypes.number,
};

export default FurnitureGalleryPrice;
