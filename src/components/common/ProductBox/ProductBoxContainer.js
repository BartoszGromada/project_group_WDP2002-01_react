import { connect } from 'react-redux';

import ProductBox from './ProductBox';

import { getAllToCompare, addProductToCompare } from '../../../redux/compareRedux';
import { getCurrency } from '../../../redux/currencyRedux';
import { getRates, getStatus } from '../../../redux/currencyRatesRedux';

const mapStateToProps = state => ({
  allComperedProducts: getAllToCompare(state),
  getCurrency: getCurrency(state),
  getRates: getRates(state),
  getStatus: getStatus(state),
});

const mapDispatchToProps = dispatch => ({
  addToCompare: product => dispatch(addProductToCompare(product)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductBox);
