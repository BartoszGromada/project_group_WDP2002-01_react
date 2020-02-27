import React from 'react';
import PropTypes from 'prop-types';
import styles from './Furniture.module.scss';

import Brands from '../../features/Brands/BrandsContainer';
import Button from '../../common/Button/Button';
import Stars from '../../common/Stars/StarsContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CompareButton from '../../common/CompareButton/CompareButtonContainer';
import Price from '../../common/Price/PriceContainer';
import {
  faChevronRight,
  faThList,
  faThLarge,
  faHeart,
  faSearch,
  faShoppingBasket,
} from '@fortawesome/free-solid-svg-icons';

const Furniture = ({ products }) => (
  <div className='container'>
    <div className={styles.header}>
      <h2>
        BEDROOM <span>FURNITURE</span>
      </h2>
      <h3>
        ALWAYS <span>25%</span> OFF OR MORE
      </h3>
    </div>

    <nav className={styles.nav_bar}>
      <a href='/'>Home</a>
      <span>
        <FontAwesomeIcon icon={faChevronRight} />
      </span>
      <a href='#' className={styles.active}>
        Furniture
      </a>
    </nav>

    <div className={styles.content}>
      <div className={styles.products}>
        <div className={styles.options}>
          <span>FURNITURE</span>
          <div className={styles.sort}>
            Sort by
            <select name='sort'>
              <option value='price_lowest'>Price: Lowest first</option>
            </select>
          </div>
          <div className={styles.show}>
            Show
            <select name='show'>
              <option value='12'>12</option>
            </select>
          </div>
          <div className={styles.view}>
            <button>
              <FontAwesomeIcon icon={faThLarge} />
            </button>
            <button>
              <FontAwesomeIcon icon={faThList} className={styles.active} />
            </button>
          </div>
        </div>

        {products.map(({ id, img, name, price, stars }) => (
          <div key={id} className={styles.product_row}>
            <img src={img} alt={'furniture'} />
            <div className={styles.info}>
              <div className={styles.name}>{name}</div>
              <div className={styles.price}>
                <Price>{price}</Price>
              </div>
              <div className={styles.stars}>
                <Stars product={id} stars={stars} />
              </div>
              <div className={styles.description}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
              </div>
              <div className={styles.actions}>
                <Button variant='outline'>
                  <FontAwesomeIcon icon={faHeart} />
                </Button>
                <CompareButton id={id} name={name} img={img} />
                {/* <Button variant='outline'>
                  <FontAwesomeIcon icon={faExchangeAlt} />
                </Button> */}
                <Button variant='outline'>
                  <FontAwesomeIcon icon={faSearch} />
                </Button>
                <Button variant='cart'>
                  <FontAwesomeIcon icon={faShoppingBasket} />
                  ADD TO CART
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.filters}></div>
    </div>

    <Brands />
  </div>
);

Furniture.propTypes = {
  products: PropTypes.array,
};

export default Furniture;
