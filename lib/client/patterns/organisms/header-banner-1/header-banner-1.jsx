import React from 'react';
import '/node_modules/material-design-lite/material';
import { default as HeaderBannerTitleText } from '/lib/client/patterns/molecules/header-banner-title-text/header-banner-title-text.jsx';
import { default as HeaderBannerAlert } from '/lib/client/patterns/molecules/header-banner-alert/header-banner-alert.jsx';

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
      backgroundPosition: 'center top'
    };

    const {bannerDescription, bannerTitle, bannerAlert} = this.props;

    return (
      <div
        className = "mdl-grid header-banner-1"
        style = {style}
      >
        <div className = "mdl-cell mdl-cell--6-col mdl-cell--middle mdl-cell--12-col-phone header-banner-1-title-text-container">
          <HeaderBannerTitleText
            description = {bannerDescription}
            title = {bannerTitle}
          />
        </div>
        <div className = "mdl-cell mdl-cell--6-col mdl-cell--top mdl-cell--12-col-phone">
          {bannerAlert()}
        </div>
      </div>
    );
  }
}

HeaderBanner1.propTypes = {
  bannerAlert: React.PropTypes.func,
  bannerBackgroundImage: React.PropTypes.string,
  bannerDescription: React.PropTypes.string,
  bannerTitle: React.PropTypes.string
};

HeaderBanner1.defaultProps = {
  bannerAlert() {
    return (<HeaderBannerAlert />);
  },
  bannerBackgroundImage: '/atomic-design/fpo_16x9.png'
};

export default HeaderBanner1;
