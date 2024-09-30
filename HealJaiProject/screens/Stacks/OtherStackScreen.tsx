import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import OtherScreen from '../OtherScreen/OtherScreen'
import ResultScreen from '../HomeScreen/ResultScreen'
import HelpScreen from '../OtherScreen/HelpScreen'
import ReportScreen from '../OtherScreen/ReportScreen'
import SecurityScreen from '../OtherScreen/SecurityScreen'
import TosScreen from '../OtherScreen/TosScreen'

const Stack = createStackNavigator()

const OtherStackScreen = () => {
  return (
    <Stack.Navigator initialRouteName='OtherScreen' screenOptions={{headerShown:false}}>
      <Stack.Screen name="OtherScreenScreen" component={OtherScreen} />
      <Stack.Screen name="HelpScreen" component={HelpScreen} />
      <Stack.Screen name="ReportScreen" component={ReportScreen} />
      <Stack.Screen name="SecurityScreen" component={SecurityScreen} />
      <Stack.Screen name="TosScreen" component={TosScreen} />
    </Stack.Navigator>
  )
}

export default OtherStackScreen