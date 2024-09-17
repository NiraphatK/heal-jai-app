import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import LibraryScreen from '../LibraryScreen/LibraryScreen'
import DetailScreen from '../DetailScreen/DetailScreen'

const Stack = createStackNavigator()

const LibraryStackScreen = () => {
  return (
    <Stack.Navigator initialRouteName='LibraryScreen' screenOptions={{headerShown:false}}>
      <Stack.Screen name="LibraryScreen" component={LibraryScreen} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
    </Stack.Navigator>

  )
}

export default LibraryStackScreen