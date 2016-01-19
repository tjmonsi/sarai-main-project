import React from 'react';
import {mount} from 'react-mounter';
import {FlowRouter} from 'meteor/kadira:flow-router';

// Components to be loaded
import { default as AppBarTitle } from '/lib/client/patterns/atoms/app-bar-title/app-bar-title.jsx';

export default (Router = FlowRouter, TemplateCtx) => {
  Router.route('/app-bar-title', {

    action() {
      mount(TemplateCtx, {
        content() {
          return (<AppBarTitle />);
        }
      });
    }
  });
};
