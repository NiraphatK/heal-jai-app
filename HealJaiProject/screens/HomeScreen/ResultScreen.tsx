import { View, Text, Image, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { findMbtiByName, findUserById } from '../../services/product-service';
import { useFonts } from 'expo-font';
import { GetMbtiImage } from '../../components/GetImage';

interface UserData {
    id: string;
    mbti_type: string;
    score: {
        E: number;
        S: number;
        T: number;
        J: number;
    };
}

interface MbtiData {
    name: string;
    result: string;
}

const ResultScreen = () => {
    const route = useRoute<any>();
    const navigation = useNavigation<any>();
    const [userData, setUserData] = useState<UserData | null>(null);
    const [mbtiData, setMbtiData] = useState<MbtiData | null>(null);
    const [mbtiName, setMbtiName] = useState<string>('');
    const [scores, setScores] = useState<{ E: number; S: number; T: number; J: number }>({ E: 0, S: 0, T: 0, J: 0 });

    const [loaded] = useFonts({
        "Prompt-Regular": require("../../assets/fonts/Prompt-Regular.ttf"),
        "Prompt-Bold": require("../../assets/fonts/Prompt-Bold.ttf"),
        "Prompt-BoldItalic": require("../../assets/fonts/Prompt-BoldItalic.ttf"),
        "Prompt-Light": require("../../assets/fonts/Prompt-Light.ttf"),
    });

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const res = await findUserById("9f158f6b-b32d-4388-9538-46dc02c46c6c");
                setUserData(res.data);
                calculateScore(res.data.score);
                const mbtiType = res.data.mbti_type?.toLowerCase();
                setMbtiName(mbtiType ? mbtiType.toUpperCase() : '');
                await fetchMbtiData(mbtiType);
            } catch (error) {
                console.log(error);
            }
        };

        const calculateScore = (score: any) => {
            const E = (score.E / 30) * 100;
            const S = (score.S / 30) * 100;
            const T = (score.T / 30) * 100;
            const J = (score.J / 30) * 100;
            setScores({ E, S, T, J });
        };

        const fetchMbtiData = async (mbtiType: string) => {
            try {
                const res = await findMbtiByName(mbtiType);
                setMbtiData(res.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchUserData();
    }, []);

    if (!loaded || !userData || !mbtiData) {
        return <ActivityIndicator />;
    }

    const mbtiImageSource = GetMbtiImage(mbtiName.toLowerCase());

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <Image source={require('./purpleHeader.png')} resizeMode="contain" style={styles.imageHeader} />
            <View style={styles.showMbti}>
                <View style={{ flex: 1.5, paddingRight: 20 }}>
                    <Image source={mbtiImageSource} resizeMode="contain" style={styles.mbtiImage} />
                </View>
                <View style={{ flex: 3, marginLeft: 75 }}>
                    <Text style={{ fontFamily: 'Prompt-Bold', fontSize: 18 }}>{mbtiName}</Text>
                    <Text style={{ fontFamily: 'Prompt-Bold', fontSize: 14 }}>{mbtiData?.name}</Text>
                    <Text style={{ fontFamily: 'Prompt-Regular', fontSize: 11, marginTop: 15 }}>{mbtiData?.result}</Text>
                </View>
            </View>
            <View style={styles.showResult}>
                <View style={styles.resultContainer}>
                    <View style={styles.showPercent}>
                        <ResultBar label="ชอบเข้าสังคม" label2="เป็นคนเก็บตัว" score={scores.E} color={'#4298b4'} />
                        <ResultBar label="มีวิสัยทัศน์" label2="อยู่กับความเป็นจริง" score={scores.S} color={'#e4ae3a'} />
                        <ResultBar label="มีเหตุผล" label2="ใช้อารมณ์" score={scores.T} color={'#33a474'} />
                        <ResultBar label="ช่างวางแผน" label2="สำรวจโอกาส" score={scores.J} color={'#866098'} />
                        <ResultBar label="กล้าแสดงออก" label2="ตื่นตัว" score={100 - (scores.E + scores.S + scores.T + scores.J) / 4} color={'#f26366'} />
                    </View>
                    <View style={{ marginTop: 30, flex: 1, width: '100%', }}>
                        <TouchableOpacity style={styles.doneButton} onPress={() => navigation.navigate('HomeScreen')}>
                            <Text style={styles.doneButtonText}>Done</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
};

const ResultBar = ({ label,label2, score, color }: { label: string; label2:string; score: number; color: string }) => (
    <View style={styles.resultBarContainer}>
        <Text style={{ fontFamily: 'Prompt-Regular', fontSize: 15, marginBottom: 6 }}><Text style={{ color: `${color}` }}>{score.toFixed(0)}%</Text> {label}</Text>
        <View style={[styles.resultBar, { width: `100%`, backgroundColor: `${color}`, position: 'relative', borderRadius: 20 }]} >
            <View style={[styles.circlePercent, { left: `${score}%`, backgroundColor: `${color}` }]} />
            <View style={styles.textBottom}>
                <Text style={styles.textBottomStyle}>{label}</Text>
                <Text style={styles.textBottomStyle}>{label2}</Text>
            </View>
        </View>
    </View>
);

export default ResultScreen;

const styles = StyleSheet.create({
    imageHeader: {
        position: "absolute",
        width: "100%",
        top: -75,
        zIndex: 10,
    },
    mbtiImage: {
        width: 190,
        height: 190
    },
    showMbti: {
        flexDirection: 'row',
        marginTop: 50,
        paddingEnd: 15,
        width: "100%",
        height: 300,
        backgroundColor: 'rgba(215, 187, 255, 0.2)',
        alignItems: 'center'
    },
    showResult: {
        width: '100%',
        height: 500,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    resultContainer: {
        flex: 1,
        width: '75%',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 15,
        alignItems: 'center',
    },
    showPercent: {
        flex: 5,
        alignItems: 'center',
        width: '100%'
    },
    resultBarContainer: {
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        marginVertical: 5,
        paddingVertical: 10,
    },
    resultBar: {
        height: 13,
        backgroundColor: 'red',
        borderRadius: 7,
        justifyContent: 'center'
    },
    doneButton: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#65558F', // Green
        borderRadius: 20,
        alignItems: 'center'
    },
    doneButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    circlePercent: {
        position: 'absolute',
        width: 17,
        height: 17,
        borderRadius: 10,
        borderWidth: 4,
        borderColor: 'white'
    },
    textBottom:{
        position:'absolute',
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-between',
        top:13
    },
    textBottomStyle:{
        fontFamily: 'Prompt-Regular',
        color:'#71797E'
    }
});
