import React from 'react';
import { default as AppnavMolecule } from './../appnav/appnav-o.jsx';

export default class AppheaderOrganism extends React.Component {
  render() {
    return (
      <header className="mdl-layout__header">
        <div className="mdl-layout__header-row">
          <span className="mdl-layout-title">
            {'Title'}
          </span>
          <div className="mdl-layout-spacer"></div>
          <AppnavMolecule />
        </div>
      </header>
    );
  }
}
