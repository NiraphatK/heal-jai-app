import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import styles from './styles'
import React from 'react'
import OcIcon from '@expo/vector-icons/Octicons';
import FeatherIcon from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useFonts } from 'expo-font';

const OtherScreen = () => {
  return (
    //header
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../../assets/images/logo.png")}
          style={styles.imageLogo}
        />
      </View>

       {/* Buttons */}
      <View style={styles.buttonsContainer}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button}>
            <OcIcon name="gear" size={36} color="black" />
            <Text style={styles.buttonText}>ตั้งค่า</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <OcIcon name="bookmark" size={36} color="black" />
            <Text style={styles.buttonText}>รายการโปรด</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <OcIcon name="person" size={36} color="black" />
            <Text style={styles.buttonText}>MBTI ของฉัน</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <FeatherIcon name="book" size={36} color="black" />
            <Text style={styles.buttonText}>สถิติแบบทดสอบ</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity style={styles.button}>
            <OcIcon name="info" size={36} color="black" />
            <Text style={styles.buttonText}>ศูนย์ช่วยเหลือ</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <OcIcon name="report" size={36} color="black" />
            <Text style={styles.buttonText}>รายงานปัญหา</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <OcIcon name="shield-check" size={36} color="black" />
            <Text style={styles.buttonText}>ความปลอดภัย</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <OcIcon name="checklist" size={36} color="black" />
            <Text style={styles.buttonText}>ข้อกำหนดนโยบาย</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default OtherScreen