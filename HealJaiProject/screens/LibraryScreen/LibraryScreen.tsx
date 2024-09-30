import { View, Text, Image, Button, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./styles";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import FavButton from "../../components/FavButton";
import {
  findAllBook,
  findBookByName,
  findTop10,
  findUserById,
} from "../../services/product-service";
import DetailScreen from "../DetailScreen/DetailScreen";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { GetImage } from "../../components/GetImage";

//
type BooksItem = {
  _id: string;
  title: string;
  type: string[];
  author: string;
  cover: string;
  synopsis: string;
  rating: number
};

type Users = {
  user_id: string;
  mbti_type: string;
  favorite: string[];
  history: string[];
  score: {
    E: { type: Number },
    I: { type: Number },
    S: { type: Number },
    N: { type: Number },
    T: { type: Number },
    F: { type: Number },
    J: { type: Number },
    P: { type: Number },
  };
};

const LibraryScreen: React.FC = (): React.JSX.Element => {
  const navigation = useNavigation<any>();

  // require image
  const image2 = require("../../assets/images/book_images/big_magic.jpg");

  // State
  const [user, setUser] = useState<Users | null>(null);
  const [recommendBooks, setRecommendBooks] = useState<BooksItem[]>([]);
  const [recentBooks, setRecentBooks] = useState<BooksItem[]>([]);
  const [buttonActive, setButtonActive] = useState("รีวิวดี");
  const [onRefresh, setOnRefresh] = useState(true)

  // arrary
  const catagories = [
    "รีวิวดี",
    "ยอดนิยม",
    "INFP",
    "INTJ",
    "ENTJ",
    "ENFP",
    "ISTJ",
  ];

  // function
  const getRecommendBooks = async () => {
    setOnRefresh(true); // Start refreshing
    try {
      const response = await findTop10();
      setRecommendBooks(response.data);
    } catch (error) {
      console.error("Error fetching recommended books:", error);
    } finally {
      setOnRefresh(false); // End refreshing
    }
  };


  const getUserRecentBooks = async () => {
    setOnRefresh(true);
    try {
      const userID: any = await AsyncStorage.getItem("userID");
      if (userID) {
        const response = await findUserById(userID);
        setUser(response.data);
      } else {
        console.warn("No user ID found");
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    } finally {
      setOnRefresh(false);
    }
  };
  

  const handlePressBook = async (item: BooksItem) => {
    navigation.navigate({ name: "DetailScreen", params: { data: item.title } });
  };

  //useEffect
  useEffect(() => {
    getRecommendBooks();
    getUserRecentBooks();
  }, []);

  useEffect(() => {
    const fetchRecentBook = async () => {
      if (user?.history && user.history.length > 0) {
        try {
          const booksPromises = user?.history.map(async (title: string) => {
            const bookRes = await findBookByName(title);
            return bookRes.data;
          });

          const books = await Promise.all(booksPromises);
          setRecentBooks(books);
        } catch (err) {
          console.log(err);
          setRecentBooks([]);
        }
      } else {
        setRecentBooks([]);
      }
    };
    fetchRecentBook();
  }, [user]);

  //render itesm function
  const _renderItemRecommend = ({ item }: { item: BooksItem }) => {
    return (
      <View style={styles.item}>
        <View style={{ position: 'absolute', right: 10 }}>
          <FavButton bookName={item?.title} />
        </View>
        <TouchableOpacity
          style={styles.containerItemImage}
          onPress={() => handlePressBook(item)}
        >
          <Image
            source={GetImage(item.title)}
            style={styles.itemImage}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Text style={styles.subTitle} numberOfLines={2}>
          {item.title}
        </Text>
      </View>
    );
  };


  const _renderItemRecent = ({ item }: { item: BooksItem }) => {
    return (
      <View style={styles.item}>
        <View style={{ position: 'absolute', right: 10 }}>
          <FavButton bookName={item?.title} />
        </View>
        <TouchableOpacity
          style={styles.containerItemImage}
          onPress={() => handlePressBook(item)}
        >
          <Image
            source={GetImage(item.title)}
            style={styles.itemImage}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Text style={styles.subTitle} numberOfLines={2}>
          {item.title}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>

      {/* Header Logo */}
      <View style={styles.header}>
        <Image
          source={require("../../assets/images/logo.png")}
          style={styles.imageLogo}
        />
      </View>

      {/* Recommend */}
      <View style={styles.containerContent}>
        <Text style={styles.title}>สำหรับคุณ</Text>
        <FlatList
          data={recommendBooks}
          renderItem={_renderItemRecommend}
          keyExtractor={(item) => item._id}
          contentContainerStyle={styles.containerItem}
          horizontal
          refreshing={onRefresh} // Connect the refreshing state
          onRefresh={getRecommendBooks} // Call the getRecommendBooks function on refresh
        />
      </View>

      {/* read lasted */}
      <View style={styles.containerContent}>
        <Text style={styles.title}>อ่านล่าสุด</Text>
        <FlatList
          data={recentBooks}
          renderItem={_renderItemRecent}
          keyExtractor={(item) => item._id}
          contentContainerStyle={styles.containerItem}
          horizontal
          refreshing={onRefresh} // Connect the refreshing state
          onRefresh={getUserRecentBooks}
        />
      </View>
      {/* Ranking */}
      <View style={styles.containerContent}>
        <Text style={styles.title}>อันดับ</Text>
        {/* Catagory bottom */}
        <View style={styles.containerCatagoryButton}>
          {catagories.map((catagory) => (
            <TouchableOpacity
              key={catagory}
              onPress={() => {
                setButtonActive(catagory);
              }}
              style={
                buttonActive === catagory
                  ? styles.buttonCatagoryActive
                  : styles.buttonCatagory
              }
            >
              <Text>{catagory}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={[styles.containerItem, { flexWrap: "wrap" }]}>
          <View style={styles.item}>
            <View style={{ position: 'absolute', right: 10 }}>
              <FavButton bookName={''} />
            </View>
            <TouchableOpacity style={styles.containerItemImage}>
              <Image source={image2} style={styles.itemImage} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/* </ScrollView> */}
    </View>
  );
};

export default LibraryScreen;
