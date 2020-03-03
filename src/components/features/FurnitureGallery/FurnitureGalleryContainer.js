import { connect } from 'react-redux';

import FurnitureGallery from './FurnitureGallery';

import { getAll } from '../../../redux/galleryRedux';
import { getTab } from '../../../redux/galleryRedux';

const mapStateToProps = state => ({
  products: getAll(state),
  tabs: getTab(state),
});

export default connect(mapStateToProps)(FurnitureGallery);
