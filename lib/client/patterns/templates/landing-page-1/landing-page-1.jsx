import React from 'react';
import '/node_modules/material-design-lite/material';

import { default as AppBar } from '/lib/client/patterns/organisms/app-bar/app-bar.jsx';
import { default as AppDrawer } from '/lib/client/patterns/organisms/app-drawer/app-drawer.jsx';
import { default as HeaderBanner1 } from '/lib/client/patterns/organisms/header-banner-1/header-banner-1.jsx';

class LandingPage1 extends React.Component {
  componentDidMount() {
    componentHandler.upgradeDom();
  }
  componentDidUpdate() {
    componentHandler.upgradeDom();
  }
  render() {
    const {
      logoDrawerImage,
      logoImage,
      logoLink,
      bannerBackgroundImage
    } = this.props;
    return (
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header landing-page-1">
        <AppBar
          logoImage = {logoImage}
          logoLink = {logoLink}
        />
        <AppDrawer
          logoImage = {logoDrawerImage}
          logoLink = {logoLink}
        />
        <main className="mdl-layout__content">
          <HeaderBanner1
            bannerBackgroundImage = {bannerBackgroundImage}
          />
        </main>
      </div>
    );
  }
}

LandingPage1.propTypes = {
  bannerBackgroundImage: React.PropTypes.string,
  logoDrawerImage: React.PropTypes.string,
  logoImage: React.PropTypes.string,
  logoLink: React.PropTypes.string
};

export default LandingPage1;
