import React from 'react';
import {mount} from 'react-mounter';
import {FlowRouter} from 'meteor/kadira:flow-router';

// Components to be loaded
import {default as AppBar} from '/lib/client/patterns/organisms/app-bar/app-bar.jsx';

export default (Router = FlowRouter, TemplateCtx) => {
  Router.route('/app-bar', {
    action() {
      mount(TemplateCtx, {
        content() {
          return (
            <AppBar />
          );
        }
      });
    }
  });
};
