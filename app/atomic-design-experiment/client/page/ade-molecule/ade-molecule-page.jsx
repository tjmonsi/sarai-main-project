import '/node_modules/material-design-lite/material';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { ReactLayout } from 'meteor/kadira:react-layout';
import { default as HeaderBannerTitleText } from '/lib/client/pattern/molecule/header-banner-title-text/header-banner-title-text.jsx';
import { default as HeaderBannerAlert } from '/lib/client/pattern/molecule/header-banner-alert/header-banner-alert.jsx';

FlowRouter.route('/ade-molecule/header-banner-title-text', {
  action() {
    ReactLayout.render(HeaderBannerTitleText);
  }
});

FlowRouter.route('/ade-molecule/header-banner-alert', {
  action() {
    ReactLayout.render(HeaderBannerAlert);
  }
});
