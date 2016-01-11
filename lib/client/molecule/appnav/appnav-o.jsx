import React from 'react';
import { default as AppnavlinkAtom } from './../../atom/appnavlink/appnavlink-a.jsx';

export default class AppnavMolecule extends React.Component {
  render() {
    return (
      <nav className="mdl-navigation mdl-layout--large-screen-only">
        <AppnavlinkAtom />
        <a className="mdl-navigation__link" href="">{'Link'}</a>
      </nav>
    );
  }
}
