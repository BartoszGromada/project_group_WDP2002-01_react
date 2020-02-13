import React from 'react';
import PropTypes from 'prop-types';

import ProductSearch from '../../features/ProductSearch/ProductSearch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import styles from './MenuBar.module.scss';

class MenuBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuToggled: false,
    };
  }

  handleToggle() {
    this.setState({ menuToggled: !this.state.menuToggled });
  }

  toggledMenu() {
    if (this.state.menuToggled) {
      return styles.toggled;
    } else {
      return '';
    }
  }

  render() {
    return (
      <div className={styles.root}>
        <div className={'container ' + styles.box}>
          <div className={'row align-items-center ' + styles.box}>
            <div className={'col ' + styles.col}>
              <ProductSearch />
            </div>
            <button className={styles.hamburger} onClick={() => this.handleToggle()}>
              <FontAwesomeIcon icon={faBars} />
            </button>
            <div
              className={
                'col-auto ' + styles.menu + ' ' + styles.col + ' ' + this.toggledMenu()
              }
            >
              <ul>
                <li>
                  <a href='#' className={styles.active}>
                    Home
                  </a>
                </li>
                <li>
                  <a href='#'>Furniture</a>
                </li>
                <li>
                  <a href='#'>Chair</a>
                </li>
                <li>
                  <a href='#'>Table</a>
                </li>
                <li>
                  <a href='#'>Sofa</a>
                </li>
                <li>
                  <a href='#'>Bedroom</a>
                </li>
                <li>
                  <a href='#'>Blog</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MenuBar;
