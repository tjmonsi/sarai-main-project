import React from 'react';
import '/node_modules/material-design-lite/material';

class OnePageView extends React.Component {
  componentDidMount() {
    componentHandler.upgradeDom();
  }
  componentDidUpdate() {
    componentHandler.upgradeDom();
  }
  render() {
    const { content } = this.props;
    return (
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        {content()}
      </div>
    );
  }
}

OnePageView.propTypes = {
  content: React.PropTypes.func
};

OnePageView.defaultProps = {
  content: () => null
};

export default OnePageView;
