import React from 'react';
import {mount} from 'react-mounter';
import {FlowRouter} from 'meteor/kadira:flow-router';

// Components to be loaded
import {default as HeaderBannerAlert} from '/lib/client/patterns/molecules/header-banner-alert/header-banner-alert.jsx';

export default (Router = FlowRouter, TemplateCtx) => {
  Router.route('/header-banner-alert', {
    action() {
      mount(TemplateCtx, {
        content() {
          return (<HeaderBannerAlert />);
        }
      });
    }
  });
};
