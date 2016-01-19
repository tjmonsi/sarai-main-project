import React from 'react';
import {mount} from 'react-mounter';
import {FlowRouter} from 'meteor/kadira:flow-router';

// Components to be loaded
import {default as HeaderBanner1} from '/lib/client/patterns/organisms/header-banner-1/header-banner-1.jsx';

export default (Router = FlowRouter, TemplateCtx) => {
  Router.route('/header-banner-1', {
    action() {
      mount(TemplateCtx, {
        content() {
          return (
            <HeaderBanner1 bannerBackgroundImage="/images/spiel_background2-min.jpg"/>
          );
        }
      });
    }
  });
};
