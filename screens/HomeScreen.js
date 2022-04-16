import {
  Alert,
  Button,
  KeyboardAvoidingView,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { auth } from '../firebase'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {
  const navigation = useNavigation()
  const handleLogout = () => {
    Alert.alert('Warning!', 'Are you sure to log out?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'Yes',
        onPress: () => auth.signOut()
        .then(()=>navigation.replace('Login'))
        .catch(error => {
            Alert.alert('Fail to logout', error.message)
            console.log(error.message);
        }),
        style: 'default',
      },
    ])
    auth.signOut()
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.box1}>
        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>
          I see you're here!
        </Text>
        <Text>{auth.currentUser?.email}</Text>
      </View>

      <View style={{ flex: 0.2 }} />

      <KeyboardAvoidingView
        behavior='padding'
        style={[styles.box2, styles.shadowProp]}>
        <Text style={[styles.shadowProp, styles.loginText]}>
          Please login first :)
        </Text>
        <View style={styles.buttonGroup}>
          <Button
            title='Logout'
            color={'white'}
            style={styles.shadowProp}
            onPress={handleLogout}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  box1: {
    flex: 0.5,
    backgroundColor: 'white',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  box2: {
    flex: 9,
    backgroundColor: 'red',
    width: '90%',
    height: '45%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    paddingVertical: 45,
    paddingHorizontal: 25,
    marginTop: 10,
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  input: {
    width: '80%',
    height: '6%',
    backgroundColor: 'white',
    borderWidth: 0,
    borderRadius: 15,
    marginVertical: 10,
    textAlign: 'left',
    paddingLeft: 10,
  },
  loginText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
  },
  buttonGroup: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
})
