import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./styles";

const LibraryScreen = (): React.JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../../assets/images/logo.png")}
          style={styles.imageLogo}
        />
      </View>
    </View>
  );
};

export default LibraryScreen;
