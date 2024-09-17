import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import HomeScreen from '../HomeScreen/HomeScreen'
import QuestionScreen from '../HomeScreen/QuestionScreen'
import ShowMBTIScreen from '../HomeScreen/ShowMBTIScreen'


const Stack = createStackNavigator()

const HomeStackScreen = () => {
  return (
    <Stack.Navigator initialRouteName='HomeScreen' screenOptions={{headerShown:false}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="QuestionScreen" component={QuestionScreen} />
      <Stack.Screen name="ShowMBTIScreen" component={ShowMBTIScreen} />
    </Stack.Navigator>

  )
}

export default HomeStackScreen