import {
  Text,
  View,
  Image,
  ImageBackground,
  ActivityIndicator,
  TouchableOpacity
} from "react-native";
import React, { useEffect,useState } from "react";
import styles from "./styles";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useFonts } from "expo-font";
import {
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { findBookByName } from "../../services/product-service";

type bookType = {
  title: string,
  type: string,
  author: string,
  cover: string,
  synopsis: string,
}


const DetailScreen = (): React.JSX.Element => {
  const route = useRoute<any>();
  const navigation = useNavigation<any>();
  const [bookData, setBookData] = useState<bookType>()

  const { data } = route.params;

  const [loaded] = useFonts({
    "Prompt-Regular": require("../../assets/fonts/Prompt-Regular.ttf"),
    "Prompt-Bold": require("../../assets/fonts/Prompt-Bold.ttf"),
    "Prompt-BoldItalic": require("../../assets/fonts/Prompt-BoldItalic.ttf"),
    "Prompt-Light": require("../../assets/fonts/Prompt-Light.ttf"),
  });

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await findBookByName(data)
        setBookData(res.data)
      } catch (error: any) {
        console.log(error.message);
      }
    }

    getBook()
  }, [navigation])

  if (!loaded) {
    return <ActivityIndicator />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <ImageBackground
          source={require("./cover.jpg")}
          style={styles.backgroundImage}
          blurRadius={7}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons
              name="chevron-back-outline"
              size={40}
              color="black"
              style={{ marginTop: 30, marginStart: 10 }}
            />
          </TouchableOpacity>
          <View style={[styles.container, { alignItems: "center" }]}>
            <Image
              source={require("./cover.jpg")}
              style={styles.bookCover}
            ></Image>
            <Text style={[styles.name]}>
              Games You Can Play With Your Pussy
            </Text>
            <Text style={styles.author}>Ira Alterman</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Ionicons name="bookmark-outline" size={20} style={{}}>
                {"     "}
              </Ionicons>
              <Ionicons name="heart" size={20} color="#bf2525"></Ionicons>
              <Text style={{ fontSize: 16 }}> 10/10</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
      <View style={[styles.container, { paddingHorizontal: 30 }]}>
        <Text style={{ marginTop: 20, fontFamily: "Prompt-Regular" }}>
          เหมาะกับ
        </Text>
        <View style={{ flexDirection: "row", paddingVertical: 15 }}>
          <View style={styles.MBTI}>
          </View>
          <View style={[styles.MBTI, { marginStart: 15 }]}>
            <Text style={styles.MBTIText}>INFJ</Text>
          </View>
          <View style={[styles.MBTI, { marginStart: 15 }]}>
            <Text style={styles.MBTIText}>ENFJ</Text>
          </View>
        </View>
        <Text style={[styles.detailTitle, { fontFamily: "Prompt-Bold" }]}>
          เนื้อเรื่องโดยย่อ
        </Text>
        <Text style={[styles.detail, { fontFamily: "Prompt-Regular" }]}>
          เนื้อเรื่องส่วนมากจะเกี่ยวกับปัญหาของโนบิตะเด็กชายชั้น ป.4
          ที่มักถูกเพื่อนๆ แกล้ง (แต่บ่อยครั้งก็เป็นฝ่ายหาเรื่องใส่ตัวเอง)
          ไม่ค่อยชอบทำการบ้าน, อ่านหนังสือ และไปโรงเรียนสายบ่อย ๆ
          โดยมีเพื่อนที่เป็นตัวละครสำคัญในเรื่องคือโดราเอมอน
          (โนบิตะทำอะไรไม่ค่อยเป็น ต้องพึ่งโดราเอมอนแทบทุกอย่าง)
          หุ่นยนต์แมวจากอนาคตที่คอยดูแลช่วยเหลือโนบิตะตลอดเวลา
          ด้วยของวิเศษจากอนาคต
        </Text>
      </View>
    </View>
  );
};

export default DetailScreen;
