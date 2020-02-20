export default (price, currency, rates) => {
  switch (currency) {
    case 'USD':
      return (price * rates[currency]).toFixed(2);
    case 'EUR':
      return (price * rates[currency]).toFixed(2);
    case 'PLN':
      return (price * rates[currency]).toFixed(2);
    default:
      return 'price';
  }
};
