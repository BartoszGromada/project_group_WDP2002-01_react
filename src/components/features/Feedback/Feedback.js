import React from 'react';
import PropTypes from 'prop-types';

import styles from './Feedback.module.scss';
import FeedbackBox from '../../common/FeedbackBox/FeedbackBox';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';

import SwipeComponent from '../../common/SwipeComponent/SwipeComponent';

class Feedback extends React.Component {
  state = {
    activePage: 0,
  };

  handlePageChange(newPage) {
    this.setState({ activePage: newPage });
  }

  render() {
    const { activePage } = this.state;
    const { feedback } = this.props;

    const pagesCount = feedback.length;

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
          <div className={'${row} ${styles.box}'}>
            <div className='col-12'>
              <div className={styles.iconWrapper}>
                <FontAwesomeIcon className={styles.icon} icon={faQuoteRight} />
              </div>
            </div>
            <div className={'${row} ${styles.box}'}>
              <SwipeComponent
                rightAction={() =>
                  this.handlePageChange(activePage > 0 ? activePage - 1 : 0)
                }
                leftAction={() =>
                  this.handlePageChange(
                    activePage + 1 < pagesCount ? activePage + 1 : activePage
                  )
                }
              >
                {feedback.slice(activePage, activePage + 1).map(item => (
                  <div key={item.id}>
                    <FeedbackBox
                      opinionText={item.opinion}
                      opinionImage={item.image}
                      opinionName={item.name}
                      opinionTitle={item.title}
                    />
                  </div>
                ))}
              </SwipeComponent>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Feedback.propTypes = {
  feedback: PropTypes.array,
};

export default Feedback;
