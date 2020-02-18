import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Feedback.module.scss';
import FeedbackBox from '../../common/FeedbackBox/FeedbackBox';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';

import initialState from '../../../redux/initialState';

class Feedback extends React.Component {
  state = {
    activePage: 0,
    activeFeedback: 0,
  };

  handlePageChange(newPage) {
    this.setState({ activePage: newPage });
  }

  handleFeedbackChange(newFeedback) {
    this.setState({ activeCategory: newFeedback });
  }

  render() {
    const { activePage, activeFeedback } = this.state;

    const pagesCount = initialState.feedback.length;

    const dots = [];
    for (let i = 0; i < pagesCount; i++) {
      dots.push(
        <li>
          <a
            onClick={() => this.handlePageChange(i)}
            className={i === activePage && styles.active}
          >
            page {i}
          </a>
        </li>
      );
    }

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
                <ul>{dots}</ul>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-12'>
              <div className={styles.iconWrapper}>
                <FontAwesomeIcon className={styles.icon} icon={faQuoteRight} />
              </div>
            </div>
            <div className='row'>
              <FeedbackBox />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Feedback;
