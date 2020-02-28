import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Header.module.scss';

import CompanyClaim from '../CompanyClaim/CompanyClaimContainer';
import TopBar from '../TopBar/TopBarContainer';
import MenuBar from '../MenuBar/MenuBar';

const Header = props => (
  <header className={styles.root}>
    <TopBar />
    <CompanyClaim />
    <MenuBar />
  </header>
);

// Header.propTypes = {};

export default Header;
