import React from 'react';
import '/node_modules/material-design-lite/material';

export default class SaraimainHomePage extends React.Component {
  componentDidMount() {
    componentHandler.upgradeDom();
  }
  componentDidUpdate() {
    componentHandler.upgradeDom();
  }
  render() {
    return (
      <div className="saraimain-home-page">
        {'Hello'}
      </div>
    );
  }
}
