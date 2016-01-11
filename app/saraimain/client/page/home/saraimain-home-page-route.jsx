import React from 'react';
import '/node_modules/material-design-lite/material';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { ReactLayout } from 'meteor/kadira:react-layout';
import { default as MainTemplate } from '/lib/client/template/main/main-t.jsx';
import { default as SaraimainHomePage } from './saraimain-home-page.jsx';

FlowRouter.route('/', {
  action() {
    ReactLayout.render(MainTemplate, {
      content: <SaraimainHomePage />
    });
  }
});
