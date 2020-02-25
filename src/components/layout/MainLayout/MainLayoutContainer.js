import { connect } from 'react-redux';
import MainLayout from './MainLayout';

import { getMode, updateMode } from '../../../redux/modesRedux';

const mapStateToProps = state => ({
  mode: getMode(state),
});

const mapDispatchToProps = dispatch => ({
  changeMode: mode => dispatch(updateMode(mode)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);
