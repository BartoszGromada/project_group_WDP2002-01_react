import React from 'react';

import styles from './Feedback.module.scss';
import FeedbackBox from '../../common/FeedbackBox/FeedbackBox';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';

class Feedback extends React.Component {
  render() {
    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={styles.panelBar}>
            <div className='row no-gutters align-items-end'>
              <div className={'col-auto ' + styles.heading}>
                <h3>Client Feedback</h3>
              </div>
              <div className='col'></div>
              <div className={'col-auto ' + styles.dots}>
                <ul>
                  <li>
                    <a>page</a>
                  </li>
                  <li>
                    <a>page</a>
                  </li>
                  <li>
                    <a>page</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-12'>
              <div className={styles.iconWrapper}>
                <FontAwesomeIcon className={styles.icon} icon={faQuoteRight} />
              </div>
            </div>
            <FeedbackBox />
          </div>
        </div>
      </div>
    );
  }
}

export default Feedback;
