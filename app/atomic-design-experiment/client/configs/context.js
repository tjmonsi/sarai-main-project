import {Meteor} from 'meteor/meteor';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {Tracker} from 'meteor/tracker';

export const initContext = () => {
  return {
    Meteor,
    FlowRouter,
    Tracker
  };
};
