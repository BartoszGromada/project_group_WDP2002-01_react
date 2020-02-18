import { connect } from 'react-redux';

import NewFurniture from './NewFurniture';

import { getAll } from '../../../redux/categoriesRedux.js';
import { getNew } from '../../../redux/productsRedux.js';
import {
  getAllToCompare,
  removeProductFromCompare,
} from '../../../redux/compareRedux.js';

const mapStateToProps = state => ({
  categories: getAll(state),
  products: getNew(state),
  allComperedProducts: getAllToCompare(state),
});

const mapDispatchToProps = dispatch => ({
  removeFromCompared: id => dispatch(removeProductFromCompare(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewFurniture);
