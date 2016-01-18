import React from 'react';
import { Tracker } from 'meteor/tracker';

export default class MeteorData extends React.Component {
  componentWillMount() {
    this.computation = Tracker.autorun(() => {
      const subs = this.props.subscribe();
      const newSubs = subs.constructor === Array ? subs : [subs];
      const state = this.props.fetch();
      state.loading = newSubs
        .map((sub) => {
          return !sub.ready();
        })
        .reduce((prev, current) => {
          return prev && current;
        });
      // this.setState(state);
    });
  }
  componentWillUnmount() {
    this.computation.stop();
  }
  render() {
    return this.state ? this.props.render(this.state) : false;
  }
}

MeteorData.propTypes = {
  fetch: React.PropTypes.func.isRequired,
  render: React.PropTypes.func.isRequired,
  subscribe: React.PropTypes.func.isRequired
};
