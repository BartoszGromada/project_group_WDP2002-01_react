import { connect } from 'react-redux';
import Homepage from './Homepage';
import { getSearchString } from '../../../redux/searchRedux';

const mapStateToProps = state => ({
  searchString: getSearchString(state),
});

export default connect(mapStateToProps)(Homepage);
