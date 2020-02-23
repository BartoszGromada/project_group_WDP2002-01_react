import React, { Component } from 'react';
import './index.css';
import PropTypes from 'prop-types';

class Input extends Component {
  state = {
    value: 1,
  };

  decrease = () =>
    this.state.value > 1 && this.setState({ value: this.state.value - 1 });

  increase = () =>
    this.state.value < 10 && this.setState({ value: this.state.value + 1 });

  render() {
    const { changeCount } = this.props;
    changeCount(this.state.value);

    return (
      <div className='def-number-input number-input'>
        <button onClick={this.decrease} className='minus'></button>
        <input
          className='quantity'
          name='quantity'
          value={this.state.value}
          type='number'
        />
        <button onClick={this.increase} className='plus'></button>
      </div>
    );
  }
}

Input.propTypes = {
  updateCartValue: PropTypes.func,
  changeCount: PropTypes.func,
};

export default Input;
