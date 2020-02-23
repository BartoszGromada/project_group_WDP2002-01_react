import { connect } from 'react-redux';
import Input from './Input';

import { updateInput, getInputValue } from '../../../redux/inputRedux';

const mapStateToProps = state => ({
  value: getInputValue(state),
});

const mapDispatchToProps = dispatch => ({
  updateCartValue: value => dispatch(updateInput(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Input);
