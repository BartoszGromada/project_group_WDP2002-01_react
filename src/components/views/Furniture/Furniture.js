import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Furniture.module.scss';

import Brands from '../../features/Brands/BrandsContainer';
import Button from '../../common/Button/Button';
import Stars from '../../common/Stars/StarsContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CompareButton from '../../common/CompareButton/CompareButtonContainer';
import Price from '../../common/Price/PriceContainer';
import { sortedProducts } from '../../../utils/sortProducts';
import Pagination from '@material-ui/lab/Pagination';
import {
  faChevronRight,
  faThList,
  faThLarge,
  faHeart,
  faSearch,
  faShoppingBasket,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Furniture = ({ products }) => {
  const [sortOptions, setOptions] = useState({
    sortBy: 'price',
    show: '4',
    direction: 'asc',
  });

  const [activePage, setactivePage] = useState(0);

  const { sortBy, show, direction } = sortOptions;

  const totalPages = Math.ceil(products.length / show);

  const onSortChange = ({ target }) =>
    setOptions({ ...sortOptions, sortBy: target.value });

  const onShowChange = ({ target }) =>
    setOptions({ ...sortOptions, show: target.value });

  const onDirectionChange = ({ target }) =>
    setOptions({ ...sortOptions, direction: target.value });

  const onPaginateChange = (event, value) => setactivePage(value - 1);

  return (
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
        <Link to='/' className={styles.active}>
          Furniture
        </Link>
      </nav>

      <div className={styles.content}>
        <div className={styles.products}>
          <div className={styles.options}>
            <span>FURNITURE</span>
            <div className={styles.sort}>
              Sort by
              <select name='sort' value={sortBy} onChange={onSortChange}>
                <option value='price'>Price</option>
                <option value='name'>Title</option>
                <option value='stars'>Stars</option>
              </select>
            </div>
            <div className={styles.show}>
              Direction
              <select name='show' value={direction} onChange={onDirectionChange}>
                <option value='asc'>Ascending</option>
                <option value='desc'>Descending</option>
              </select>
            </div>
            <div className={styles.show}>
              Show
              <select name='show' value={show} onChange={onShowChange}>
                <option value='4'>4</option>
                <option value='8'>8</option>
                <option value='12'>12</option>
                <option value='24'>24</option>
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

          {sortedProducts(products, sortBy, direction)
            .slice(activePage * Number(show), (activePage + 1) * Number(show))
            .map(({ id, img, name, price, stars }) => (
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </div>
                  <div className={styles.actions}>
                    <Button variant='outline'>
                      <FontAwesomeIcon icon={faHeart} />
                    </Button>
                    <CompareButton id={id} name={name} img={img} />
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
      <div className={styles.paginatecontainer}>
        <Pagination
          count={totalPages}
          size='large'
          shape='rounded'
          page={activePage + 1}
          onChange={onPaginateChange}
        />
      </div>
      <Brands />
    </div>
  );
};

Furniture.propTypes = {
  products: PropTypes.array,
  sortedProducts: PropTypes.array,
};

export default Furniture;
