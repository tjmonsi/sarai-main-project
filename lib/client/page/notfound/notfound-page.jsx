import React from 'react';
import '/node_modules/material-design-lite/material';

export default class NotfoundPage extends React.Component {
  componentDidMount() {
    componentHandler.upgradeDom();
  }
  componentDidUpdate() {
    componentHandler.upgradeDom();
  }
  render() {
    return (
      <div className="">
        {'Not Found'}
      </div>
    );
  }
}
