import React from 'react';
import '/node_modules/material-design-lite/material';

class HeaderBannerTitleText extends React.Component {
  componentDidMount() {
    componentHandler.upgradeDom();
  }
  componentDidUpdate() {
    componentHandler.upgradeDom();
  }
  render() {
    return (
      <div className = "mdl-grid mdl-grid--no-spacing header-banner-title-text">
        <div className = "mdl-cell mdl-cell--12-col">
          <h1 className = "hbtt-title">
            {this.props.title}
          </h1>
        </div>
        <div className = "mdl-cell mdl-cell--12-col">
          <p className = "hbtt-description">
            {this.props.description}
          </p>
        </div>
      </div>
    );
  }
}

HeaderBannerTitleText.propTypes = {
  description: React.PropTypes.string,
  title: React.PropTypes.string.isRequired
};

HeaderBannerTitleText.defaultProps = {
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim, leo eu fermentum porta, metus ex rutrum diam, ac iaculis sapien ligula nec diam.',
  title: 'Sarai Beta'
};

export default HeaderBannerTitleText;
