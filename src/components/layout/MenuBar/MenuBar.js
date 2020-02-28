import React from 'react';

import ProductSearch from '../../features/ProductSearch/ProductSearchContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import styles from './MenuBar.module.scss';

import { Link } from 'react-router-dom';

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
            <div className={'col-auto ' + styles.menu + ' ' + this.toggledMenu()}>
              <ul>
                <li>
                  <Link to='/' className={styles.active}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to='/products'>Furniture</Link>
                </li>
                <li>
                  <Link to='/'>Chair</Link>
                </li>
                <li>
                  <Link to='/'>Table</Link>
                </li>
                <li>
                  <Link to='/'>Sofa</Link>
                </li>
                <li>
                  <Link to='/'>Bedroom</Link>
                </li>
                <li>
                  <Link to='/'>Blog</Link>
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
