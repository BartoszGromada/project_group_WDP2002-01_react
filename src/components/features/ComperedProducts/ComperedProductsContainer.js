import { connect } from 'react-redux';

import ComperedProducts from './ComperedProducts';
import { getNew } from '../../../redux/productsRedux.js';
import {
  getAllToCompare,
  removeProductFromCompare,
} from '../../../redux/compareRedux.js';

const mapStateToProps = state => ({
  products: getNew(state),
  allComperedProducts: getAllToCompare(state),
});

const mapDispatchToProps = dispatch => ({
  removeFromCompared: id => dispatch(removeProductFromCompare(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ComperedProducts);
