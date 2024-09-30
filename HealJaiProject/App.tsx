import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, useIsFocused } from '@react-navigation/native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';
import Animated, { useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';

import HomeScreen from './screens/HomeScreen/HomeScreen';
import LibraryStackScreen from './screens/Stacks/LibraryStackScreen';
import FavoriteScreen from './screens/FavoriteScreen/FavoriteScreen';
import OtherScreen from './screens/OtherScreen/OtherScreen';
import {MyTabBar} from './components/BottomTabs/MyTabBar';
import HomeStackScreen from './screens/Stacks/HomeStackScreen';
import OtherStackScreen from './screens/Stacks/OtherStackScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={props => <MyTabBar {...props} />} screenOptions={{headerShown:false}}>
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Library" component={LibraryStackScreen} />
        <Tab.Screen name="Favorite" component={FavoriteScreen} />
        <Tab.Screen name="Other" component={OtherStackScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
