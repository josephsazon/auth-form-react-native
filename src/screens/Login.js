import React from 'react';
import {Text, View, Image} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/dist/AntDesign';

export default class Login extends React.Component {
  render() {
    const {navigate} = this.props.navigation;

    return (
      <View style={{backgroundColor: '#fff', height: '100%'}}>
        <Image
          source={require('../images/image.jpg')}
          style={{width: '100%', height: '30%'}}
        />
        <Text
          style={{
            fontSize: 30,
            fontFamily: 'Montserrat-SemiBold',
            alignSelf: 'center',
          }}>
          Save the world
        </Text>

        <Text
          style={{
            fontFamily: 'Montserrat-Medium',
            marginHorizontal: 55,
            textAlign: 'center',
            marginTop: 5,
            opacity: 0.4,
          }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisl
          lorem, bibendum eget nisl ut, laoreet sodales massa.
        </Text>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: 55,
            borderWidth: 2,
            marginTop: 50,
            paddingHorizontal: 10,
            borderColor: '#00716F',
            paddingVertical: 2,
            borderRadius: 27,
          }}>
          <Icon name="mail" color="#00716F" size={24} />
          <TextInput style={{paddingHorizontal: 10}} placeholder="Email" />
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: 55,
            borderWidth: 2,
            marginTop: 15,
            paddingHorizontal: 10,
            borderColor: '#00716F',
            paddingVertical: 2,
            borderRadius: 27,
          }}>
          <Icon name="lock" color="#00716F" size={24} />
          <TextInput
            secureTextEntry
            style={{paddingHorizontal: 10}}
            placeholder="Password"
          />
        </View>

        <View
          style={{
            marginHorizontal: 55,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 30,
            backgroundColor: '#00716F',
            paddingVertical: 15,
            borderRadius: 23,
          }}>
          <Text style={{color: 'white', fontFamily: 'Montserrat-SemiBold'}}>
            Login
          </Text>
        </View>
        <Text
          onPress={() => navigate('Register')}
          style={{
            alignSelf: 'center',
            color: '#00716F',
            fontFamily: 'Montserrat-SemiBold',
            paddingVertical: 30,
          }}>
          New User
        </Text>
      </View>
    );
  }
}
