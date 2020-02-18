import React from 'react';
import PropTypes from 'prop-types';
import { Swipeable } from 'react-swipeable';

class SwipeComponent extends React.Component {
  swipingLeft(e, action) {
    action();
  }
  swipingRight(e, action) {
    action();
  }

  render() {
    const { children, leftAction, rightAction } = this.props;

    return (
      <Swipeable
        onSwipedLeft={e => this.swipingLeft(e, leftAction)}
        onSwipedRight={e => this.swipingRight(e, rightAction)}
      >
        {children}
      </Swipeable>
    );
  }
}

SwipeComponent.propTypes = {
  children: PropTypes.node,
  leftAction: PropTypes.func.isRequired,
  rightAction: PropTypes.func.isRequired,
};

export default SwipeComponent;
