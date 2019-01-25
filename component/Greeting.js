import React, { Component } from 'react';
import { StyleSheet, AppRegistry, Text } from 'react-native';

export default class Greeting extends Component {
    render() {
      return (
          <Text style={styles.greeting}>Hello {this.props.name}!</Text>
      );
    }
}

const styles = StyleSheet.create({

    greeting: {
      color: '#ffffff'
    }
    
  });