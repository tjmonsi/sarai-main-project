import React from 'react';
import '/node_modules/material-design-lite/material';
import { default as AppNavItem } from '/lib/client/patterns/atoms/app-nav-item/app-nav-item.jsx';
import { default as AppDrawerGroup } from '/lib/client/patterns/atoms/app-drawer-group/app-drawer-group.jsx';

class AppDrawerNav extends React.Component {
  componentDidMount() {
    componentHandler.upgradeDom();
  }
  componentDidUpdate() {
    componentHandler.upgradeDom();
  }
  renderLinks() {
    return this.props.linkList.map((link, key) => {
      return (
        <AppNavItem
          key = {key}
          link = {link.link}
          name = {link.name}
        />
      );
    });
  }
  renderGroup() {
    return this.props.dropdownList.map((dropdown, key) => {
      return (
        <AppDrawerGroup
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
      <div className="mdl-navigation">
        {this.renderLinks()}
        {this.renderGroup()}
      </div>
    );
  }
}

AppDrawerNav.propTypes = {
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

AppDrawerNav.defaultProps = {
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

export default AppDrawerNav;
