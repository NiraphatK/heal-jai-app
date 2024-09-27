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
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

//
type BooksItem = {
  _id: string;
  title: string;
  type: string[];
  author: string;
  cover: string;
  synopsis: string;
  rating: number;
};

type Users = {
  user_id: string;
  mbti_type: string;
  favorite: string[];
  history: string[];
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

  //function
  const getRecommendBooks = async () => {
    const response = await findTop10();
    setRecommendBooks(response.data);
  };
  const getUserRecentBooks = async () => {
    const userID: any = await AsyncStorage.getItem("userID");
    const response = await findUserById(userID);
    // console.log(response.data)
    setUser(response.data);
    // console.log(user)
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
        <FavButton />
        <TouchableOpacity
          style={styles.containerItemImage}
          onPress={() => handlePressBook(item)}
        >
          <Image
            source={{ uri: item.cover }}
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
        <FavButton />
        <TouchableOpacity
          style={styles.containerItemImage}
          onPress={() => handlePressBook(item)}
        >
          <Image
            source={{ uri: item.cover }}
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
      {/* <ScrollView style={styles.scrollView}> */}
      {/* Recommend */}
      <View style={styles.containerContent}>
        <Text style={styles.title}>สำหรับคุณ Test test</Text>
        <FlatList
          data={recommendBooks}
          renderItem={_renderItemRecommend}
          keyExtractor={(item) => item._id}
          contentContainerStyle={styles.containerItem}
          horizontal
        />
      </View>

      {/* read lasted */}
      <View style={styles.containerContent}>
        <Text style={styles.title}>อ่านล่าสุด</Text>
        {/* <View style={styles.containerItem}>
          <View style={styles.item}>
            <FavButton />
            <TouchableOpacity
              style={styles.containerItemImage}
              onPress={() => handlePressBook("The Alchemist")}
            >
              <Image source={image1} style={styles.itemImage} />
            </TouchableOpacity>
            <Text style={styles.subTitle}>asdf</Text>
          </View>
        </View> */}
        <FlatList data={recentBooks} renderItem={_renderItemRecent} />
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
            <FavButton />
            <TouchableOpacity style={styles.containerItemImage}>
              <Image source={image2} style={styles.itemImage} />
            </TouchableOpacity>
            <Text style={styles.subTitle}>asdf</Text>
          </View>
        </View>
      </View>
      {/* </ScrollView> */}
    </View>
  );
};

export default LibraryScreen;
