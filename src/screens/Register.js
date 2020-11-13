import React from 'react';
import {Text, View, Image} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/dist/AntDesign';

export default class Register extends React.Component {
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
          <TextInput placeholder="Email" style={{paddingHorizontal: 10}} />
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
          <TextInput
            secureTextEntry
            placeholder="Password"
            style={{paddingHorizontal: 10}}
          />
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
          <TextInput
            secureTextEntry
            placeholder="Confirm Password"
            style={{paddingHorizontal: 10}}
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
            Register
          </Text>
        </View>
        <Text
          onPress={() => navigate('Login')}
          style={{
            alignSelf: 'center',
            color: '#00716F',
            fontFamily: 'Montserrat-SemiBold',
            paddingVertical: 30,
          }}>
          Already a member
        </Text>
      </View>
    );
  }
}
