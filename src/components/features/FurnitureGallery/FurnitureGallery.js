import React from 'react';
// import PropTypes from 'prop-types';

import styles from './FurnitureGallery.module.scss';

class FurnitureGallery extends React.Component {
  render() {
    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={styles.row}>
            <div className={'col-12 col-lg-6' + styles.gallery}>
              <div className={'col-auto' + styles.heading}>
                <h3>Furniture gallery</h3>
              </div>
              <div className={'col-auto' + styles.pictures}>
                <div className={styles.menu}>
                  <ul>
                    <li>
                      <a>Featured</a>
                    </li>
                    <li>
                      <a>Top seller</a>
                    </li>
                    <li>
                      <a>Sale off</a>
                    </li>
                    <li>
                      <a>Top rated</a>
                    </li>
                  </ul>
                </div>
                <div className={styles.product}>
                  <div className={styles.options}>
                    <div className={styles.option}>
                      <div className={styles.icon}>1</div>
                      <div className={styles.info}>add info</div>
                    </div>
                    <div className={styles.option}>
                      <div className={styles.icon}>2</div>
                      <div className={styles.info}>add info</div>
                    </div>
                    <div className={styles.option}>
                      <div className={styles.icon}>3</div>
                      <div className={styles.info}>add info</div>
                    </div>
                    <div className={styles.option}>
                      <div className={styles.icon}>3</div>
                      <div className={styles.info}>add info</div>
                    </div>
                  </div>
                  <div className={styles.price}>
                    <h5 className={styles.promoPrice}>$120,00</h5>
                    <s>
                      <h6 className={styles.regularPrice}>$160,00</h6>
                    </s>
                  </div>
                  <div className={styles.name}>
                    <h5>Aenean Ru Bristique</h5>
                    <div className={styles.ratings}>
                      <div className={styles.rating}>1</div>
                      <div className={styles.rating}>2</div>
                      <div className={styles.rating}>3</div>
                      <div className={styles.rating}>4</div>
                      <div className={styles.rating}>5</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.slider}>
                <div className={styles.button}>1</div>
                <div className={styles.thumbnails}>
                  <div className={styles.thumbnail}>
                    <img
                      src='https://mir-s3-cdn-cf.behance.net/project_modules/fs/e6cdf292052971.5e41b677af2ee.jpg'
                      alt=''
                    />
                  </div>
                  <div className={styles.thumbnail}>
                    <img
                      src='https://mir-s3-cdn-cf.behance.net/project_modules/fs/e6cdf292052971.5e41b677af2ee.jpg'
                      alt=''
                    />
                  </div>
                  <div className={styles.thumbnail}>
                    <img
                      src='https://mir-s3-cdn-cf.behance.net/project_modules/fs/e6cdf292052971.5e41b677af2ee.jpg'
                      alt=''
                    />
                  </div>
                  <div className={styles.thumbnail}>
                    <img
                      src='https://mir-s3-cdn-cf.behance.net/project_modules/fs/e6cdf292052971.5e41b677af2ee.jpg'
                      alt=''
                    />
                  </div>
                  <div className={styles.thumbnail}>
                    <img
                      src='https://mir-s3-cdn-cf.behance.net/project_modules/fs/e6cdf292052971.5e41b677af2ee.jpg'
                      alt=''
                    />
                  </div>
                  <div className={styles.thumbnail}>
                    <img
                      src='https://mir-s3-cdn-cf.behance.net/project_modules/fs/e6cdf292052971.5e41b677af2ee.jpg'
                      alt=''
                    />
                  </div>
                </div>
                <div className={styles.button}>1</div>
              </div>
            </div>
            <div className={'col-12 col-lg-6' + styles.promo}>
              <div className={styles.productInfoOverlay}></div>
              <div className={styles.productInfo}>
                <p>
                  From<span>$50.80</span>
                </p>
                <h2>Bedroom Bed</h2>
                <button></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FurnitureGallery;
