import {
  Text,
  View,
  Image,
  ImageBackground,
  ActivityIndicator,
  TouchableOpacity
} from "react-native";
import React, { useEffect, useState } from "react";
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
  rating:number
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
          source={{uri:bookData?.cover}}
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
              source={{uri:bookData?.cover}}
              style={styles.bookCover}
            ></Image>
            <Text style={[styles.name]}>
              {bookData?.title}
            </Text>
            <Text style={styles.author}>{bookData?.author}</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Ionicons name="bookmark-outline" size={20} style={{}}>
                {"     "}
              </Ionicons>
              <Ionicons name="heart" size={20} color="#bf2525"></Ionicons>
              <Text style={{ fontSize: 16 }}> {bookData?.rating}/10</Text>
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
            <Text style={styles.MBTIText}>{bookData?.type[0]}</Text>
          </View>
          <View style={[styles.MBTI, { marginStart: 15 }]}>
            <Text style={styles.MBTIText}>{bookData?.type[1]}</Text>
          </View>
          <View style={[styles.MBTI, { marginStart: 15 }]}>
            <Text style={styles.MBTIText}>{bookData?.type[2]}</Text>
          </View>
        </View>
        <Text style={[styles.detailTitle, { fontFamily: "Prompt-Bold" }]}>
          เนื้อเรื่องโดยย่อ
        </Text>
        <Text style={[styles.detail, { fontFamily: "Prompt-Regular" }]}>
          {bookData?.synopsis}
        </Text>
      </View>
    </View>
  );
};

export default DetailScreen;
