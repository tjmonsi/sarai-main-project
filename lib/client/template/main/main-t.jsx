import React from 'react';
import { default as AppheaderOrganism } from './../../organism/appheader/appheader-o.jsx';

export default class MainTemplate extends React.Component {
  render() {
    return (
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <AppheaderOrganism />
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
