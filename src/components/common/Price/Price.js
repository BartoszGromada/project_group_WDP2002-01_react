import React from 'react';
import PropTypes from 'prop-types';

import currencySymbol from '../../../utils/currencySymbol';
import currencyConverter from '../../../utils/currencyConverter';

const Price = ({ children, getCurrency, getRates, getStatus }) => {
  const formatedPrice = price => {
    if (getStatus) {
      return currencyConverter(price, getCurrency, getRates.rates);
    }
    return <>{price}</>;
  };

  return (
    <>
      {formatedPrice(children)} {currencySymbol(getCurrency)}
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
