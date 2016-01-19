import React from 'react';
import '/node_modules/material-design-lite/material';

class AppBarTitle extends React.Component {
  componentDidMount() {
    componentHandler.upgradeDom();
  }
  componentDidUpdate() {
    componentHandler.upgradeDom();
  }
  render() {
    const {logoLink, logoImage} = this.props;
    return (
      <div className="mdl-layout-title app-bar-logo-container">
        <a
          className = "app-bar-logo-anchor"
          href={logoLink}
        >
          <img
            className="app-bar-logo"
            src={logoImage}
          />
        </a>
      </div>
    );
  }
}

AppBarTitle.propTypes = {
  logoImage: React.PropTypes.string,
  logoLink: React.PropTypes.string
};

AppBarTitle.defaultProps = {
  logoImage: '/atomic-design/fpo-logo.png',
  logoLink: '/'
};

export default AppBarTitle;
