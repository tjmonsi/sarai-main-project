import React from 'react';
import '/node_modules/material-design-lite/material';

class AppBarDropdown extends React.Component {
  componentDidMount() {
    componentHandler.upgradeDom();
  }
  componentDidUpdate() {
    componentHandler.upgradeDom();
  }
  renderDropdown() {
    return this.props.list.map((link, key) => {
      return (
        <li
          className ="mdl-menu__item"
          key = {key}
        >
          <a
            className = "app-bar-dropdown-link"
            href = {link.link}
          >
            {link.name}
          </a>
        </li>
      );
    });
  }
  render() {
    const {id, name} = this.props;
    return (
      <div className = "app-bar-dropdown">
        <a
          className="mdl-navigation__link"
          href = ""
          id={id}
        >
          {name}
        </a>
        <ul
          className = "mdl-menu mdl-js-menu mdl-js-ripple-effect"
          htmlFor = {id}
        >
          {this.renderDropdown()}
        </ul>
      </div>
    );
  }
}

AppBarDropdown.propTypes = {
  id: React.PropTypes.string,
  list: React.PropTypes.arrayOf(React.PropTypes.shape({
    link: React.PropTypes.string,
    name: React.PropTypes.string
  })),
  name: React.PropTypes.string
};

AppBarDropdown.defaultProps = {
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

export default AppBarDropdown;
