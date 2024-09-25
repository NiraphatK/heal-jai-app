import { StyleSheet, Image } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
const FavButton = () => {
    const activeFav = require("../assets/images/real_mask.png");
    const fav = require("../assets/images/real_mask2.png");
    const [favIcon, setFavIcon] = useState(fav);
    const saveFavarite = () => {
        setFavIcon(favIcon == fav ? activeFav : fav);
    };
    return (
        <TouchableOpacity style={styles.favButton} onPress={saveFavarite}>
            <Image source={favIcon} style={styles.favIcon} />
        </TouchableOpacity>
    );
};
export default FavButton;
const styles = StyleSheet.create({
    favIcon: {
        width: 15,
        height: 15,
    },
    favButton: {
        position: "absolute",
        zIndex: 1,
        right: 10,
    },
});
