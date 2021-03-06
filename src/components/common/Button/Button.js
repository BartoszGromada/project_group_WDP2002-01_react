import React from 'react';
import PropTypes from 'prop-types';

import styles from './Button.module.scss';

class Button extends React.Component {
  render() {
    const {
      children,
      variant,
      noHover,
      className: propClassName,
      favourite,
      ...props
    } = this.props;

    const classes = [];

    if (propClassName) classes.push(propClassName);

    if (variant) classes.push(styles[variant]);
    else classes.push('main');

    if (favourite) classes.push(styles.favourite);

    let Comp = 'a';

    if (noHover) {
      classes.push(styles.noHover);
      Comp = 'div';
    }

    return (
      <Comp href='#' {...props} className={classes.join(' ')}>
        {children}
      </Comp>
    );
  }
}

Button.propTypes = {
  children: PropTypes.node,
  noHover: PropTypes.bool,
  className: PropTypes.string,
  variant: PropTypes.string,
  favourite: PropTypes.bool,
};

export default Button;
