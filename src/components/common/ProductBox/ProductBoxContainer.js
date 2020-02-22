import { connect } from 'react-redux';

import ProductBox from './ProductBox';

import { getAllToCompare, addProductToCompare } from '../../../redux/compareRedux';
import { getAll, addProduct, removeProduct } from '../../../redux/cartRedux';
import { getInputValue } from '../../../redux/inputRedux';

const mapStateToProps = state => ({
  allComperedProducts: getAllToCompare(state),
  cartContent: getAll(state),
  value: getInputValue(state),
});

const mapDispatchToProps = dispatch => ({
  addToCompare: product => dispatch(addProductToCompare(product)),
  addToCart: ({ id, img, price, value }) =>
    dispatch(addProduct({ id, img, price, value })),
  removeFromCart: id => dispatch(removeProduct(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductBox);
