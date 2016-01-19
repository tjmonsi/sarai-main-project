import React from 'react';
import '/node_modules/material-design-lite/material';

import { default as AppBarTitle } from '/lib/client/patterns/atoms/app-bar-title/app-bar-title.jsx';
import { default as AppBarNav } from '/lib/client/patterns/molecules/app-bar-nav/app-bar-nav.jsx';

class AppBar extends React.Component {
  componentDidMount() {
    componentHandler.upgradeDom();
  }
  componentDidUpdate() {
    componentHandler.upgradeDom();
  }
  render() {
    const {logoImage, logoLink} = this.props;
    return (
      <header className="mdl-layout__header app-bar">
        <div className="mdl-layout__header-row">
          <AppBarTitle
            logoImage = {logoImage}
            logoLink = {logoLink}
          />
          <div className="mdl-layout-spacer"></div>
          <AppBarNav />
        </div>
      </header>
    );
  }
}

AppBar.propTypes = {
  logoImage: React.PropTypes.string,
  logoLink: React.PropTypes.string
};

export default AppBar;
