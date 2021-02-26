import React, { Component } from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { CoachmarkPosition } from '../types';

export const K_POSITION_TOP = 'top';
export const K_POSITION_BOTTOM = 'bottom';

interface Props {
  position?: CoachmarkPosition,
  x: number
}
export default class CoachmarkArrow extends Component<Props> {
  static defaultProps: Pick<Props, 'position'> = {
    position: K_POSITION_TOP,
  };

  getStyles = (): ViewStyle => {
    if(this.props.position == 'top') {
      return { borderBottomColor: '#FFF', borderBottomWidth: 10, marginTop: 12 };
    }
    if(this.props.position == 'bottom') {
      return { borderTopColor: '#FFF', borderTopWidth: 10, marginBottom: 12 };
    }
    return {};
  }

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
