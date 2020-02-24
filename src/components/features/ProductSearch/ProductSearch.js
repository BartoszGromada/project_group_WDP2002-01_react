import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListUl, faSearch, faCaretDown } from '@fortawesome/free-solid-svg-icons';

import styles from './ProductSearch.module.scss';

const ProductSearch = () => (
  <form action='' className={styles.root}>
    <div className={styles.category}>
      <ul className={styles.mainList}>
        <li className={styles.categoryList}>
          <FontAwesomeIcon className={styles.icon} icon={faListUl} />
          <a>Select a category</a>
        </li>
        <li className={styles.subList}>
          <a>Cat1</a>
        </li>
        <li className={styles.subList}>
          <a>Cat2</a>
        </li>
      </ul>
    </div>
    <div className={styles.searchField}>
      <input placeholder='Search products...' type='text' />
      <button>
        <FontAwesomeIcon className={styles.icon} icon={faSearch} />
      </button>
    </div>
  </form>
);

ProductSearch.propTypes = {
  children: PropTypes.node,
};

export default ProductSearch;
