import { connect } from 'react-redux';

import NewFurniture from './NewFurniture';

import { getMode } from '../../../redux/modesRedux.js';
import { getAll } from '../../../redux/categoriesRedux.js';
import { getNew } from '../../../redux/productsRedux.js';

const mapStateToProps = state => ({
  mode: getMode(state),
  categories: getAll(state),
  products: getNew(state),
});

export default connect(mapStateToProps)(NewFurniture);
