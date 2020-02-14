import React from 'react';
import styles from './Promotion.module.scss';

const Promotion = () => (
  <div className={styles.root}>
    <div className='container'>
      <div className='row'>
        <div className='col-6'>
          <div className={styles.big}>
            <div className={styles.bigcontent}>
              <h3 className={styles.title}>Guest room</h3>
              <h2 className={styles.product}>Sofa</h2>
              <div className={styles.promotion}>-20%</div>
            </div>
          </div>
        </div>
        <div className='col-6'>
          <div className='row'>
            <div className={'col-12' + styles.small_1}></div>
            <div className={'col-12' + styles.small_2}></div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Promotion;
