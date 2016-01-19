import React from 'react';
import '/node_modules/material-design-lite/material';
import { default as AppBarTitle } from '/lib/client/patterns/atoms/app-bar-title/app-bar-title.jsx';
import { default as AppDrawerNav } from '/lib/client/patterns/molecules/app-drawer-nav/app-drawer-nav.jsx';

class AppDrawer extends React.Component {
  componentDidMount() {
    componentHandler.upgradeDom();
  }
  componentDidUpdate() {
    componentHandler.upgradeDom();
  }
  render() {
    const {logoImage, logoLink} = this.props;
    return (
      <div className="mdl-layout__drawer mdl-layout--small-screen-only">
        <AppBarTitle
          logoImage = {logoImage}
          logoLink = {logoLink}
        />
        <AppDrawerNav />
      </div>
    );
  }
}

AppDrawer.propTypes = {
  logoImage: React.PropTypes.string,
  logoLink: React.PropTypes.string
};

export default AppDrawer;
