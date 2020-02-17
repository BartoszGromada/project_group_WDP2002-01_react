import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faEye,
  faHeart,
  faExchangeAlt,
  faShoppingBasket,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import styles from './Promoted.module.scss';
import Circle from './../../common/Circle/Circle';

class Promoted extends React.Component {
  state = {
    activePage: 0,
  };

  render() {
    const { activePage } = this.state;

    const pagesCount = 3;

    const dots = [];

    for (let i = 0; i < pagesCount; i++) {
      dots.push(
        <li>
          <a className={i === activePage && styles.active}> page {i}</a>
        </li>
      );
    }

    return (
      <div className={styles.root}>
        <div className={`container ${styles.wrapper}`}>
          <div className='row'>
            <div className='col-4'>
              <div className={styles.dots}>
                <div className={styles.dotsDescription}>HOT DEALS</div>
                <ul>{dots}</ul>
              </div>
              <div className={styles.photo}>
                <div className={styles.buttons}>
                  <Button variant='small'>
                    <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO
                    CART
                  </Button>
                </div>
                <div className={styles.circleWrapper}>
                  <Circle description='25 DAYS' />
                  <Circle description='10 HRS' />
                  <Circle description='24 MINS' />
                  <Circle description='30 SECS' />
                </div>
              </div>
              <div className={styles.content}>
                <h5>TEST</h5>
                <div className={styles.stars}>
                  {[1, 2, 3, 4, 5].map(i => (
                    <a key={i} href='#'>
                      {i <= 2 ? (
                        <FontAwesomeIcon icon={faStar}>{i} stars</FontAwesomeIcon>
                      ) : (
                        <FontAwesomeIcon icon={farStar}>{i} stars</FontAwesomeIcon>
                      )}
                    </a>
                  ))}
                </div>
              </div>
              <div className={styles.line}></div>
              <div className={styles.actions}>
                <div className={styles.outlines}>
                  <Button variant='outlinePromoted'>
                    <FontAwesomeIcon icon={faEye}>See</FontAwesomeIcon>
                  </Button>
                  <Button variant='outlinePromoted'>
                    <FontAwesomeIcon icon={faExchangeAlt}>
                      Add to compare
                    </FontAwesomeIcon>
                  </Button>
                  <Button variant='outlinePromoted'>
                    <FontAwesomeIcon icon={faHeart}>Add to favorite</FontAwesomeIcon>
                  </Button>
                </div>
                <div className={styles.wrapperPrice}>
                  <div className={styles.oldPrice}>
                    <Button noHover variant='promotedOld'>
                      $ 400
                    </Button>
                  </div>
                  <div className={styles.price}>
                    <Button noHover variant='promoted'>
                      $ 300
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-auto'></div>
          </div>
        </div>
      </div>
    );
  }
}

Promoted.propTypes = {
  children: PropTypes.node,
};

export default Promoted;
