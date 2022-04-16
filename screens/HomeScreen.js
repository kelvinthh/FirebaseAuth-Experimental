import {
  Alert,
  Button,
  StyleSheet,
  Text,
  Image,
  View,
} from 'react-native'
import React from 'react'
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
        onPress: () =>
          auth
            .signOut()
            .then(() => navigation.replace('Login'))
            .catch((error) => {
              Alert.alert('Fail to logout', error.message)
              console.log(error.message)
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

      <View behavior='padding' style={[styles.box2, styles.shadowProp]}>
        <Image style={[styles.donut,styles.shadowProp]} source={require('../assets/donut.png')} />
        <Text style={[styles.shadowProp, styles.centerText]}>
          We have no idea who ate the donut :(
        </Text>
        <View style={styles.buttonGroup}>
          <Button
            title='Logout'
            color={'white'}
            style={styles.shadowProp}
            onPress={handleLogout}
          />
        </View>
      </View>
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
  centerText: {
    fontWeight: 'bold',
    fontSize: 17,
    color: 'white',
  },
  buttonGroup: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  donut: {
      width: 200,
      height: 200
  },
})
