import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { interpolate, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import Animated from 'react-native-reanimated';

type TabBarType = {
    onPress: Function,
    onLongPress: Function,
    isFocused: boolean,
    routeName: string,
    color: string,
    label: any
}

export const TabBarButton = ({ onPress, onLongPress, isFocused, routeName, color, label }: TabBarType) => {

    const icon = {
        Home: (props: any) => <Ionicons name={'home'} size={24} {...props} />,
        Library: (props: any) => <FontAwesome name={'book'} size={24} {...props} />,
        Favorite: (props: any) => <Ionicons name={'bookmark'} size={24} {...props} />,
        Other: (props: any) => <Ionicons name={'ellipsis-horizontal'} size={24} {...props} />,
    }
    const scale = useSharedValue(0)

    useEffect(() => {
        scale.value = withSpring(typeof isFocused === 'boolean' ? (isFocused ? 1 : 0) : isFocused, { duration: 350 })
    }, [scale, isFocused])

    const animatedIconStyle = useAnimatedStyle(() => {
        const scaleValue = interpolate(scale.value, [0, 1], [1, 1.3])
        const top = interpolate(scale.value, [0, 1], [0,9])

        return {
            transform: [{
                scale: scaleValue
            }],
            top:top
        }
    });

    const animatedTextStyle = useAnimatedStyle(() => {
        const opacity = interpolate(scale.value, [0, 1], [1, 0])

        return {
            opacity
        }
    });

    return (
        <Pressable
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabbarItem}
        >
            <Animated.View style={animatedIconStyle}>
                {icon[routeName]({
                    color: isFocused ? '#673ab7' : '#222'
                })}
            </Animated.View>
            <Animated.Text style={[{ color: isFocused ? '#673ab7' : '#222',fontSize:12 }, animatedTextStyle]}>
                {label}
            </Animated.Text>
        </Pressable>
    )
}

export default TabBarButton

const styles = StyleSheet.create({
    tabbarItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5
    }
})