import React from 'react';
import PropTypes from 'prop-types';

import { currencySymbolMap } from '../../../utils/currencySymbol';
import currencyConverter from '../../../utils/currencyConverter';

const Price = ({ children, getCurrency, getRates, getStatus }) => {
  const formatedPrice = price =>
    getStatus ? currencyConverter(price, getCurrency, getRates.rates) : price;

  return (
    <>
      {formatedPrice(children)} {currencySymbolMap[getCurrency]}
    </>
  );
};

Price.propTypes = {
  children: PropTypes.node,
  getCurrency: PropTypes.string,
  getRates: PropTypes.object,
  getStatus: PropTypes.bool,
};

export default Price;
