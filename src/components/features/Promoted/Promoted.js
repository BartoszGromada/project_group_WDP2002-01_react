import React from 'react';
import PropTypes from 'prop-types';
import PromotedBox from '../../common/PromotedBox/PromotedBoxContainer';
import PromotedSlider from '../../common/PromotedSlider/PromotedSlider';
import Button from '../../common/Button/Button';
import styles from './Promoted.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

class Promoted extends React.Component {
  state = {
    activePage: 0,
    activePageSlider: 0,
  };

  componentDidMount() {
    this.interval = setInterval(
      () =>
        this.handlePageChange(
          this.state.activePage === this.props.promoted.length - 1
            ? 0
            : this.state.activePage + 1
        ),
      3000
    );
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  handlePageChange = newPage => {
    setTimeout(() => this.setState({ activePage: newPage }), 1000);
  };

  handlePageChangeSlider(newPage) {
    if (newPage < 0) {
      this.setState({ activePageSlider: 2 });
    } else if (newPage > 2) {
      this.setState({ activePageSlider: 0 });
    } else {
      this.setState({ activePageSlider: newPage });
    }
  }

  render() {
    const { activePage, activePageSlider } = this.state;
    const { promoted } = this.props;

    const dots = [];

    const PageCount = promoted.length;

    for (let i = 0; i < PageCount; i++) {
      dots.push(
        <li>
          <a
            onClick={() => {
              this.handlePageChange(i);
              clearInterval(this.interval);
              this.interval = setInterval(
                () =>
                  this.handlePageChange(
                    this.state.activePage === this.props.promoted.length - 1
                      ? 0
                      : this.state.activePage + 1
                  ),
                3000
              );
            }}
            className={i === activePage && styles.active}
          >
            page {i}
          </a>
        </li>
      );
    }

    return (
      <div className={`container ${styles.promotedWrapper}`}>
        <div className='row'>
          <div className={`col-4`}>
            <div className={styles.dotsWrapper}>
              <div className={styles.dotsDescription}>HOT DEALS</div>
              <ul>{dots}</ul>
            </div>
            {promoted.slice(activePage, activePage + 1).map(item => (
              <div key={item.id}>
                <PromotedBox {...item} />
              </div>
            ))}
          </div>
          <div className='col-8'>
            {promoted.slice(activePageSlider, activePageSlider + 1).map(item => (
              <div key={item.id}>
                <PromotedSlider {...item} />
              </div>
            ))}
            <div className={styles.buttonsWrapper}>
              <Button
                noHover
                variant='arrow'
                onClick={() => this.handlePageChangeSlider(activePageSlider - 1)}
              >
                <FontAwesomeIcon icon={faChevronLeft} />
              </Button>
              <Button
                noHover
                variant='arrow'
                onClick={() => this.handlePageChangeSlider(activePageSlider + 1)}
              >
                <FontAwesomeIcon icon={faChevronRight} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Promoted.propTypes = {
  children: PropTypes.node,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    })
  ),
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
  promoted: PropTypes.array,
};

export default Promoted;
