import React from 'react';
import PropTypes from 'prop-types';

import styles from './FurnitureGallery.module.scss';
import PromoProduct from './../PromoProduct/PromoProductContainer';
import FurnitureGalleryActions from '../FurnitureGalleryActions/FurnitureGalleryActions';
import FurnitureGalleryPrice from '../FurnitureGalleryPrice/FurnitureGalleryPrice';

import SwipeComponent from '../../common/SwipeComponent/SwipeComponent';

class FurnitureGallery extends React.Component {
  state = {
    activePage: 0,
    mode: 4,
    activeProduct: 0,
    activeCategory: 'featured',
  };

  updateDimensions({ target }) {
    const windowWidth = target.innerWidth;
    if (windowWidth > 1020) {
      this.setState({ mode: 6 });
    } else if (windowWidth > 767) {
      this.setState({ mode: 5 });
    } else {
      this.setState({ mode: 4 });
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions.bind(this));
  }

  handleProductChange(newProduct) {
    this.setState({ activeProduct: newProduct });
  }

  hendelGalleryFurther(newPage) {
    this.setState({ activePage: newPage });
    console.log('click');
  }

  hendelGalleryBack(newPage) {
    this.setState({ activePage: newPage });
    console.log('click');
  }

  handleCategoryChange(newCategory) {
    this.setState({ activeCategory: newCategory });
  }

  render() {
    const { products, tabs } = this.props;
    const { mode, activePage, activeProduct, activeCategory } = this.state;

    const pagesCount = products.length;

    const categoryProducts = products.filter(item => item.tabs === activeCategory);

    console.log(tabs);
    console.log(categoryProducts);

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
                      <a href='#' onClick={() => this.handleCategoryChange(tab.id)}>
                        {tab.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={styles.product}>
                {products.slice(activeProduct).map(item => (
                  <div key={item.id} className={styles.product}>
                    <img src={item.img} alt='' />
                    <FurnitureGalleryActions />
                    <FurnitureGalleryPrice
                      name={item.name}
                      price={item.price}
                      oldPrice={item.oldPrice}
                      stars={item.stars}
                    />
                  </div>
                ))}
              </div>
              <SwipeComponent
                rightAction={() =>
                  this.handlePageChange(activePage > 0 ? activePage - 1 : 0)
                }
                leftAction={() =>
                  this.handlePageChange(
                    activePage + 1 < pagesCount ? activePage + 1 : activePage
                  )
                }
              >
                <div className={styles.slider}>
                  <div className={styles.arrow}>
                    <a href='#'>&#x3c;</a>
                  </div>
                  <div className={styles.thumbnails}>
                    {categoryProducts.slice(0, mode).map(product => (
                      <div key={product.id} className={styles.thumbnail}>
                        <img
                          src={product.img}
                          alt=''
                          onClick={() =>
                            this.handleProductChange(products.indexOf(product))
                          }
                        ></img>
                      </div>
                    ))}
                  </div>
                  <div className={styles.arrow}>
                    <a href='#' onClick={() => this.hendelGalleryBack()}>
                      &#x3e;
                    </a>
                  </div>
                </div>
              </SwipeComponent>
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
      oldPrice: PropTypes.number,
    })
  ),
  tabs: PropTypes.array,
};

export default FurnitureGallery;
