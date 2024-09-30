import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import FeatherIcon from '@expo/vector-icons/Feather';
import styles from './styles2';

const HelpScreen = () => {

  return (
    <View style={styles.container}>
      {/* Header with Logo */}
      <View style={styles.header}>
        <Image
          source={require("../../assets/images/logo.png")}
          style={styles.imageLogo}
        />
      </View>

      <View>
        <Text style={styles.HELPheader}>ศูนย์ช่วยเหลือ</Text>
      </View>
      {/* Contact Support Section */}
      <View>
        <Text style={styles.HELPsectionTitle}>ติดต่อเรา</Text>
        <View style={styles.HELPcontactRow}>
          <FeatherIcon name="phone" size={24} />
          <Text style={styles.HELPcontactText}>โทร : 0987654321</Text>
        </View>
        <View style={styles.HELPcontactRow}>
          <FeatherIcon name="mail" size={24} />
          <Text style={styles.HELPcontactText}>Email : HealJai@co.th</Text>
        </View>
        <View style={styles.HELPcontactRow}>
          <FeatherIcon name="home" size={24} />
          <Text style={styles.HELPcontactText}>ที่อยู่: 1771/1 ถ. พัฒนาการ แขวงสวนหลวง เขตสวนหลวง กรุงเทพมหานคร 10250</Text>
        </View>
      </View>
      {/* Live Chat Button */}
        <TouchableOpacity style={styles.HELPchatButton}>
          <FeatherIcon name="message-circle" size={24} />  
          <Text style={styles.HELPchatButtonText}>Live Chat</Text>
        </TouchableOpacity>
    </View>
  );
}

export default HelpScreen;
