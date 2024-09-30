import { View, Text, StyleSheet, Image, TouchableOpacity, ActivityIndicator, FlatList } from 'react-native';
import React, { useCallback, useState } from 'react';
import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native';
import { findMbtiByName } from '../../services/product-service';
import { GetMbtiImage } from '../../components/GetImage';
import Ionicons from "@expo/vector-icons/Ionicons";
import { useFonts } from 'expo-font';
import { opacity } from 'react-native-reanimated/lib/typescript/reanimated2/Colors';

type mbtiType = {
    name: string;
    personality: string;
    characteristics: string[];
    strengths: string[];
    weaknesses: string[];
    result: string;
};

const MbtiColor: any = {
    INTJ: '#866098',
    INTP: '#866098',
    ENTJ: '#866098',
    ENTP: '#866098',
    INFJ: '#33a474',
    INFP: '#33a474',
    ENFJ: '#33a474',
    ENFP: '#33a474',
    ISTJ: '#4298b4',
    ISFJ: '#4298b4',
    ESTJ: '#4298b4',
    ESFJ: '#4298b4',
    ISTP: '#e4ae3a',
    ISFP: '#e4ae3a',
    ESTP: '#e4ae3a',
    ESFP: '#e4ae3a',
};

const headerColor: any = {
    '#866098': 'rgba(134,96,152,0.2)',
    '#33a474': 'rgba(51,164,116,0.2)',
    '#4298b4': 'rgba(66, 152, 180,0.2)',
    '#e4ae3a': 'rgba(228, 174, 58,0.2)',
}

const MbtiCharScreen = () => {
    const [mbtiData, setMbtiData] = useState<mbtiType | null>(null);
    const route = useRoute<any>();
    const navigation = useNavigation<any>();
    const mbti_name = route.params.mbti_name;

    const [loaded] = useFonts({
        "Prompt-Regular": require("../../assets/fonts/Prompt-Regular.ttf"),
        "Prompt-Bold": require("../../assets/fonts/Prompt-Bold.ttf"),
        "Prompt-BoldItalic": require("../../assets/fonts/Prompt-BoldItalic.ttf"),
        "Prompt-Light": require("../../assets/fonts/Prompt-Light.ttf"),
    });

    const getMbtiCharacter = async () => {
        try {
            const res = await findMbtiByName(mbti_name);
            setMbtiData(res.data);
        } catch (error) {
            console.log("Error fetching MBTI data: ", error);
        }
    };

    useFocusEffect(
        useCallback(() => {
            getMbtiCharacter();
        }, [])
    );

    if (!loaded) {
        return <ActivityIndicator />;
    }

    // Header component for FlatList
    const renderHeader = () => (
        <View style={styles.topContent}>
            <TouchableOpacity style={styles.goBackButton} onPress={() => navigation.goBack()}>
                <Ionicons
                    name="chevron-back-outline"
                    size={35}
                    color="#71797E"
                    style={{ marginTop: 30, marginStart: 10 }}
                />
            </TouchableOpacity>
            <Image source={GetMbtiImage(mbti_name.toLowerCase())} resizeMode="contain" style={styles.ImageMbti} />
            <View style={[styles.textMbti, { backgroundColor: `${MbtiColor[mbti_name]}` }]}>
                <Text style={{ fontSize: 16, color: 'white' }}>{mbti_name} : </Text>
                <Text style={{ fontFamily: 'Prompt-Regular', fontSize: 16, color: 'white' }}>{mbtiData?.name}</Text>
            </View>
        </View>
    );

    return (
        <FlatList
            data={[]}
            keyExtractor={() => 'dummy'}
            renderItem={() => null} // Dummy render item
            ListHeaderComponent={renderHeader}
            ListFooterComponent={
                <View style={{ flex: 1, alignItems: 'center', marginTop: 30 }}>
                    <View style={styles.bottomContent}>
                        <View style={[{backgroundColor: `${headerColor[MbtiColor[mbti_name]]}`},styles.textHeader,]}>
                            <Text style={{ fontFamily: 'Prompt-Bold', fontSize: 15, }}>
                                บุคคลิกภาพเฉพาะตัว ของ {mbti_name}
                            </Text>
                        </View>
                        <Text style={{ fontFamily: 'Prompt-Regular', fontSize: 13, marginBottom: 20,padding:10  }}>
                            {mbtiData?.personality}
                        </Text>
                        <View style={[{backgroundColor: `${headerColor[MbtiColor[mbti_name]]}`},styles.textHeader,]}>
                            <Text style={{ fontFamily: 'Prompt-Bold', fontSize: 15 }}>
                                ลักษณะเฉพาะตัว
                            </Text>
                        </View>
                        <FlatList
                            data={mbtiData?.characteristics}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item }) => (
                                <Text style={{ fontFamily: 'Prompt-Regular', fontSize: 13,padding:10 }}>
                                    <Text style={{ fontSize: 20 }}>{'\u2022'} </Text> {item}
                                </Text>
                            )}
                            style={{ marginBottom: 20 }}
                        />
                        <View style={[{backgroundColor: `${headerColor[MbtiColor[mbti_name]]}`},styles.textHeader,]}>

                            <Text style={{ fontFamily: 'Prompt-Bold', fontSize: 15 }}>
                                จุดแข็งของ {mbti_name}
                            </Text>
                        </View>
                        <FlatList
                            data={mbtiData?.strengths}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item }) => (
                                <Text style={{ fontFamily: 'Prompt-Regular', fontSize: 13 }}>
                                    <Text style={{ fontSize: 20 }}>{'\u2022'} </Text> {item}
                                </Text>
                            )}
                            style={{ marginBottom: 20,padding:10 }}
                        />
                        <View style={[{backgroundColor: `${headerColor[MbtiColor[mbti_name]]}`},styles.textHeader,]}>

                            <Text style={{ fontFamily: 'Prompt-Bold', fontSize: 15 }}>
                                จุดอ่อนของ {mbti_name}
                            </Text>
                        </View>
                        <FlatList
                            data={mbtiData?.weaknesses}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item }) => (
                                <Text style={{ fontFamily: 'Prompt-Regular', fontSize: 13 }}>
                                    <Text style={{ fontSize: 20 }}>{'\u2022'} </Text> {item}
                                </Text>
                            )}
                            style={{ marginBottom: 20,padding:10 }}
                        />
                        <View style={[{backgroundColor: `${headerColor[MbtiColor[mbti_name]]}`},styles.textHeader,]}>

                            <Text style={{ fontFamily: 'Prompt-Bold', fontSize: 15 }}>
                                สรุป
                            </Text>
                        </View>
                        <Text style={{ fontFamily: 'Prompt-Regular', fontSize: 13,padding:10 }}>{mbtiData?.result}</Text>
                    </View>
                </View>
            }
            contentContainerStyle={{ paddingBottom: 50 }} // Optional padding for bottom
        />
    );
};

export default MbtiCharScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    topContent: {
        flex: 3,
        position: 'relative',
        width: '100%',
        marginTop: 80,
        alignItems: 'center',
    },
    bottomContent: {
        flex: 5,
        width: '85%',
        justifyContent: 'center',
    },
    ImageMbti: {
        width: 160,
        height: 200,
    },
    goBackButton: {
        position: 'absolute',
        top: -20,
        left: 10,
    },
    textMbti: {
        flexDirection: 'row',
        padding: 10,
        paddingHorizontal: 20,
        marginTop: 20,
        borderRadius: 25,
    },
    textHeader: {
        padding: 10,
        borderRadius: 20,
        marginBottom: 8
    }
});
