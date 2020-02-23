import { connect } from 'react-redux';

import Feedback from './Feedback';

import { getAll } from '../../../redux/feedbackRedux';

const mapStateToProps = state => ({
  feedback: getAll(state),
});

export default connect(mapStateToProps)(Feedback);
