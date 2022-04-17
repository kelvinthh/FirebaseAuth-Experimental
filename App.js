import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import registerNNPushToken from 'native-notify';

import LoginScreen from './screens/LoginScreen'
import HomeScreen from './screens/HomeScreen'
import { NN_APP_ID, NN_APP_TOKEN } from './config';

const Stack = createNativeStackNavigator()

export default function App() {
  registerNNPushToken(NN_APP_ID, NN_APP_TOKEN);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Login'
          options={{ headerShown: false }}
          component={LoginScreen}
        />
        <Stack.Screen
          name='Home'
          options={{ headerShown: false }}
          component={HomeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
