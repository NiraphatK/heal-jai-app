import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import FeatherIcon from '@expo/vector-icons/Feather';
import styles from './styles2';

const SecurityScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header with Logo */}
      <View style={styles.header}>
        <Image
          source={require("../../assets/images/logo.png")}
          style={styles.imageLogo}
        />
      </View>

      {/* Centering the icon */}
      <View style={styles.iconContainer}>
        <FeatherIcon name="lock" size={150} />
        <Text style={styles.HELPheader}>Lock</Text>
      </View>
    </View>
  );
}

export default SecurityScreen;