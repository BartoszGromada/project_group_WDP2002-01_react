import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faListUl,
  faSearch,
  faCaretDown,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';

import styles from './ProductSearch.module.scss';

const ProductSearch = ({
  searchString,
  setSearchString,
  categories,
  selectedCategory,
  setSearchCategory,
}) => {
  const handleInputChange = e => setSearchString(e.target.value);

  const handleCategoryChange = category => setSearchCategory(category);

  const handleXClick = e => {
    e.preventDefault();
    setSearchString('');
    setSearchCategory('');
  };

  const displayButton = string => {
    return string ? (
      <button onClick={handleXClick}>
        <FontAwesomeIcon className={styles.icon} icon={faTimes} />
      </button>
    ) : (
      <button>
        <FontAwesomeIcon className={styles.icon} icon={faSearch} />
      </button>
    );
  };

  const selectCat = () => {
    return !selectedCategory ? (
      <li className={styles.categoryList}>
        <a>Select a category</a>
      </li>
    ) : (
      <li className={styles.categoryList}>
        <a>{selectedCategory}</a>
      </li>
    );
  };

  const categoryMap = () => {
    return (
      categories &&
      categories.map(category => (
        <li
          onClick={() => handleCategoryChange(category)}
          key={category}
          className={styles.subList}
        >
          <a>{category}</a>
        </li>
      ))
    );
  };

  return (
    <form action='' className={styles.root}>
      <div className={styles.category}>
        <FontAwesomeIcon className={styles.icon} icon={faListUl} />
        <ul className={styles.mainList}>
          {selectCat()}
          {categoryMap()}
        </ul>
        <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
      </div>
      <div className={styles.searchField}>
        <input
          onChange={e => handleInputChange(e)}
          value={searchString}
          placeholder='Search products...'
          type='text'
        />
        {displayButton(searchString)}
      </div>
    </form>
  );
};

ProductSearch.propTypes = {
  children: PropTypes.node,
  searchString: PropTypes.string,
  setSearchString: PropTypes.func,
  categories: PropTypes.array,
  selectedCategory: PropTypes.string,
  setSearchCategory: PropTypes.func,
};

export default ProductSearch;
