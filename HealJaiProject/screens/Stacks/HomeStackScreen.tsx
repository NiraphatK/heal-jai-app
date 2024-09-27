import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import HomeScreen from '../HomeScreen/HomeScreen'
import QuestionScreen from '../HomeScreen/QuestionScreen'
import ShowMBTIScreen from '../HomeScreen/ShowMBTIScreen'
import { MyTabBar } from '../../components/BottomTabs/MyTabBar'
import DetailScreen from '../DetailScreen/DetailScreen'
import ResultScreen from '../HomeScreen/ResultScreen'


const Stack = createStackNavigator()

const HomeStackScreen = () => {
  return (
    <Stack.Navigator initialRouteName='ResultScreen' screenOptions={{headerShown:false}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="QuestionScreen" component={QuestionScreen} />
      <Stack.Screen name="ShowMBTIScreen" component={ShowMBTIScreen} />
      <Stack.Screen name="ResultScreen" component={ResultScreen} />
    </Stack.Navigator>

  )
}

export default HomeStackScreen