import { connect } from 'react-redux';

import NewFurniture from './NewFurniture';

import { getMode } from '../../../redux/modesRedux.js';
import { getAll } from '../../../redux/categoriesRedux.js';
import { getNew } from '../../../redux/productsRedux.js';
import {
  getAllToCompare,
  removeProductFromCompare,
} from '../../../redux/compareRedux.js';
import { getSearchString, getSelectedCategory } from '../../../redux/searchRedux';

const mapStateToProps = state => ({
  mode: getMode(state),
  categories: getAll(state),
  products: getNew(state),
  allComperedProducts: getAllToCompare(state),
  searchString: getSearchString(state),
  selectedCategory: getSelectedCategory(state),
});

const mapDispatchToProps = dispatch => ({
  removeFromCompared: id => dispatch(removeProductFromCompare(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewFurniture);
