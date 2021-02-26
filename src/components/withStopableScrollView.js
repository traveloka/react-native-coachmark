import React from 'react';
import PropTypes from 'prop-types';
import hoistNonReactStatics from 'hoist-non-react-statics';

export default function(WrappedComponent) {
  const StopableScroll = class extends React.Component {
    static propTypes = {
      onScroll: PropTypes.func,
    };

    static defaultProps = {
      onScroll: () => {}, // eslint-disable-line no-empty-function
    };

    constructor(props) {
      super(props);
      this.yOffset = 0;
      this.scrollView = React.createRef();
    }

    stop = () => {
      (this.props.scrollViewRef || this.scrollView).current.scrollTo({ x: 0, y: this.yOffset, animated: false });
    };

    _handleOnScroll = e => {
      this.yOffset = e.nativeEvent.contentOffset.y;
      this.props.onScroll(e);
    };

    render() {
      return (
        <WrappedComponent
          {...this.props}
          ref={this.props.scrollViewRef || this.scrollView}
          onScroll={this._handleOnScroll}
          scrollEventThrottle={16}
        />
      );
    }
  };
  return hoistNonReactStatics(StopableScroll, WrappedComponent);
}
