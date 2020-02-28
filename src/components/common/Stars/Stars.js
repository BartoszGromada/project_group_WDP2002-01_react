import React from 'react';
import PropTypes from 'prop-types';

import styles from './Stars.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

import { Link } from 'react-router-dom';

class Stars extends React.Component {
  static propTypes = {
    product: PropTypes.string,
    opinion: PropTypes.number,
    stars: PropTypes.number,
    opinionStars: PropTypes.func,
    getOpinion: PropTypes.func,
  };

  opinionStars(star) {
    this.setState(({ starsConfig }) => {
      return starsConfig.map(i => {
        if (i.id <= star) {
          i.active = 'active';
        } else {
          i.active = 'inactive';
        }
        return i;
      });
    });
  }

  outOfStar() {
    this.setState(({ starsConfig }) => {
      return starsConfig.map(i => {
        i.active = false;
        return i;
      });
    });
  }

  giveOpinion(e, star) {
    e.preventDefault();
    this.setState({ opinion: star });
  }

  state = {
    opinion: false,
    starsConfig: [
      {
        id: 1,
        active: false,
      },
      {
        id: 2,
        active: false,
      },
      {
        id: 3,
        active: false,
      },
      {
        id: 4,
        active: false,
      },
      {
        id: 5,
        active: false,
      },
    ],
  };

  render() {
    return (
      <div className={styles.stars} onMouseOut={() => this.outOfStar()}>
        {this.state.starsConfig.map(i => (
          <Link to='/' key={i.id} onClick={e => this.giveOpinion(e, i.id)}>
            <FontAwesomeIcon
              onMouseOver={() => this.opinionStars(i.id)}
              icon={
                (i.active
                ? i.active === 'active'
                : i.id <=
                  (this.state.opinion || this.props.opinion || this.props.stars))
                  ? faStar
                  : farStar
              }
              className={
                (i.active
                ? i.active === 'active'
                : i.id <= (this.state.opinion || this.props.opinion))
                  ? styles.active
                  : ''
              }
            />
          </Link>
        ))}
      </div>
    );
  }
}

export default Stars;
