import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const data = [
  { key: 'INTJ', image: require('../../assets/images/char_images/intj.png') },
  { key: 'INTP', image: require('../../assets/images/char_images/intp.png') },
  { key: 'ENTJ', image: require('../../assets/images/char_images/entj.png') },
  { key: 'ENTP', image: require('../../assets/images/char_images/entp.png') },
  { key: 'INFJ', image: require('../../assets/images/char_images/infj.png') },
  { key: 'INFP', image: require('../../assets/images/char_images/infp.png') },
  { key: 'ENFJ', image: require('../../assets/images/char_images/enfj.png') },
  { key: 'ENFP', image: require('../../assets/images/char_images/enfp.png') },
  { key: 'ISTJ', image: require('../../assets/images/char_images/istj.png') },
  { key: 'ISFJ', image: require('../../assets/images/char_images/isfj.png') },
  { key: 'ESTJ', image: require('../../assets/images/char_images/estj.png') },
  { key: 'ESFJ', image: require('../../assets/images/char_images/esfj.png') },
  { key: 'ISTP', image: require('../../assets/images/char_images/istp.png') },
  { key: 'ISFP', image: require('../../assets/images/char_images/isfp.png') },
  { key: 'ESTP', image: require('../../assets/images/char_images/estp.png') },
  { key: 'ESFP', image: require('../../assets/images/char_images/esfp.png') },
];

const ShowMBTIScreen = () => {
  return (
    <View style={styles.mainContainer}>
      {/* Logo at the top left */}
      <View style={styles.logoContainer}>
        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.logo}
        />
      </View>

      {/* Grid Layout */}
      <View>
        <View style={styles.container}>
          {data.map((item) => (
            <TouchableOpacity key={item.key} style={styles.itemContainer}>
              <Image source={item.image} style={styles.image} />
              <Text style={styles.label}>{item.key}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

    </View>
  );
};




const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: 20,
  },
  logoContainer: {
    flexDirection: 'row', // Align logo to the left
    justifyContent: 'flex-start', // Align to the start (left)
    paddingLeft: 10,
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
  },
  container: {
    flexDirection: 'row', // Align items in a row
    flexWrap: 'wrap',     // Wrap to the next line when out of space
    justifyContent: 'center', // Align all items centrally
    marginTop: 20,
  },
  itemContainer: {
    width: '22%', // Adjust width to fit the grid (approximately 4 per row)
    marginVertical: 10, // Space between the items
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 80,
    marginBottom: 25,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  buttonInfo: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#fafafa",
    elevation: 5,
    borderRadius: 20,
  },
});

export default ShowMBTIScreen;

