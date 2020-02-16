import React from 'react';
// import PropTypes from 'prop-types';

import styles from './FeedbackBox.module.scss';

class FeedbackBox extends React.Component {
  render() {
    return (
      <div className='col-12'>
        <div className={styles.opinion}>
          <p>
            Very large selection of products and very helpful staff. Sufficient parking.
            Transportation can be ordered quickly and gentlemen did not even have a
            problem with twisting a few screws of the seat when bringing.
          </p>
        </div>
        <div className='row justify-content-center'>
          <img
            src='https://gravatar.com/avatar/b71a53a1edd84a3efaec8e28150adc51?s=400&d=mp&r=x'
            className='rounded float-right  align-self-center'
            alt=''
          />
          <div className='col-2 align-self-center'>
            <h5>John Smith</h5>
            <p className={styles.title}>Furniture client</p>
          </div>
        </div>
      </div>
    );
  }
}

export default FeedbackBox;
