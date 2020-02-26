import { connect } from 'react-redux';
import Brands from './Brands';
import { getAll } from '../../../redux/brandsRedux';
import { getMode } from '../../../redux/modesRedux';

const mapStateToProps = state => ({
  brands: getAll(state),
  mode: getMode(state),
});

export default connect(mapStateToProps)(Brands);
