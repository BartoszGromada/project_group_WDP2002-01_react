import React from 'react';
import PropTypes from 'prop-types';
import PromotedBox from '../../common/PromotedBox/PromotedBoxContainer';
import PromotedSlider from '../../common/PromotedSlider/PromotedSlider';
import styles from './Promoted.module.scss';

class Promoted extends React.Component {
  state = {
    activePage: 0,
  };

  handlyChangePage = () => {
    console.log('test');
  };

  AutomaticChangePage = () => {};

  render() {
    const { activePage } = this.state;

    const { promoted } = this.props;

    const dots = [];

    for (let i = 0; i < promoted.length; i++) {
      dots.push(
        <li>
          <a className={i === activePage && styles.active}> page {i}</a>
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
            <PromotedSlider />
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
  promoted: PropTypes.string,
};

export default Promoted;
