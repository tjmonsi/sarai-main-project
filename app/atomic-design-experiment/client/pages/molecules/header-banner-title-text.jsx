import React from 'react';
import {mount} from 'react-mounter';
import {FlowRouter} from 'meteor/kadira:flow-router';

// Components to be loaded
import {default as HeaderBannerTitleText} from '/lib/client/patterns/molecules/header-banner-title-text/header-banner-title-text.jsx';

export default (Router = FlowRouter, TemplateCtx) => {
  Router.route('/header-banner-title-text', {
    action() {
      mount(TemplateCtx, {
        content() {
          return (<HeaderBannerTitleText />);
        }
      });
    }
  });
};
