import React from 'react';
import '/node_modules/material-design-lite/material';
import { default as AppnavMolecule } from '/lib/client/molecule/appnav/appnav-m.jsx';
import { default as ApptitleMolecule } from '/lib/client/molecule/apptitle/apptitle-m.jsx';

export default class AppheaderOrganism extends React.Component {
  componentDidMount() {
    componentHandler.upgradeDom();
  }
  componentDidUpdate() {
    componentHandler.upgradeDom();
  }
  render() {
    return (
      <header className="mdl-layout__header sarai-main-header">
        <div className="mdl-layout__header-row">
          <ApptitleMolecule className='header-nav-title'/>
          <div className="mdl-layout-spacer"></div>
          <AppnavMolecule />
        </div>
      </header>
    );
  }
}
