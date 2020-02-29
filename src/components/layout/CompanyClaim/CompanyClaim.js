import React from 'react';
import PropTypes from 'prop-types';

import styles from './CompanyClaim.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus,
  faMinus,
  faMobileAlt,
  // faTrash,
  faTrashAlt,
  faShoppingBasket,
} from '@fortawesome/free-solid-svg-icons';
import Popup from 'reactjs-popup';
import Price from '../../common/Price/PriceContainer';
import Button from '../../common/Button/Button';
import Input from '../../features/Input/InputContainer';

import { Link } from 'react-router-dom';

class CompanyClaim extends React.Component {
  static propTypes = {
    cart: PropTypes.array,
    cartValue: PropTypes.number,
  };

  render() {
    const { cart, cartValue } = this.props;

    return (
      <div className={styles.root}>
        <div className='container'>
          <div
            className={`row align-items-start align-items-md-center ${styles.companyinfo}`}
          >
            <div
              className={`col-md-4 col-12 order-md-1 order-3 text-md-left text-right ${styles.phoneNumber}`}
            >
              <p className={styles.text}>
                <FontAwesomeIcon className={styles.icon} icon={faMobileAlt} />
                <span className={styles.text}>2300 - 3560 -222</span>
              </p>
            </div>
            <div
              className={`col-md-4 col-6 order-md-2 order-1 text-center ${styles.logo}`}
            >
              <Link to='/'>
                <img src='/images/logo.png' alt='Bazar' />
              </Link>
            </div>
            <div
              className={`col-md-4 col-6 order-md-3 order-2 text-center ${styles.cart}`}
            >
              <Popup
                trigger={
                  <Link to='/' className={styles.cartBox}>
                    <div className={styles.cartIcon}>
                      <FontAwesomeIcon
                        className={styles.icon}
                        icon={faShoppingBasket}
                      />
                    </div>
                    <div className={styles.cartCounter}>{cartValue}</div>
                  </Link>
                }
                modal
              >
                {close => (
                  <div className={styles.popup}>
                    <Link to='/' className={styles.close_popup} onClick={close}>
                      &times;
                    </Link>
                    <h2 className={styles.title}>Cart</h2>
                    {cart.map(({ id, img, name, price }) => (
                      <div key={id} className={styles.popupContent}>
                        <div className={styles.image}>
                          <img src={img} alt={id} />
                        </div>
                        <div className={styles.description}>{name}</div>
                        <div className={styles.price}>
                          <Price>{price}</Price>
                        </div>
                        <div className={styles.cartActions}>
                          <Button
                            onClick={() =>
                              window.confirm(
                                'Are you sure You want to add this to cart ?'
                              )
                            }
                            variant='small'
                          >
                            <FontAwesomeIcon className={styles.icon} icon={faMinus} />
                          </Button>
                          <input
                            className={styles.productAmount}
                            type='text'
                            name='amount'
                            value={'1'}
                          />
                          <Button
                            onClick={() =>
                              window.confirm(
                                'Are you sure You want to delete this to cart ?'
                              )
                            }
                            variant='small'
                          >
                            <FontAwesomeIcon className={styles.icon} icon={faPlus} />
                          </Button>
                          <Button
                            onClick={() =>
                              window.confirm(
                                'Are you sure You want to delete this item from cart ?'
                              )
                            }
                            variant='trash'
                          >
                            <FontAwesomeIcon
                              className={styles.trashIcon_modal}
                              icon={faTrashAlt}
                            />
                          </Button>
                        </div>
                      </div>
                    ))}
                    <div className={styles.summary}>
                      <p>Sum:</p>
                    </div>
                    <div className={styles.buttons}>
                      <div className={styles.button} onClick={close}>
                        Cancel
                      </div>
                      <div className={styles.button}>Buy</div>
                    </div>
                  </div>
                )}
              </Popup>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CompanyClaim;
