import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import styles from './Brands.module.scss';

class Brands extends React.Component {
  static propTypes = {
    brandsPage: PropTypes.number,
  };

  state = {
    brandsPage: 0,
  };

  changeBrandsFurther(pages) {
    let newPage;

    if (this.state.brandsPage === pages - 1) {
      newPage = 0;
    } else if (this.state.brandsPage < pages) {
      newPage = this.state.brandsPage + 1;
    }

    this.setState({ brandsPage: newPage });
  }

  changeBrandsBack(pages) {
    let newPage;

    if (this.state.brandsPage === 0) {
      newPage = pages - 1;
    } else if (this.state.brandsPage < pages) {
      newPage = this.state.brandsPage - 1;
    }
    this.setState({ brandsPage: newPage });
  }
  render() {
    const { brands, mode } = this.props;
    let amountOfBrandsToDisplay;
    let pages = [];

    if (mode === 'desktop') {
      amountOfBrandsToDisplay = 6;
    } else if (mode === 'tablet') {
      amountOfBrandsToDisplay = 4;
    } else {
      amountOfBrandsToDisplay = 2;
    }

    for (let page = 1; page <= brands.length / amountOfBrandsToDisplay; page++) {
      pages.push(page);
    }

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={styles.component}>
            <button
              onClick={() => this.changeBrandsBack(pages.length)}
              className={styles.arrow}
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <div className={styles.row}>
              {brands.map(brand => (
                <div
                  key={brand.id}
                  className={
                    brand.index >=
                      amountOfBrandsToDisplay * this.state.brandsPage + 1 &&
                    brand.index <=
                      amountOfBrandsToDisplay +
                        amountOfBrandsToDisplay * this.state.brandsPage
                      ? styles.box
                      : styles.inactive
                  }
                >
                  <img src={brand.image} alt={brand.image} />
                </div>
              ))}
            </div>
            <button
              onClick={() => this.changeBrandsFurther(pages.length)}
              className={styles.arrow}
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </div>
      </div>
    );
  }
}
Brands.propTypes = {
  brands: PropTypes.array,
  mode: PropTypes.string,
  brandsPage: PropTypes.number,
};

export default Brands;
