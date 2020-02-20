import { connect } from 'react-redux';
import Brands from './Brands';
import { getAll } from '../../../redux/brandsRedux';

const mapStateToProps = state => ({
  brands: getAll(state),
});

export default connect(mapStateToProps)(Brands);
