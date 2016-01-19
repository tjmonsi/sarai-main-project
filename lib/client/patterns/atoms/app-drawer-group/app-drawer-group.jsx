import React from 'react';
import '/node_modules/material-design-lite/material';
import { default as AppNavItem } from '/lib/client/patterns/atoms/app-nav-item/app-nav-item.jsx';

class AppDrawerGroup extends React.Component {
  componentDidMount() {
    componentHandler.upgradeDom();
  }
  componentDidUpdate() {
    componentHandler.upgradeDom();
  }
  renderGroup() {
    return this.props.list.map((link, key) => {
      return (
        <AppNavItem
          key = {key}
          link = {link.link}
          name = {link.name}
        />
      );
    });
  }
  render() {
    const {name} = this.props;
    return (
      <div className = "app-drawer-group">
        <a
          className="mdl-navigation__link"
          href = ""
        >
          {name} <i className="material-icons app-drawer-group-arrow">{'keyboard_arrow_down'}</i>
        </a>
        <div className="app-drawer-group-inner">
          {this.renderGroup()}
        </div>
      </div>
    );
  }
}

AppDrawerGroup.propTypes = {
  id: React.PropTypes.string,
  list: React.PropTypes.arrayOf(React.PropTypes.shape({
    link: React.PropTypes.string,
    name: React.PropTypes.string
  })),
  name: React.PropTypes.string
};

AppDrawerGroup.defaultProps = {
  id: 'dropdown-a',
  list: [
    {
      link: '',
      name: 'Link 1A'
    },
    {
      link: '',
      name: 'Link 2A'
    },
    {
      link: '',
      name: 'Link 3A'
    },
  ],
  name: 'Dropdown A'
};

export default AppDrawerGroup;
