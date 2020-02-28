import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

class MainLayout extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    changeMode: PropTypes.func,
  };

  setType(width) {
    const { changeMode } = this.props;
    let mode;
    if (width > 1020) {
      mode = 'desktop';
    } else if (width > 767) {
      mode = 'tablet';
    } else {
      mode = 'mobile';
    }
    changeMode(mode);
  }

  render() {
    const { children } = this.props;
    const windowWidth = window.outerWidth;

    return (
      <div resize={this.setType(windowWidth)}>
        <Header />
        {children}
        <Footer />
      </div>
    );
  }
}

export default MainLayout;
