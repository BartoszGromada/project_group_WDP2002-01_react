import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import styles from './Brands.module.scss';
import SwipeComponent from '../../common/SwipeComponent/SwipeComponent';

class Brands extends React.Component {
  static propTypes = {
    brandsPage: PropTypes.number,
  };

  state = {
    brandsPage: 0,
    slide: 'in',
  };

  changeBrandsFurther(pages) {
    let newPage;

    const isLastScreen = this.state.brandsPage === pages - 1;

    if (isLastScreen) {
      newPage = 0;
    } else if (this.state.brandsPage < pages) {
      newPage = this.state.brandsPage + 1;
    }

    this.setState({ brandsPage: newPage });
    this.setState({ slide: 'in' });
  }

  changeBrandsBack(pages) {
    let newPage;

    const isFirstScreen = this.state.brandsPage === 0;
    const lastScreen = pages - 1;

    if (isFirstScreen) {
      newPage = lastScreen;
    } else if (this.state.brandsPage < pages) {
      newPage = this.state.brandsPage - 1;
    }
    this.setState({ brandsPage: newPage });
    this.setState({ slide: 'out' });
  }

  componentClass(brandIndex, brandScreen, amount) {
    if (
      brandIndex >= amount * brandScreen + 1 &&
      brandIndex <= amount + amount * brandScreen
    ) {
      if (this.state.slide === 'out') {
        return `${styles.box} + ${styles.slideOut}`;
      } else {
        return `${styles.box} + ${styles.slideIn}`;
      }
    } else {
      return styles.inactive;
    }
  }

  render() {
    const { brands, mode } = this.props;
    let amountOfBrandsToDisplay;

    if (mode === 'desktop') {
      amountOfBrandsToDisplay = 6;
    } else if (mode === 'tablet') {
      amountOfBrandsToDisplay = 4;
    } else {
      amountOfBrandsToDisplay = 2;
    }

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={styles.component}>
            <button
              onClick={() =>
                this.changeBrandsBack(brands.length / amountOfBrandsToDisplay)
              }
              className={styles.arrow}
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <SwipeComponent
              rightAction={() =>
                this.changeBrandsBack(brands.length / amountOfBrandsToDisplay)
              }
              leftAction={() =>
                this.changeBrandsFurther(brands.length / amountOfBrandsToDisplay)
              }
            >
              <div className={styles.row}>
                {brands.map(({ id, image, index }) => (
                  <div
                    key={id}
                    className={this.componentClass(
                      index,
                      this.state.brandsPage,
                      amountOfBrandsToDisplay
                    )}
                  >
                    <img src={image} alt={image} />
                  </div>
                ))}
              </div>
            </SwipeComponent>
            <button
              onClick={() =>
                this.changeBrandsFurther(brands.length / amountOfBrandsToDisplay)
              }
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
