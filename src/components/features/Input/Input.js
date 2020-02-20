/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import './index.css';

class Input extends Component {
  state = {
    value: 1,
  };

  decrease = () => {
    if (this.props.val > 1) {
      this.setState({ value: this.props.val - 1 });
    }
  };

  increase = () => {
    if (this.props.val < 40) {
      this.setState({ value: this.props.val + 1 });
    }
  };

  handleChange = e => {
    const { updateCartValue } = this.props;
    updateCartValue(e.target.value);
  };

  render() {
    return (
      <div className='def-number-input number-input'>
        <button onClick={this.decrease} className='minus'></button>
        <input
          className='quantity'
          name='quantity'
          min='1'
          max='45'
          onChange={this.handleChange}
          type='number'
        />
        <button onClick={this.increase} className='plus'></button>
      </div>
    );
  }
}

export default Input;
