import { connect } from 'react-redux';

import ProductBox from './ProductBox';

import { getAllToCompare, addProductToCompare } from '../../../redux/compareRedux';
import { getCurrency } from '../../../redux/currencyRedux';

const mapStateToProps = state => ({
  allComperedProducts: getAllToCompare(state),
  getCurrency: getCurrency(state),
});

const mapDispatchToProps = dispatch => ({
  addToCompare: product => dispatch(addProductToCompare(product)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductBox);
