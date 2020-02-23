import React from 'react';
import PropTypes from 'prop-types';

import initialState from '../../../redux/initialState';

import styles from './FeedbackBox.module.scss';

class FeedbackBox extends React.Component {
  static propTypes = {
    opinionText: PropTypes.node,
    opinionImage: PropTypes.node,
    opinionName: PropTypes.node,
    opinionTitle: PropTypes.node,
  };

  render() {
    const { opinionText, opinionImage, opinionName, opinionTitle } = this.props;

    return (
      <div className='col-12'>
        <div className={styles.opinion}>
          <p>{opinionText}</p>
        </div>
        <div className='row justify-content-center'>
          <img
            src={opinionImage}
            className='rounded float-right  align-self-center'
            alt=''
          />
          <div className='col-2 align-self-center'>
            <h5>{opinionName}</h5>
            <p className={styles.title}>{opinionTitle}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default FeedbackBox;
