import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AppNavigator from './src/navigation/Navigator';
// import * as Font from 'expo-font';

export default class App extends React.Component {
  // state = {
  //   isFontLoaded: false,
  // };

  // async componentDidMount() {
  //   await Font.loadAsync({
  //     SemiBold: require('./src/fonts/Montserrat-SemiBold.otf'),
  //     Medium: require('./src/fonts/Montserrat-Medium.otf'),
  //     Regular: require('./src/fonts/Montserrat-Regular.otf'),
  //   }),
  //     this.setState({isFontLoaded: true});
  // }

  render() {
    return <AppNavigator />;
  }
}
