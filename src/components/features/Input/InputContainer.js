import { connect } from 'react-redux';
import Input from './Input';

import { updateInput } from '../../../redux/inputRedux';

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  updateCartValue: value => dispatch(updateInput(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Input);
