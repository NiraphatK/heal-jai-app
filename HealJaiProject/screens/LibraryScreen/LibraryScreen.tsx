import { View, Text, Image, Button, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./styles";
import { ScrollView } from "react-native-gesture-handler";
import FavButton from "../../components/FavButton";
import { findBookByName } from "../../services/product-service";
import DetailScreen from "../DetailScreen/DetailScreen";
import { useNavigation } from '@react-navigation/native';


const LibraryScreen: React.FC = (): React.JSX.Element => {

  const navigation = useNavigation<any>();

  // require image
  const image1 = require("../../assets/images/book_images/7_habits.jpg");
  const image2 = require("../../assets/images/book_images/big_magic.jpg");
  const image3 = require("../../assets/images/book_images/drive.jpg");
  const image4 = require("../../assets/images/book_images/educated.jpg");
  const image5 = require("../../assets/images/book_images/quiet.jpg");

  const handlePressBook = async (title:string) => {
    navigation.navigate({name:'DetailScreen',params:{data :title}})
  }

  return (
    <View style={styles.container}>
      {/* Header Logo */}
      <View style={styles.header}>
        <Image
          source={require("../../assets/images/logo.png")}
          style={styles.imageLogo}
        />
      </View>
      <ScrollView>
        {/* Recommend */}
        <View style={styles.containerContent}>
          <Text style={styles.title}>สำหรับคุณ Test test</Text>
          <View style={styles.containerItem}>
            <TouchableOpacity onPress={()=>handlePressBook("The Alchemist")}>
              <View style={styles.item}>
                <FavButton />
                <Image source={image1} style={styles.itemImage} />
                <Text style={styles.subTitle}>asdf</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        {/* read lasted */}
        <View style={styles.containerContent}>
          <Text style={styles.title}>อ่านล่าสุด</Text>
          <View style={styles.containerItem}>
            <View style={styles.item}>
              <FavButton />
              <Image source={image1} style={styles.itemImage} />
              <Text style={styles.subTitle}>asdf</Text>
            </View>
          </View>
        </View>
        {/* Ranking */}
        <View style={styles.containerContent}>
          <Text style={styles.title}>อันดับ</Text>
          {/* Catagory bottom */}
          <View style={styles.containerContent}>
            <TouchableOpacity />
          </View>
          <View style={[styles.containerItem, { flexWrap: "wrap" }]}>
            <View style={styles.item}>
              <FavButton />
              <Image source={image2} style={styles.itemImage} />
              <Text style={styles.subTitle}>asdf</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default LibraryScreen;
