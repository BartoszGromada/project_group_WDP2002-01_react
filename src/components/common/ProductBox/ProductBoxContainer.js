import { connect } from 'react-redux';

import ProductBox from './ProductBox';

import { getAllToCompare, addProductToCompare } from '../../../redux/compareRedux';
import { getAll, addProduct, removeProduct } from '../../../redux/cartRedux';

const mapStateToProps = state => ({
  allComperedProducts: getAllToCompare(state),
  cartContent: getAll(state),
});

const mapDispatchToProps = dispatch => ({
  addToCompare: product => dispatch(addProductToCompare(product)),
  addToCart: ({ id, img, price }) => dispatch(addProduct({ id, img, price })),
  removeFromCart: id => dispatch(removeProduct(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductBox);
