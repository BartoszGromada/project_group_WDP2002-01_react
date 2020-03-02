import React from 'react';
import PropTypes from 'prop-types';
import Promotion from '../../features/Promotion/Promotion';

import styles from './Homepage.module.scss';

import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import Promoted from '../../features/Promoted/PromotedContainer';
import Brands from '../../features/Brands/BrandsContainer';
import FurnitureGallery from '../../features/FurnitureGallery/FurnitureGalleryContainer';
import Feedback from '../../features/Feedback/FeedbackContainer';
import CookiesInfo from '../../features/CookiesInfo/CookiesInfo';

const Homepage = ({ searchString }) => (
  <div className={styles.root}>
    {!searchString && (
      <>
        <Promoted />
        <FeatureBoxes />
        <Promotion />
      </>
    )}
    <NewFurniture />
    <FurnitureGallery />
    <Brands />
    <Feedback />
    <CookiesInfo />
  </div>
);

Homepage.propTypes = {
  searchString: PropTypes.string,
};

export default Homepage;
