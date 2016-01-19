import React from 'react';
import '/node_modules/material-design-lite/material';

class HeaderBannerAlert extends React.Component {
  componentDidMount() {
    componentHandler.upgradeDom();
  }
  componentDidUpdate() {
    componentHandler.upgradeDom();
  }
  render() {
    const {
            headerBannerAlertLink,
            headerBannerAlertText,
            headerBannerAlertTitleThumbnail,
            headerBannerAlertTitle
          } = this.props;

    return (
      <div className = "header-banner-alert">
        <div className = "mdl-grid ">
          <div className = "mdl-cell mdl-cell--12-col header-banner-alert-title">
            <div className = "mdl-grid mdl-grid--no-spacing">
              <div>
                <div className="header-banner-alert-title-thumbnail-container">
                  <img
                    className = "header-banner-alert-title-thumbnail"
                    src={headerBannerAlertTitleThumbnail}
                  />
                </div>
              </div>
              <div className = "mdl-cell mdl-cell--12-col-phone">
                <div className = "header-banner-alert-title-text-container">
                  <h4 className = "header-banner-alert-title-text">
                    {headerBannerAlertTitle}
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className = "mdl-cell mdl-cell--12-col header-banner-alert-text-container">
            <p className = "header-banner-title-text">
              {headerBannerAlertText}
            </p>
          </div>
          <div className = "mdl-cell mdl-cell--12-col header-banner-alert-action-container">
            <a
              className = "mdl-button mdl-js-button mdl-js-ripple-effect"
              href = {headerBannerAlertLink}
            >
              {'Read More...'}
            </a>
          </div>
        </div>
      </div>
    );
  }
}

HeaderBannerAlert.propTypes = {
  headerBannerAlertLink: React.PropTypes.string.isRequired,
  headerBannerAlertText: React.PropTypes.string.isRequired,
  headerBannerAlertTitle: React.PropTypes.string.isRequired,
  headerBannerAlertTitleThumbnail: React.PropTypes.string.isRequired
};

HeaderBannerAlert.defaultProps = {
  headerBannerAlertLink: '',
  headerBannerAlertText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim, leo eu fermentum porta, metus ex rutrum diam, ac iaculis sapien ligula nec diam.',
  headerBannerAlertTitle: 'This is an Alert Title',
  headerBannerAlertTitleThumbnail: '/atomic-design/fpo_square.png'
};

export default HeaderBannerAlert;
