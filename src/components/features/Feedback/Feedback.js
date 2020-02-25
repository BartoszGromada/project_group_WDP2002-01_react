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
    const {
      // opinionText,
      // opinionImage,
      // opinionName,
      // opinionTitle,
      feedback,
    } = this.props;

    // eslint-disable-next-line no-console
    console.log('feedback', feedback);

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
            <div className='row'>
              <FeedbackBox
              // opinionText={opinionText}
              // opinionImage={opinionImage}
              // opinionName={opinionName}
              // opinionTitle={opinionTitle}
              />
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
  opinionText: PropTypes.number,
  opinionImage: PropTypes.number,
  opinionName: PropTypes.number,
  opinionTitle: PropTypes.number,
  feedback: PropTypes.node,
  // opinionText: PropTypes.node,
  // opinionImage: PropTypes.node,
  // opinionName: PropTypes.node,
  // opinionTitle: PropTypes.array,
};

// Feedback.defaultProps = {
//   opinionText: initialState.feedback[0].opinion,
//   opinionImage: initialState.feedback[0].image,
//   opinionName: initialState.feedback[0].name,
//   opinionTitle: initialState.feedback[0].title,
// };



export default Feedback;
