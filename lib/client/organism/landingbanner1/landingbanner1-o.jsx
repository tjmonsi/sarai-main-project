import React from 'react';
import '/node_modules/material-design-lite/material';
import { default as SaraiTextBannerMolecule } from '/lib/client/molecule/sarai-text-banner/sarai-text-banner-m.jsx';

export default class Landingbanner1Organism extends React.Component {
  componentDidMount() {
    componentHandler.upgradeDom();
  }
  componentDidUpdate() {
    componentHandler.upgradeDom();
  }
  render() {
    return (
      <div
        className="mdl-cell mdl-cell--12-col landing-banner1"
      >
        <div className="mdl-grid">
          <div className="mdl-cell mdl-cell--6-col">
            <SaraiTextBannerMolecule />
          </div>

          <div className="mdl-cell mdl-cell--6-col">
            
          </div>
        </div>
      </div>
    );
  }
}
