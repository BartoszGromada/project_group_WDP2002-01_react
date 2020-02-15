import React from 'react';
import PropTypes from 'prop-types';

import styles from './Stars.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faBorderNone } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

class Stars extends React.Component {
  static propTypes = {
    opinion: PropTypes.number,
    stars: PropTypes.number,
    opinionStars: PropTypes.func,
  };

  opinionStars(star) {
    console.log(star);

    //this.state.starsConfig.map(i => (

    //));
  }

  state = {
    starsConfig: [
      {
        id: 1,
        number: 1,
        active: false,
      },
      {
        id: 2,
        number: 2,
        active: false,
      },
      {
        id: 3,
        number: 3,
        active: false,
      },
      {
        id: 4,
        number: 4,
        active: false,
      },
      {
        id: 5,
        number: 5,
        active: false,
      },
    ],
  };

  render() {
    return (
      <div className={styles.stars}>
        {this.state.starsConfig.map(i => (
          <a key={i.id} href='#'>
            {this.props.opinion > 0 ? (
              <FontAwesomeIcon
                onMouseOver={() => this.opinionStars(i.id)}
                icon={faStar}
                className={i.id <= this.props.opinion ? styles.active : ''}
              ></FontAwesomeIcon>
            ) : (
              <FontAwesomeIcon
                onMouseOver={() => this.opinionStars(i.id)}
                icon={faStar}
                className={i.id <= this.props.stars ? '' : ''}
              ></FontAwesomeIcon>
            )}
          </a>
        ))}
      </div>
    );
  }
}

export default Stars;
