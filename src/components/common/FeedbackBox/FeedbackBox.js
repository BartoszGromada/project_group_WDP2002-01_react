import React from 'react';

import initialState from '../../../redux/initialState';

import styles from './FeedbackBox.module.scss';

class FeedbackBox extends React.Component {
  render() {
    return (
      <div className='col-12'>
        <div className={styles.opinion}>
          <p>{initialState.feedback[0].opinion}</p>
        </div>
        <div className='row justify-content-center'>
          <img
            src={initialState.feedback[0].image}
            className='rounded float-right  align-self-center'
            alt=''
          />
          <div className='col-2 align-self-center'>
            <h5>{initialState.feedback[0].name}</h5>
            <p className={styles.title}>{initialState.feedback[0].title}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default FeedbackBox;
