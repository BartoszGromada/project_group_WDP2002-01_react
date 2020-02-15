import React from 'react';
// import PropTypes from 'prop-types';

import styles from './FurnitureGallery.module.scss';
import PromoProduct from './../PromoProduct/PromoProduct';
import FurnitureGalleryActions from '../FurnitureGalleryActions/FurnitureGalleryActions';
import FurnitureGalleryPrice from '../FurnitureGalleryPrice/FurnitureGalleryPrice';

class FurnitureGallery extends React.Component {
  render() {
    return (
      <div className={styles.root}>
        <div className='container'>
          <div className='row'>
            <div className={'col-12 col-md-6 ' + styles.gallery}>
              <h3>Furniture Gallery</h3>
              <div className={styles.menu}>
                <ul>
                  <li>
                    <a href='#'>Featured</a>
                  </li>
                  <li>
                    <a href='#'>Top seller</a>
                  </li>
                  <li>
                    <a href='#'>Sale off</a>
                  </li>
                  <li>
                    <a href='#'>Top rated</a>
                  </li>
                </ul>

                {/* <ul>
                  {gallery.map(item => (
                    <li key={item.id}>
                      <a href ="#">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul> */}
              </div>
              <div className={styles.product}>
                <img src='https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'></img>
                <FurnitureGalleryActions />
                <FurnitureGalleryPrice />
              </div>
              <div className={styles.slider}>
                <div className={styles.arrow}>
                  <a href='#'>&#x3c;</a>
                </div>
                <div className={styles.thumbnails}>
                  <div className={styles.thumbnail}>
                    <img src='https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'></img>
                  </div>
                  <div className={styles.thumbnail}>
                    <img src='https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'></img>
                  </div>
                  <div className={styles.thumbnail}>
                    <img src='https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'></img>
                  </div>
                  <div className={styles.thumbnail}>
                    <img src='https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'></img>
                  </div>
                  <div className={styles.thumbnail}>
                    <img src='https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'></img>
                  </div>
                  <div className={styles.thumbnail}>
                    <img src='https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'></img>
                  </div>
                </div>
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

export default FurnitureGallery;
