import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native'
import React, { useCallback, useState } from 'react'
import styles from './styles';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { findUserById, findBookByName } from '../../services/product-service';
import { GetImage } from "../../components/GetImage"; // For getting the image based on the book title

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

const FavoriteScreen = () => {

  const navigation = useNavigation<any>()

  const [userData, setUserData] = useState<Users | null>(null);
  const [favBooks, setFavBooks] = useState<any[]>([]);

  const getUserData = async () => {
    const user_id = await AsyncStorage.getItem('userID')
    try {
      if (!user_id) {
        return;
      }
      const res = await findUserById(user_id)
      setUserData(res.data)

      // ดึงข้อมูลหนังสือจากรายการโปรดของผู้ใช้
      if (res.data.favorite.length > 0) {
        const booksPromises = res.data.favorite.map(async (title: string) => {
          const bookRes = await findBookByName(title);
          return bookRes.data;
        });
        const books = await Promise.all(booksPromises);
        setFavBooks(books);
      } else {
        setFavBooks([]);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  }

  useFocusEffect(
    useCallback(() => {
      getUserData()
    }, [navigation])
  )


  const renderItemFav = ({ item }: { item: any }) => {
    return (
      <View style={styles.favcard}>
        <TouchableOpacity style={styles.buttonCard} onPress={()=>navigation.navigate({ name: "DetailScreen", params: { data: item.title,state: 'FavoriteScreen' } })}>
          <Image
            source={GetImage(item.title)}
            style={styles.itemImage}
            resizeMode="contain"
          />
          <View style={{ flex: 5, marginLeft: 30 }}>
            <Text style={{ fontSize: 19, fontWeight: 'bold' }} numberOfLines={1}>
              {item.title}
            </Text>
            <Text>
              {item.author}
            </Text>
            <View style={{flexDirection:'row'}}>
              {
                item.type.map((data: any) => {
                  return (
                    <View style={styles.textType}>
                      <Text style={{ color: 'white' }}>
                        {data}
                      </Text>
                    </View>
                  )
                })
              }
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../../assets/images/logo.png")}
          style={styles.imageLogo}
        />
        <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 10 }}>
          <Image source={require('../../assets/images/real_mask.png')} style={styles.maskSize} />
          <Text style={{ fontFamily: 'Prompt-Regular', fontSize: 27 }}>รายการโปรด</Text>
        </View>

      </View>
      <View style={styles.container1}>
        <FlatList
          data={favBooks}
          keyExtractor={(item) => item._id} // Use the unique _id of the book
          renderItem={renderItemFav}
          style={styles.boxCard}
        />
      </View>
    </View>
  )
}

export default FavoriteScreen
