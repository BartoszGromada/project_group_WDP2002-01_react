import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faShoppingBasket, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';
import Popup from 'reactjs-popup';
import Input from '../../features/Input/InputContainer';
import Price from '../Price/PriceContainer';
import Stars from '../Stars/StarsContainer';
import CompareButton from '../CompareButton/CompareButtonContainer';

const ProductBox = ({
  id,
  name,
  price,
  promo,
  stars,
  opinion,
  img,
  oldPrice,
  addToCart,
  removeFromCart,
  markFavourite,
  favourite,
  favorite,
}) => {
  const [productQty, setProductQty] = useState(1);

  const handleChangeCount = qty => setProductQty(qty);

  const handleClickToAddToCart = (id, img, price, qty, name) =>
    addToCart({ id, img, price, qty, name });

  const handleClickToRemoveFromCart = id => removeFromCart(id);
  const handleMarkFavourite = event => {
    event.preventDefault();
    markFavourite();
  };

  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.photo}>
          {promo && <div className={styles.sale}>{promo}</div>}
          <Link to='/shop'>
            <img src={img} alt={`${name} bed`} />
          </Link>
          <div className={styles.buttons}>
            <Button variant='small'>Quick View</Button>
            <Popup
              onOpen={() => handleClickToAddToCart(id, img, price, productQty, name)}
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
                  <Link to='/' className={styles.close_modal} onClick={close}>
                    &times;
                    <h1 className={styles.header_modal}>Added to cart</h1>
                  </Link>
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
                    <p className={styles.product_text_modal}>
                      <Price>{productQty * price}</Price>
                    </p>
                    <Button
                      onClick={() => {
                        handleClickToRemoveFromCart(id);
                      }}
                      variant='small'
                    >
                      Remove from cart
                      <FontAwesomeIcon
                        className={styles.trashIcon_modal}
                        icon={faTrashAlt}
                      />
                    </Button>
                  </div>
                </div>
              )}
            </Popup>
          </div>
        </div>
        <div className={styles.content}>
          <Link to='/shop'>
            <h5>{name}</h5>
          </Link>
          <Input changeCount={handleChangeCount} />
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
            <CompareButton id={id} name={name} img={img} />
          </div>
          <div className={styles.price}>
            {oldPrice && <div className={styles.oldPrice}></div>}
            {oldPrice && (
              <Button noHover variant='noborder'>
                <del>
                  <Price>{oldPrice}</Price>
                </del>
              </Button>
            )}
            <Button noHover variant='small'>
              <Price>{price}</Price>
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
  markFavourite: PropTypes.func,
  favourite: PropTypes.bool,
  img: PropTypes.string,
  addToCompare: PropTypes.func,
  allComperedProducts: PropTypes.array,
  addToCart: PropTypes.func,
  removeFromCart: PropTypes.func,
  value: PropTypes.node,
};

export default ProductBox;
