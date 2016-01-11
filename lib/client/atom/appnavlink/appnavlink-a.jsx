import React from 'react';
import '/node_modules/material-design-lite/material';

export default class AppnavlinkAtom extends React.Component {
  componentDidMount() {
    componentHandler.upgradeDom();
  }
  componentDidUpdate() {
    componentHandler.upgradeDom();
  }
  render() {
    return (
      <a
        className="mdl-navigation__link"
        href={this.props.href}
      >
        {this.props.name}
      </a>
    );
  }
}

AppnavlinkAtom.propTypes = {
  href: React.PropTypes.string,
  name: React.PropTypes.string
};
