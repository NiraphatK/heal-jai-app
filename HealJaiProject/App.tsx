import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, useIsFocused } from '@react-navigation/native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';
import Animated, { useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';

import HomeScreen from './components/HomeScreen';
import LibraryScreen from './components/LibraryScreen';
import FavoriteScreen from './components/FavoriteScreen';
import OtherScreen from './components/OtherScreen';
import {MyTabBar} from './components/BottomTabs/MyTabBar';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
        <Tab.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
        <Tab.Screen name="Library" component={LibraryScreen} options={{headerShown:false}}/>
        <Tab.Screen name="Favorite" component={FavoriteScreen} options={{headerShown:false}}/>
        <Tab.Screen name="Other" component={OtherScreen} options={{headerShown:false}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
