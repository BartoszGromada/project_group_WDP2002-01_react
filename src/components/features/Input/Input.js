import React, { Component } from 'react';
import './index.css';
import PropTypes from 'prop-types';

class Input extends Component {
  state = {
    value: 1,
  };

  decrease = () => {
    if (this.state.value > 1) {
      this.setState({ value: this.state.value - 1 });
    }
  };

  increase = () => {
    if (this.state.value < 40) {
      this.setState({ value: this.state.value + 1 });
    }
  };

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleValueChange = e => {
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
          value={this.state.value}
          onClick={this.handleValueChange}
          type='number'
        />
        <button onClick={this.increase} className='plus'></button>
      </div>
    );
  }
}

Input.propTypes = {
  updateCartValue: PropTypes.func,
};

export default Input;
