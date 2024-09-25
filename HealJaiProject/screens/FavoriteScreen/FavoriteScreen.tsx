import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import styles from './styles';


const FavoriteScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../../assets/images/logo.png")}
          style={styles.imageLogo}
        />
        <View style={{ flexDirection: 'row', alignItems: 'center',marginLeft:10 }}>
          <Image source={require('../../assets/images/real_mask.png')} style={styles.maskSize} />
          <Text style={{ fontFamily: 'Prompt-Regular', fontSize: 27 }}>รายการโปรด</Text>
        </View>
        <View style={styles.container1}>

        </View>
      </View>

    </View>

  )
}

export default FavoriteScreen

