import React, { Component } from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { CoachmarkArrowProps, CoachmarkPosition } from '../types';

export default class CoachmarkArrow extends Component<CoachmarkArrowProps> {
  static defaultProps: Pick<CoachmarkArrowProps, 'position'> = {
    position: CoachmarkPosition.TOP,
  };

  getStyles = (): ViewStyle => {
    if (this.props.position == CoachmarkPosition.TOP) {
      return { borderBottomColor: '#FFF', borderBottomWidth: 10, marginTop: 12 };
    }
    if (this.props.position == CoachmarkPosition.BOTTOM) {
      return { borderTopColor: '#FFF', borderTopWidth: 10, marginBottom: 12 };
    }
    return {};
  };

  render() {
    return <View style={[styles.arrow, this.getStyles(), { marginLeft: this.props.x - 10 }]} />;
  }
}

const styles = StyleSheet.create({
  arrow: {
    width: 0,
    height: 0,
    borderRightWidth: 10,
    borderLeftWidth: 10,
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
    borderLeftColor: 'transparent',
  },
});
