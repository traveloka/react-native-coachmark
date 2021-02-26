import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

export const K_POSITION_TOP = 'top';
export const K_POSITION_BOTTOM = 'bottom';

export default class CoachmarkArrow extends Component {
  static propTypes = {
    position: PropTypes.oneOf([K_POSITION_TOP, K_POSITION_BOTTOM]),
  };

  static defaultProps = {
    position: K_POSITION_TOP,
  };

  render() {
    const styles = getStyles(this.props.position);
    return <View style={[styles.arrow, { marginLeft: this.props.x - 10 }]} />;
  }
}

const getStyles = position =>
  StyleSheet.create({
    arrow: {
      width: 0,
      height: 0,
      borderRightWidth: 10,
      borderLeftWidth: 10,
      borderTopColor: 'transparent',
      borderRightColor: 'transparent',
      borderLeftColor: 'transparent',
      ...(position === K_POSITION_TOP
        ? { borderBottomColor: '#FFF', borderBottomWidth: 10 }
        : { borderTopColor: '#FFF', borderTopWidth: 10 }),
      ...(position === K_POSITION_TOP ? { marginTop: 12 } : { marginBottom: 12 }),
    },
  });
