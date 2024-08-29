import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import LibraryScreen from './LibraryScreen/LibraryScreen'

const Stack = createStackNavigator()

const LibraryStackScreen = () => {
  return (
    <Stack.Navigator initialRouteName='LibraryScreen' screenOptions={{headerShown:false}}>
      <Stack.Screen name="LibraryScreen" component={LibraryScreen} />
    </Stack.Navigator>
  )
}

export default LibraryStackScreen