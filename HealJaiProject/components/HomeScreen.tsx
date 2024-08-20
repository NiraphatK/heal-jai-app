import { StyleSheet, Text, View, Image, ScrollView, ActivityIndicator, TouchableOpacity,FlatList } from 'react-native'
import React from 'react'
import styles from '../style/styles'
import { useFonts } from 'expo-font';
import Icon from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';

const HomeScreen = ():React.JSX.Element => {
    const [loaded] = useFonts({
        'Prompt-Regular': require('../assets/fonts/Prompt-Regular.ttf'),
        'Prompt-Bold': require('../assets/fonts/Prompt-Bold.ttf'),
        'Prompt-BoldItalic': require('../assets/fonts/Prompt-BoldItalic.ttf'),
        'Prompt-Light': require('../assets/fonts/Prompt-Light.ttf'),
    });

    if (!loaded) {
        return <ActivityIndicator />;
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require('../assets/images/logo.png')} style={styles.imageLogo} />
            </View>
            <View style={styles.body}>
                <ScrollView>
                    <View style={{ flex: 1, alignItems: 'center', paddingBottom: 120 }}>
                        <View style={{ width: '90%' }}>
                            <View style={styles.CardExam}>
                                <Image source={require('../assets/images/night_sky.png')} style={styles.examBackground} />
                                <View style={styles.insideImg}>
                                    <Text style={{ fontFamily: 'Prompt-Regular', fontSize: 55, color: '#fff' }}>แบบทดสอบ</Text>
                                    <Text style={{ fontFamily: 'Prompt-Regular', color: '#fff' }}>ทำแบบทดสอบเพื่อค้นหาบุคลิกภาพของคุณ!!</Text>
                                    <TouchableOpacity style={styles.buttonExam}>
                                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                            <Text style={{ fontFamily: 'Prompt-Regular' }}>เริ่มทำแบบทดสอบ</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={[styles.CardMBTI, styles.MaginTop]}>
                                <View style={{ flex: 3 }}>
                                    <Text style={{ fontFamily: 'Prompt-Bold', fontSize: 25 }}>MBTI ทั้ง 16 แบบ</Text>
                                    <Text style={{ fontFamily: 'Prompt-Light', fontSize: 14.2, marginTop: 10 }}>
                                        MBTI หรือ Myers-Briggs Type Indicator คือ แบบทดสอบประเภทบุคลิกภาพที่ช่วยให้เราทำความ
                                        เข้าใจถึงความแตกต่างระหว่างบุคคล แบบทดสอบนี้ถูกพัฒนาขึ้นโดย Katharine C. Briggs และ Isabel Briggs Myers ซึ่งต่อยอดมาจากทฤษฎีของนักจิตวิทยาที่ชื่อ Carl Jung
                                    </Text>
                                </View>
                                <TouchableOpacity style={styles.buttonInfo}>
                                    <Ionicons name='person' size={20} color={'#A095C1'} />
                                    <Text style={{ fontFamily: 'Prompt-Regular', fontSize: 16, marginLeft: 5, color: '#A095C1' }}>ดูข้อมูล</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={[styles.CardFeature, styles.MaginTop]}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Image source={require('../assets/images/real_mask2.png')} style={styles.maskSize} />
                                    <Text style={{ fontWeight: 'bold', fontSize: 15, marginLeft: 7, }}>Favorited</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    {/* <FlatList
                                    
                                    /> */}
                                    <View style={[styles.showFav]}>
                                        <Image source={require('../assets/images/real_mask.png')} style={[styles.maskSize, styles.positionRT]} />
                                        <View>
                                            <Text style={{ fontFamily: 'Prompt-Regular', fontSize: 15, color: '#432C81' }}>Today</Text>
                                            <Text style={{ fontFamily: 'Prompt-Regular', fontSize: 13, color: '#A095C1', marginTop: 5 }}>Lorem ipsum dolor sit amet.</Text>
                                        </View>
                                    </View>
                                    <View style={[styles.showFav]}>
                                        <Image source={require('../assets/images/real_mask.png')} style={[styles.maskSize, styles.positionRT]} />
                                        <View>
                                            <Text style={{ fontFamily: 'Prompt-Regular', fontSize: 15, color: '#432C81' }}>Today</Text>
                                            <Text style={{ fontFamily: 'Prompt-Regular', fontSize: 13, color: '#A095C1', marginTop: 5 }}>Lorem ipsum dolor sit amet.</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

export default HomeScreen