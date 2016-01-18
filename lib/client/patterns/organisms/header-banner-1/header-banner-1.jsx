import React from 'react';
import '/node_modules/material-design-lite/material';
import { default as HeaderBannerTitleText } from '/lib/client/patterns/molecules/header-banner-title-text/header-banner-title-text.jsx';

class HeaderBanner1 extends React.Component {
  componentDidMount() {
    componentHandler.upgradeDom();
  }
  componentDidUpdate() {
    componentHandler.upgradeDom();
  }
  render() {
    const style = {
      backgroundImage: `url(${this.props.bannerBackgroundImage})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center'
    };

    return (
      <div
        className = "mdl-grid header-banner-1"
        style = {style}
      >
        <div className = "mdl-cell mdl-cell--6-col mdl-cell--12-col-phone">
          <HeaderBannerTitleText
            description = {this.props.bannerDescription}
            title = {this.props.bannerTitle}
          />
        </div>
        <div className = "mdl-cell mdl-cell--6-col mdl-cell--12-col-phone">
        </div>
      </div>
    );
  }
}

HeaderBanner1.propTypes = {
  bannerBackgroundImage: React.PropTypes.string,
  bannerDescription: React.PropTypes.string,
  bannerTitle: React.PropTypes.string
};

HeaderBanner1.defaultProps = {
  bannerBackgroundImage: '/atomic-design/fpo_16x9.png'
};

export default HeaderBanner1;
