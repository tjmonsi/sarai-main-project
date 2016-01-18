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
    return (
      <div className = "mdl-grid header-banner-alert">
        <div className = "mdl-cell mdl-cell--12-col header-banner-alert-title">
          <div className = "mdl-grid mdl-grid--no-spacing">
            <div className = "">
              <div className="header-banner-alert-title-thumbnail-container">
                <img
                  className = "header-banner-alert-title-thumbnail"
                  src={this.props.headerBannerAlertTitleThumbnail}
                />
              </div>
            </div>
            <div className = "mdl-cell mdl-cell--12-col-phone">
              <div className = "header-banner-alert-title-text-container">
                <h3 className = "header-banner-alert-title-text">
                  {this.props.headerBannerAlertTitle}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

HeaderBannerAlert.propTypes = {
  headerBannerAlertTitle: React.PropTypes.string.isRequired,
  headerBannerAlertTitleThumbnail: React.PropTypes.string.isRequired
};

HeaderBannerAlert.defaultProps = {
  headerBannerAlertTitle: 'This is an Alert Title',
  headerBannerAlertTitleThumbnail: '/atomic-design/fpo_square.png'
};

export default HeaderBannerAlert;
