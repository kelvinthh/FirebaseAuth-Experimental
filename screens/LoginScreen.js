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

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
       if(user)
       {
           navigation.replace('Home');
       } 
    })
  
    return () => {
      unsubscribe;
    }
  }, [])
  

  const resetInput = () => {
    //setEmail('')
    setPassword('')
  }

  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user
        console.log(user.email)
        Alert.alert('Registration Success!', 'You have registered as ' + email)
        resetInput()
      })
      .catch((error) => {
        Alert.alert('Fail to register', error.message)
        console.log(error, error.message)
      })
  }

  const handleLogin = () =>
  {
      auth
      .signInWithEmailAndPassword(email,password)
      .then(userCredentials => {
        const user = userCredentials.user
        console.log(user.email)
        Alert.alert('Login Success!', 'You have logged in as ' + email)
        resetInput()
      })
      .catch((error) => {
        Alert.alert('Fail to login', error.message)
        console.log(error, error.message)
      })
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.box1}>
        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Welcome Back!</Text>
      </View>

      <View style={{ flex: 0.2 }} />

      <KeyboardAvoidingView
        behavior='padding'
        style={[styles.box2, styles.shadowProp]}>
        <Text style={[styles.shadowProp,styles.loginText]}>Please login first :)</Text>
        <TextInput
          placeholder='Email'
          style={[styles.input, styles.shadowProp]}
          value={email}
          onChangeText={setEmail}
          textContentType='emailAddress'
          keyboardType='email-address'
        />
        <TextInput
          placeholder='Password'
          style={[styles.input, styles.shadowProp]}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          textContentType='password'
          autoCapitalize='none'
        />
        <View style={styles.buttonGroup}>
          <Button
            title='Login'
            color={'white'}
            style={styles.shadowProp}
            onPress={handleLogin}
          />
          <Button
            title='Register'
            color={'white'}
            style={styles.shadowProp}
            onPress={handleSignUp}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default LoginScreen

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
    marginVertical: 10,
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  input: {
    width: '80%',
    height: 40,
    backgroundColor: 'white',
    borderWidth: 0,
    borderRadius: 15,
    marginVertical: 10,
    textAlign: 'left',
    paddingLeft: 10,
  },
  loginText:{
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
