import React from 'react';
import '/node_modules/material-design-lite/material';

class AppBarNavItem extends React.Component {
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

AppBarNavItem.propTypes = {
  link: React.PropTypes.string,
  name: React.PropTypes.string
};

AppBarNavItem.defaultProps = {
  link: '/',
  name: 'Link'
};

export default AppBarNavItem;
