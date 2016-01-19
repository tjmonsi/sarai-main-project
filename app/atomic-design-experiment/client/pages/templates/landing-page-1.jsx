// import React from 'react';
import {mount} from 'react-mounter';
import {FlowRouter} from 'meteor/kadira:flow-router';

// Components to be loaded


export default (Router = FlowRouter, TemplateCtx) => {
  Router.route('/landing-page-1', {
    action() {
      mount(TemplateCtx, {
        logoImage: '/images/sarai-white.png',
        logoDrawerImage: '/images/sarai.png',
        logoLink: '/',
        bannerBackgroundImage: '/images/spiel_background2-min.jpg'
      });
    }
  });
};
