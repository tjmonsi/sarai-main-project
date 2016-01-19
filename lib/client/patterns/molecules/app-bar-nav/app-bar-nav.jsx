import React from 'react';
import '/node_modules/material-design-lite/material';

import { default as AppBarDropdown } from '/lib/client/patterns/atoms/app-bar-dropdown/app-bar-dropdown.jsx';
import { default as AppBarNavItem } from '/lib/client/patterns/atoms/app-bar-nav-item/app-bar-nav-item.jsx';

class AppBarNav extends React.Component {
  componentDidMount() {
    componentHandler.upgradeDom();
  }
  componentDidUpdate() {
    componentHandler.upgradeDom();
  }
  renderLinks() {
    return this.props.linkList.map((link, key) => {
      return (
        <AppBarNavItem
          key = {key}
          link = {link.link}
          name = {link.name}
        />
      );
    });
  }
  renderDropdowns() {
    return this.props.dropdownList.map((dropdown, key) => {
      return (
        <AppBarDropdown
          id = {dropdown.id}
          key = {key}
          list = {dropdown.list}
          name = {dropdown.name}
        />
      );
    });
  }
  render() {
    return (
      <nav className="mdl-navigation mdl-layout--large-screen-only">
        {this.renderDropdowns()}
        {this.renderLinks()}
      </nav>
    );
  }
}

AppBarNav.propTypes = {
  dropdownList: React.PropTypes.arrayOf(React.PropTypes.shape({
    id: React.PropTypes.string,
    list: React.PropTypes.arrayOf(React.PropTypes.shape({
      link: React.PropTypes.string,
      name: React.PropTypes.string
    })),
    name: React.PropTypes.string
  })),
  linkList: React.PropTypes.arrayOf(React.PropTypes.shape({
    link: React.PropTypes.string,
    name: React.PropTypes.string
  }))
};

AppBarNav.defaultProps = {
  dropdownList: [
    {
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
    },
    {
      id: 'dropdown-b',
      list: [
        {
          link: '',
          name: 'Link 1B'
        },
        {
          link: '',
          name: 'Link 2B'
        }
      ],
      name: 'Dropdown B'    
    }
  ],
  linkList: [
    {
      link: '',
      name: 'Link 1'
    },
    {
      link: '',
      name: 'Link 2'
    }
  ]
};

export default AppBarNav;
