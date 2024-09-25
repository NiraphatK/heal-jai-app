import { View, Text, TouchableOpacity, StyleSheet, LayoutChangeEvent } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { TabBarButton } from './TabBarButton';
import { useState,useEffect } from 'react';
import Animated, { useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';

var display = ''

export function MyTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
    const [dimensions, setDimensions] = useState({ height: 0, width: 0 });
    const [tabbarDisplay, setTabbarDisplay] = useState<'flex' | 'none'>('flex');

    const buttonWidth = dimensions.width / state.routes.length;

    const onTabbarLayout = (e: LayoutChangeEvent) => {
        setDimensions({
            height: e.nativeEvent.layout.height,
            width: e.nativeEvent.layout.width,
        });
    };

    const tabPositionX = useSharedValue(0);

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: tabPositionX.value }]
        }
    })

    useEffect(() => {
        const currentRoute = state.routes[state.index];
        if (currentRoute.state?.routes[1]?.name === 'QuestionScreen' && state.index === 0) {
            setTabbarDisplay('none');
        } else {
            setTabbarDisplay('flex');
        }
    }, [state]);

    return (
        <View onLayout={onTabbarLayout} style={[styles.tabbar,{ display: tabbarDisplay }]}>
            <View style={{position:'relative',top:-30}}>
                <Animated.View style={[animatedStyle, {
                    position: 'absolute',
                    backgroundColor: '#D7BBFF',
                    borderRadius: 30,
                    marginHorizontal: 12,
                    height: dimensions.height - 15,
                    width: buttonWidth - 25,
                    top:0
                }]} />
            </View>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    tabPositionX.value = withTiming(buttonWidth * index, { duration: 150 })
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name, route.params);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <TabBarButton
                        key={route.name}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        isFocused={isFocused}
                        routeName={route.name}
                        color={isFocused ? '#673ab7' : '#222'}
                        label={label}
                    />
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    tabbar: {
        display: display as 'none' | 'flex',
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginHorizontal: 5,
        paddingVertical: 15
    },
})