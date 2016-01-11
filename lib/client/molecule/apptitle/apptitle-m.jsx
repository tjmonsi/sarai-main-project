import React from 'react';
import '/node_modules/material-design-lite/material';

export default class ApptitleMolecule extends React.Component {
  componentDidMount() {
    componentHandler.upgradeDom();
  }
  componentDidUpdate() {
    componentHandler.upgradeDom();
  }
  render() {
    return (
      <span className="mdl-layout-title">
        <a href="/">
          {'SARAI Beta'}
        </a>
      </span>
    );
  }
}
