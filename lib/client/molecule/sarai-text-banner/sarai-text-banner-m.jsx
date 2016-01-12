import React from 'react';
import '/node_modules/material-design-lite/material';

export default class SaraiTextBannerMolecule extends React.Component {
  componentDidMount() {
    componentHandler.upgradeDom();
  }
  componentDidUpdate() {
    componentHandler.upgradeDom();
  }
  render() {
    return (
      <div className="sarai-banner-text mdl-grid">
        <div className="mdl-cell mdl-cell--12-col">
          <h1>
            {'Sarai Beta'}
          </h1>
        </div>
        <div className="mdl-cell mdl-cell--12-col">
          <p>
            {'A paragraph (from the Greek paragraphos, "to write beside" or "written beside") is a self-contained unit of a discourse in writing dealing with a particular point or idea. A paragraph consists of one or more sentences. Though not required by the syntax of any language, paragraphs are usually an expected part of formal writing, used to organize longer prose.'}
          </p>
        </div>
      </div>
    );
  }
}
