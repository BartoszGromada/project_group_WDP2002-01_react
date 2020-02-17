import { connect } from 'react-redux';

import ProductBox from './ProductBox';

import { getAllToCompare, addProductToCompare } from '../../../redux/compareRedux';
import { addProduct, removeProduct } from '../../../redux/cartRedux';

const mapStateToProps = state => ({
  allComperedProducts: getAllToCompare(state),
});

const mapDispatchToProps = dispatch => ({
  addToCompare: product => dispatch(addProductToCompare(product)),
  addToCart: (id, price) => dispatch(addProduct(id, price)),
  removeFromCart: id => dispatch(removeProduct(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductBox);
