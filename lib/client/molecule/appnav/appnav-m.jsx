import React from 'react';
import '/node_modules/material-design-lite/material';
import { default as AppnavlinkAtom } from '/lib/client/atom/appnavlink/appnavlink-a.jsx';

export default class AppnavMolecule extends React.Component {
  componentDidMount() {
    componentHandler.upgradeDom();
  }
  componentDidUpdate() {
    componentHandler.upgradeDom();
  }
  render() {
    return (
      <nav className="mdl-navigation mdl-layout--large-screen-only">
        <AppnavlinkAtom
          href="test.html"
          name="Test"
        />
      </nav>
    );
  }
}
