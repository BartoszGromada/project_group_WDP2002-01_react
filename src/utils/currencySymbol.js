export default currency => {
  switch (currency) {
    case 'USD':
      return '$';
    case 'EUR':
      return '\u20AC';
    case 'PLN':
      return 'zł';
    default:
      return '$';
  }
};
