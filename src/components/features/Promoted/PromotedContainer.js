import { connect } from 'react-redux';

import Promoted from './Promoted';

import { getAll } from '../../../redux/cartRedux';
import { getNew, getPromoted } from '../../../redux/productsRedux.js';

const mapStateToProps = state => ({
  promoted: getPromoted(state),
  categories: getAll(state),
  products: getNew(state),
});

export default connect(mapStateToProps)(Promoted);
