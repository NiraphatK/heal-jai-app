import { StyleSheet, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { findUserById, updateFavoriteBook } from "../services/product-service";
import AsyncStorage from "@react-native-async-storage/async-storage";

const FavButton = ({ bookName }: { bookName: string }) => {
    const activeFav = require("../assets/images/real_mask.png");
    const fav = require("../assets/images/real_mask2.png");
    const [userId, setUserId] = useState<string | null>(null);
    const [favIcon, setFavIcon] = useState(fav);
  
    useEffect(() => {
      const getFavorite = async () => {
        const storedUserID = await AsyncStorage.getItem("userID");
        if (!storedUserID) return;
        setUserId(storedUserID);
        const res = await findUserById(storedUserID);
        const isFavorite = res.data.favorite.includes(bookName);
        setFavIcon(isFavorite ? activeFav : fav);
      };
      getFavorite();
    }, [bookName]);
  
    const saveFavorite = async () => {
      if (!userId) return;
      try {
        const res = await updateFavoriteBook(userId, bookName);
        console.log(res.data.message);
        setFavIcon(favIcon === fav ? activeFav : fav);
      } catch (error) {
        console.error("Error updating favorite:", error);
      }
    };
  
    return (
      <TouchableOpacity onPress={saveFavorite}>
        <Image source={favIcon} style={styles.favIcon} />
      </TouchableOpacity>
    );
  };
  

export default FavButton;

const styles = StyleSheet.create({
    favIcon: {
        width: 20,
        height: 20,
    },
});
