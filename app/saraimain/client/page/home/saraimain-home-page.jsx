import React from 'react';
import '/node_modules/material-design-lite/material';
import { default as Landing1Template } from '/lib/client/template/landing1/landing1-t.jsx';

export default class SaraimainHomePage extends React.Component {
  componentDidMount() {
    componentHandler.upgradeDom();
  }
  componentDidUpdate() {
    componentHandler.upgradeDom();
  }
  render() {
    return (
      <div className="saraimain-home-page">
        <Landing1Template />
      </div>
    );
  }
}
