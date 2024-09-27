import { View, Text, Image, StyleSheet, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { findMbtiByName, findUserById } from '../../services/product-service';
import { useFonts } from 'expo-font';

const imageMap: { [key: string]: any } = {
    'intj': require('../../assets/images/char_images/intj.png'),
    'entj': require('../../assets/images/char_images/entj.png'),
    'infj': require('../../assets/images/char_images/infj.png'),
    'enfj': require('../../assets/images/char_images/enfj.png'),
    'esfj': require('../../assets/images/char_images/esfj.png'),
    'esfp': require('../../assets/images/char_images/esfp.png'),
    'estj': require('../../assets/images/char_images/estj.png'),
    'estp': require('../../assets/images/char_images/estp.png'),
    'enfp': require('../../assets/images/char_images/enfp.png'),
    'entp': require('../../assets/images/char_images/entp.png'),
    'isfj': require('../../assets/images/char_images/isfj.png'),
    'istj': require('../../assets/images/char_images/istj.png'),
    'isfp': require('../../assets/images/char_images/isfp.png'),
    'istp': require('../../assets/images/char_images/istp.png'),
    'infp': require('../../assets/images/char_images/infp.png'),
    'intp': require('../../assets/images/char_images/intp.png'),
};

const ResultScreen = () => {
    const route = useRoute<any>();
    const navigation = useNavigation<any>();
    const [userData, setUserData] = useState<any>([]);
    const [mbtiData, setMbtiData] = useState<any>([]);


    const [loaded] = useFonts({
        "Prompt-Regular": require("../../assets/fonts/Prompt-Regular.ttf"),
        "Prompt-Bold": require("../../assets/fonts/Prompt-Bold.ttf"),
        "Prompt-BoldItalic": require("../../assets/fonts/Prompt-BoldItalic.ttf"),
        "Prompt-Light": require("../../assets/fonts/Prompt-Light.ttf"),
    });

    useEffect(() => {
        const getUser = async () => {
            try {
                const res = await findUserById('9f158f6b-b32d-4388-9538-46dc02c46c6c');
                setUserData(res.data);
            } catch (error) {
                console.log(error);
            }
        };

        getUser();
    }, []);

    const mbtiType = userData?.mbti_type ? userData.mbti_type.toLowerCase() : null;

    useEffect(() => {
        const getMbti = async () => {
            try {
                const res = await findMbtiByName(mbtiType)
                setMbtiData(res.data)
            } catch (error) {
                console.log(error);
            }
        }

        getMbti()
    }, [userData])

    if (!loaded || !userData) {
        return <ActivityIndicator />;
    }

    return (
        <View style={{ flex: 1 }}>
            <Image source={require('./purpleHeader.png')} resizeMode="contain" style={styles.imageHeader} />
            <View style={styles.showMbti}>
                <View style={{ flex: 1 }}>
                    <Image source={imageMap[mbtiType]} resizeMode="contain" style={styles.mbtiImage} />
                </View>
                <View style={{ flex: 2, marginLeft: 50 }}>
                    <Text>{userData?.mbti_type}</Text>
                    <Text>{userData?.mbti_type}</Text>
                </View>
            </View>
            <View>

            </View>
        </View>
    );
};

export default ResultScreen;

const styles = StyleSheet.create({
    imageHeader: {
        position: "absolute",
        width: "100%",
        top: -75,
    },
    mbtiImage: {
        width: 190,
        height: 190
    },
    showMbti: {
        flexDirection: 'row',
        marginTop: 110,
        width: "100%",
        height: 200,
        backgroundColor: 'aqua',
        alignItems: 'center'
    }
});
