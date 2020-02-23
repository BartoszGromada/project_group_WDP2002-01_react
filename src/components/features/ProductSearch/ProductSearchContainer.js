import { connect } from 'react-redux';
import ProductSearch from './ProductSearch';
import {
  getSearchString,
  getCategories,
  setSearchString,
  getSelectedCategory,
  setSearchCategory,
} from '../../../redux/searchRedux';

const mapStateToProps = state => ({
  searchString: getSearchString(state),
  categories: getCategories(state),
  selectedCategory: getSelectedCategory(state),
});

const mapDispatchToProps = dispach => ({
  setSearchString: string => dispach(setSearchString(string)),
  setSearchCategory: category => dispach(setSearchCategory(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductSearch);
