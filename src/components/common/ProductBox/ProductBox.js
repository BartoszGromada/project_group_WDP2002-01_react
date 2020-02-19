import React from 'react';
import PropTypes from 'prop-types';

import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faExchangeAlt,
  faShoppingBasket,
  faTrashAlt,
} from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';
import Stars from '../Stars/StarsContainer';
import Popup from 'reactjs-popup';

const ProductBox = ({
  id,
  name,
  price,
  promo,
  stars,
  opinion,
  img,
  oldPrice,
  addToCompare,
  allComperedProducts,
  markFavourite,
  favourite,
  favorite,
  compared,
}) => {
  const handleClickToCompare = product => {
    const duplicates = allComperedProducts.filter(item => item.id === product.id)
      .length;

    if (allComperedProducts.length < 4 && !duplicates) {
      addToCompare(product);
    }
  };

  const handleMarkFavourite = event => {
    event.preventDefault();
    markFavourite();
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
                  <h1 className={styles.header_modal}>
                    Added to cart
                    <FontAwesomeIcon
                      className={styles.trashIcon_modal}
                      icon={faTrashAlt}
                      onClick={() =>
                        window.confirm(
                          'Are you sure You want to delete this item from cart ?'
                        )
                      }
                    />
                  </h1>
                  <div className={styles.content_modal}>
                    <img
                      className={styles.product_img_modal}
                      src={img}
                      alt={`${name} bed`}
                    />
                    <p className={styles.product_text_modal}>{name}</p>
                    <p className={styles.product_text_modal}>Total ${price}</p>
                  </div>
                </div>
              )}
            </Popup>
          </div>
        </div>
        <div className={styles.content}>
          <h5>{name}</h5>
          <div className={styles.stars}>
            <Stars product={id} opinion={opinion} stars={stars} />
          </div>
        </div>

        <div className={styles.line}></div>
        <div className={styles.actions}>
          <div className={styles.outlines}>
            <Button
              variant='outline'
              favourite={favourite}
              onClick={handleMarkFavourite}
            >
              <FontAwesomeIcon
                icon={faHeart}
                className={favorite ? styles.favorite : ''}
              >
                Favorite
              </FontAwesomeIcon>
            </Button>
            <Button
              variant='outline'
              onClick={() => handleClickToCompare({ id, name, img })}
            >
              <FontAwesomeIcon
                icon={faExchangeAlt}
                className={compared ? styles.compared : ''}
              >
                Add to compare
              </FontAwesomeIcon>
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
  opinion: PropTypes.number,
  favorite: PropTypes.bool,
  compared: PropTypes.bool,
  markFavourite: PropTypes.func,
  favourite: PropTypes.bool,
  img: PropTypes.string,
  addToCompare: PropTypes.func,
  allComperedProducts: PropTypes.array,
};

export default ProductBox;
