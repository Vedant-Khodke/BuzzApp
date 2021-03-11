import React from 'react';
import { Text, View } from 'react-native';

export default class facebook extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style = {{fontSize: 20, fontStyle: 'italic'}}>Facebook is here , Connect with ur friends and stuff</Text>
        </View>
      );
    }
  }