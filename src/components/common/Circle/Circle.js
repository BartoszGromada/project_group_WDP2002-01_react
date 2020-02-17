import React from 'react';
import PropTypes from 'prop-types';
import styles from './Circle.module.scss';

const Circle = ({ description }) => <div className={styles.circle}>{description}</div>;

Circle.propTypes = {
  description: PropTypes.string,
};

export default Circle;
