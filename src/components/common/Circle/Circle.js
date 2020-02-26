import React from 'react';
import PropTypes from 'prop-types';
import styles from './Circle.module.scss';

const Circle = ({ number, description }) => (
  <div className={styles.circle}>
    <span>{number}</span>
    <br />
    {description}
  </div>
);

Circle.propTypes = {
  number: PropTypes.string,
  description: PropTypes.string,
};

export default Circle;
