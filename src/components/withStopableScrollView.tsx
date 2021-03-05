import React from 'react';
import { ScrollView, ScrollViewProps } from 'react-native';
import hoistNonReactStatics from 'hoist-non-react-statics';

export interface StopableScrollViewProps {
  onScroll?: ScrollViewProps['onScroll'];
  scrollEventThrottle: number;
  scrollViewRef: React.RefObject<{
    scrollTo?: ScrollView['scrollTo'];
  }>;
}
export default function <C extends React.ComponentType<React.ComponentProps<C> & StopableScrollViewProps>>(
  WrappedComponent: C
) {
  const StopableScroll = class extends React.Component<C & StopableScrollViewProps> {
    static defaultProps: Pick<StopableScrollViewProps, 'onScroll'> = {
      onScroll: () => {}, // eslint-disable-line no-empty-function
    };

    yOffset: number = 0;
    scrollView = React.createRef<ScrollView>();

    stop = () => {
      (this.props.scrollViewRef || this.scrollView).current!.scrollTo!({ x: 0, y: this.yOffset, animated: false });
    };

    _handleOnScroll: ScrollViewProps['onScroll'] = (e) => {
      this.yOffset = e.nativeEvent.contentOffset.y;
      this.props.onScroll!(e);
    };

    render() {
      return (
        <WrappedComponent
          {...(this.props as any)}
          ref={this.props.scrollViewRef || this.scrollView}
          onScroll={this._handleOnScroll}
          scrollEventThrottle={16}
        />
      );
    }
  };
  return hoistNonReactStatics(StopableScroll, WrappedComponent);
}
