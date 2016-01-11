import React from 'react';
import '/node_modules/material-design-lite/material';
import { default as AppnavMolecule } from '/lib/client/molecule/appnav/appnav-m.jsx';
import { default as ApptitleMolecule } from '/lib/client/molecule/apptitle/apptitle-m.jsx';

export default class AppdrawerOrganism extends React.Component {
  componentDidMount() {
    componentHandler.upgradeDom();
  }
  componentDidUpdate() {
    componentHandler.upgradeDom();
  }
  render() {
    return (
      <div className='mdl-layout__drawer'>
        <ApptitleMolecule />
        <AppnavMolecule />
      </div>
    );
  }
}
