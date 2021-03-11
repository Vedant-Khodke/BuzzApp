import React from 'react';
import { Text, View } from 'react-native';

export default class instagram extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style = {{fontSize: 20, fontStyle: 'italic'}}>Connect with ur insta friends</Text>
        </View>
      );
    }
  }