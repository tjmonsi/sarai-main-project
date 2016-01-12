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
      <a
        className="mdl-layout-title"
        href="/"
      >
        <span className={this.props.className}>
          {'SARAI Beta'}
        </span>
      </a>
    );
  }
}

ApptitleMolecule.propTypes = {
  className: React.PropTypes.string.isRequired
};
