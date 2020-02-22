import React from 'react';
import PropTypes from 'prop-types';

import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faExchangeAlt,
  faShoppingBasket,
  faTrashAlt,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar, faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';
import Popup from 'reactjs-popup';
import Input from '../../features/Input/InputContainer';

const ProductBox = ({
  id,
  name,
  price,
  promo,
  stars,
  img,
  oldPrice,
  addToCompare,
  allComperedProducts,
  addToCart,
  removeFromCart,
  value,
}) => {
  const handleClickToCompare = product => {
    const duplicates = allComperedProducts.filter(item => item.id === product.id)
      .length;

    if (allComperedProducts.length < 4 && !duplicates) {
      addToCompare(product);
    }
  };

  const handleClickToAddToCart = ({ id, img, price, value }) => {
    addToCart({ id, img, price, value });
  };
  const handleClickToRemoveFromCart = id => {
    removeFromCart(id);
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.root}>
        <div className={styles.photo}>
          {promo && <div className={styles.sale}>{promo}</div>}
          <img src={img} alt={`${name} bed`} />
          <div className={styles.buttons}>
            <Button variant='small'>Quick View</Button>
            <Popup
              onOpen={() => handleClickToAddToCart({ id, img, price, value })}
              trigger={
                <Button variant='small'>
                  <FontAwesomeIcon icon={faShoppingBasket} />
                  ADD TO CART
                </Button>
              }
              modal
            >
              {close => (
                <div className={styles.cart_modal}>
                  <a className={styles.close_modal} onClick={close}>
                    &times;
                  </a>
                  <h1 className={styles.header_modal}>Added to cart</h1>
                  <div className={styles.content_modal}>
                    <img
                      className={styles.product_img_modal}
                      src={img}
                      alt={`${name} bed`}
                    />
                    <p className={styles.product_text_modal}>{id}</p>
                    <p className={styles.product_text_modal}>${price}</p>
                    <Button variant='small'>
                      <FontAwesomeIcon
                        className={styles.trashIcon_modal}
                        icon={faTrashAlt}
                        onClick={() => {
                          handleClickToRemoveFromCart(id);
                        }}
                      />
                    </Button>
                  </div>
                </div>
              )}
            </Popup>
          </div>
        </div>
        <div className={styles.content}>
          <h5>{name}</h5>
          <Input />
          <div className={styles.stars}>
            {[1, 2, 3, 4, 5].map(i => (
              <a key={i} href='#'>
                {i <= stars ? (
                  <FontAwesomeIcon icon={faStar}>{i} stars</FontAwesomeIcon>
                ) : (
                  <FontAwesomeIcon icon={farStar}>{i} stars</FontAwesomeIcon>
                )}
              </a>
            ))}
          </div>
        </div>

        <div className={styles.line}></div>
        <div className={styles.actions}>
          <div className={styles.outlines}>
            <Button variant='outline'>
              <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
            </Button>
            <Button
              variant='outline'
              onClick={() => handleClickToCompare({ id, name, img })}
            >
              <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
            </Button>
          </div>
          <div className={styles.price}>
            {oldPrice && <div className={styles.oldPrice}></div>}
            {oldPrice && (
              <Button noHover variant='outline'>
                <del>$ {oldPrice}</del>
              </Button>
            )}
            <Button noHover variant='small'>
              $ {price}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductBox.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node,
  name: PropTypes.string,
  price: PropTypes.number,
  oldPrice: PropTypes.number,
  promo: PropTypes.string,
  stars: PropTypes.number,
  img: PropTypes.string,
  addToCompare: PropTypes.func,
  allComperedProducts: PropTypes.array,
  addToCart: PropTypes.func,
  removeFromCart: PropTypes.func,
  value: PropTypes.node,
};

export default ProductBox;
