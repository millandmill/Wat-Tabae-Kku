//This is an example code for Navigator// 
import React, { Component } from 'react';
//import react in our code. 
import { StyleSheet, View, Text} from 'react-native';
//import all the components we are going to use.

import { WebView } from 'react-native-webview';
 
export default class SecondPage extends Component {
  static navigationOptions = {
    title: 'วัดตะแบกคู่',
    //Sets Header text of Status Bar
  };
  render() {
    return (
      <WebView
        originWhitelist={['*']}
        source={{ uri: 'http://virtualhistoricalpark.finearts.go.th/kamphaengphet/360/wattabaekku.html' }}
      />
    );
  }
}