import React from 'react';
import '/node_modules/material-design-lite/material';
import { default as Landingbanner1Organism } from '/lib/client/organism/landingbanner1/landingbanner1-o.jsx';

export default class Landing1Template extends React.Component {
  componentDidMount() {
    componentHandler.upgradeDom();
  }
  componentDidUpdate() {
    componentHandler.upgradeDom();
  }
  render() {
    return (
      <div className="mdl-grid mdl-grid--no-spacing landing-1-template">
        <Landingbanner1Organism background="/images/banner.jpg" />
      </div>
    );
  }
}
