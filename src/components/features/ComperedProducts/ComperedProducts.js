import React from 'react';
import PropTypes from 'prop-types';
import styles from './ComperedProducts.module.scss';

const ComperedProducts = ({ allComperedProducts, removeFromCompared }) => {
  const comparedProducts = (products, remove) => {
    return (
      <div className={styles.comperedContainer}>
        {products.map(({ img, id, name }) => (
          <div key={id} className={styles.productImage}>
            <img src={img} alt={`${name}`} />
            <div className={styles.close} onClick={() => remove(id)}>
              x
            </div>
          </div>
        ))}
        <a href='#'>Compare</a>
        <div className={styles.close} onClick={() => remove()}>
          x
        </div>
      </div>
    );
  };

  return (
    <>
      {allComperedProducts.length &&
        comparedProducts(allComperedProducts, removeFromCompared)}
    </>
  );
};

ComperedProducts.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      category: PropTypes.string,
      price: PropTypes.number,
      stars: PropTypes.number,
      promo: PropTypes.string,
      newFurniture: PropTypes.bool,
    })
  ),
  allComperedProducts: PropTypes.array,
  removeFromCompared: PropTypes.func,
};

export default ComperedProducts;
