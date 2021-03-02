import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { CoachmarkContentProps } from '../types';

export default class CoachmarkContent extends Component<CoachmarkContentProps> {
  static defaultProps: Pick<CoachmarkContentProps, 'buttonText'> = {
    buttonText: 'OK'
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.message}>
          <Text style={styles.messageText}>{this.props.message}</Text>
        </View>
        <View style={styles.button}>
          <Text style={styles.buttonText}>{this.props.buttonText}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 6,
    marginHorizontal: 16,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    overflow: 'hidden',
  },
  message: {
    paddingHorizontal: 8,
    paddingVertical: 16,
    flex: 1,
  },
  messageText: {
    fontSize: 14,
    lineHeight: 22,
    letterSpacing: -0.15,
  },
  button: {
    width: 48,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(246,246,246)',
  },
  buttonText: {
    fontSize: 14,
    lineHeight: 22,
    color: 'rgb(7, 112, 205)',
    fontWeight: 'bold',
  },
});
