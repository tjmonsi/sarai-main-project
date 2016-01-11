import React from 'react';
import '/node_modules/material-design-lite/material';
import { default as AppheaderOrganism } from '/lib/client/organism/appheader/appheader-o.jsx';
import { default as AppdrawerOrganism } from '/lib/client/organism/appdrawer/appdrawer-o.jsx';

export default class MainTemplate extends React.Component {
  componentDidMount() {
    componentHandler.upgradeDom();
  }
  componentDidUpdate() {
    componentHandler.upgradeDom();
  }
  render() {
    return (
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <AppheaderOrganism />
        <AppdrawerOrganism />
        <main className="mdl-layout__content">
          <div className="page-content">
            {this.props.content}
          </div>
        </main>
      </div>
    );
  }
}

MainTemplate.propTypes = {
  content: React.PropTypes.element.isRequired
};
