import React from 'react';
import PropTypes from 'prop-types';

import styles from './FurnitureGallery.module.scss';
import PromoProduct from './../PromoProduct/PromoProductContainer';
import FurnitureGalleryActions from '../FurnitureGalleryActions/FurnitureGalleryActions';
import FurnitureGalleryPrice from '../FurnitureGalleryPrice/FurnitureGalleryPrice';

// import SwipeComponent from '../../common/SwipeComponent/SwipeComponent';

class FurnitureGallery extends React.Component {
  state = {
    activePage: 0,
  };

  handlePageChange(newPage) {
    this.setState({ activePage: newPage });
  }

  render() {
    // const { activePage } = this.state;
    const { products, tabs } = this.props;
    const windowWidth = window.innerWidth;

    // const pagesCount = products.length;

    let mode;
    if (windowWidth > 1020) {
      mode = 6;
    } else if (windowWidth > 767) {
      mode = 5;
    } else {
      mode = 4;
    }

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className='row'>
            <div className={`col-12 col-md-12 col-lg-6 ${styles.gallery}`}>
              <h3>Furniture Gallery</h3>
              <div className={styles.menu}>
                <ul>
                  {tabs.map(tab => (
                    <li key={tab.id}>
                      <a href='#'>{tab.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={styles.product}>
                <img src={products[0].img} alt='' />
                <FurnitureGalleryActions />
                <FurnitureGalleryPrice
                  name={products[0].name}
                  price={products[0].price}
                  promoPrice={products[0].promoPrice}
                  stars={products[0].stars}
                />
              </div>
              <div className={styles.slider}>
                <div className={styles.arrow}>
                  <a href='#'>&#x3c;</a>
                </div>
                {/* <SwipeComponent
                  rightAction={() => this.handlePageChange(activePage > 0 ? activePage - 1 : 0)}
                  leftAction={() =>
                    this.handlePageChange(
                      activePage + 1 < pagesCount ? activePage + 1 : activePage
                    )
                  }
                > */}
                <div className={styles.thumbnails}>
                  {products.slice(0, mode).map(product => (
                    <div key={product.id} className={styles.thumbnail}>
                      <img src={product.img} alt=''></img>
                    </div>
                  ))}
                </div>
                {/* </SwipeComponent> */}
                <div className={styles.arrow}>
                  <a href='#'>&#x3e;</a>
                </div>
              </div>
            </div>
            <PromoProduct />
          </div>
        </div>
      </div>
    );
  }
}

FurnitureGallery.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      category: PropTypes.string,
      price: PropTypes.number,
      stars: PropTypes.number,
      promo: PropTypes.string,
      newFurniture: PropTypes.bool,
      img: PropTypes.string,
      promoPrice: PropTypes.number,
    })
  ),
  tabs: PropTypes.array,
};

export default FurnitureGallery;
