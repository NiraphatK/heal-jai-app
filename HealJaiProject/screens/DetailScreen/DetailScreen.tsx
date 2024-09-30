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
import { GetImage } from "../../components/GetImage";
import FavButton from "../../components/FavButton";

type bookType = {
  title: string,
  type: string[],
  author: string,
  cover: string,
  synopsis: string,
  rating: number
}


const DetailScreen = (): React.JSX.Element => {
  const route = useRoute<any>();
  const navigation = useNavigation<any>();
  const [bookData, setBookData] = useState<bookType>()

  const { data, state } = route.params;

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

  const handleNavigation = () => {
    return state === "FavoriteScreen" ? navigation.navigate('Favorite') : navigation.goBack()
  }

  if (!loaded) {
    return <ActivityIndicator />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <ImageBackground
          source={GetImage(data)}
          style={styles.backgroundImage}
          blurRadius={7}
        >
          <TouchableOpacity onPress={() => handleNavigation()}>
            <Ionicons
              name="chevron-back-outline"
              size={40}
              color="black"
              style={{ marginTop: 30, marginStart: 10 }}
            />
          </TouchableOpacity>
          <View style={[styles.container, { alignItems: "center" }]}>
            <Image
              source={GetImage(data)}
              style={styles.bookCover}
            ></Image>
            <Text style={[styles.name]}>
              {bookData?.title}
            </Text>
            <Text style={styles.author}>{bookData?.author}</Text>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: 'center', marginTop: 10 }}>
              <View style={{ marginRight: 20 }}>
                <FavButton bookName={data} />
              </View>
              <View style={{ marginLeft: 20, flexDirection: "row", alignItems: "center", justifyContent: 'center' }}>
                <Ionicons name="heart" size={20} color="#bf2525"></Ionicons>
                <Text style={{ fontSize: 16 }}> {bookData?.rating}/10</Text>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
      <View style={[styles.container, { paddingHorizontal: 30, marginTop: 40 }]}>
        <Text style={{ marginTop: 20, fontFamily: "Prompt-Regular" }}>
          เหมาะกับ
        </Text>
        <View style={{ flexDirection: "row", paddingVertical: 15 }}>
          {bookData?.type.map((item, index) => (
            <View style={[styles.MBTI, index !== 0 && { marginStart: 15 }]} key={index}>
              <Text style={styles.MBTIText}>{item}</Text>
            </View>
          ))}
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
