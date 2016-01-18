import React from 'react';
import {mount} from 'react-mounter';
import {FlowRouter} from 'meteor/kadira:flow-router';

// Components to be loaded
import { default as ReactPattern } from '/lib/client/patterns/atoms/react-pattern/react-pattern.jsx';

export default (Router = FlowRouter, TemplateCtx) => {
  Router.route('/react-pattern', {

    action() {
      mount(TemplateCtx, {
        content() {
          return (<ReactPattern />);
        }
      });
    }
  });
};
