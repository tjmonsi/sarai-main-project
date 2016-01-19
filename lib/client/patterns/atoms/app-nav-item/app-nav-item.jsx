import React from 'react';
import '/node_modules/material-design-lite/material';

class AppNavItem extends React.Component {
  componentDidMount() {
    componentHandler.upgradeDom();
  }
  componentDidUpdate() {
    componentHandler.upgradeDom();
  }
  render() {
    const {name, link} = this.props;
    return (
      <a
        className="mdl-navigation__link"
        href={link}
      >
        {name}
      </a>
    );
  }
}

AppNavItem.propTypes = {
  link: React.PropTypes.string,
  name: React.PropTypes.string
};

AppNavItem.defaultProps = {
  link: '/',
  name: 'Link'
};

export default AppNavItem;
