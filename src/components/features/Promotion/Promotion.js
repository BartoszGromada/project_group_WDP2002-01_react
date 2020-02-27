import React from 'react';
import styles from './Promotion.module.scss';
import Price from '../../common/Price/PriceContainer';

const Promotion = () => (
  <div className={styles.root}>
    <div className='container'>
      <div className='row'>
        <div className='col-lg-6 col-md-12'>
          <div className={styles.big}>
            <div className={styles.big_content}>
              <h3 className={styles.title}>Guest room</h3>
              <h2 className={styles.product}>Sofa</h2>
              <div className={styles.promotion}>-20%</div>
            </div>
          </div>
        </div>
        <div className='col-lg-6 col-md-12'>
          <div className='row'>
            <div className='col-12'>
              <div className={styles.box_small_1}>
                <div className={styles.text_small_1}>
                  <h3 className={styles.title_small_1}>
                    <b>Office</b> Chair
                  </h3>
                  <h2 className={styles.desc_small_1}>collection</h2>
                  <div className={styles.price_small_1}>
                    <Price>200.00</Price>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-12'>
              <div className={styles.box_small_2}>
                <div className={styles.text_small}>
                  <h3 className={styles.title_small_2}>
                    <b>Special</b> collection
                  </h3>
                  <h2 className={styles.desc_small_2}>save up 45% of furniture</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Promotion;
