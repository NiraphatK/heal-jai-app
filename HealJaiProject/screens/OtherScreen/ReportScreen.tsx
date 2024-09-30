import React from 'react';
import { TextInput, Text, View, Image, TouchableOpacity } from 'react-native';
import styles from './styles2';
import FeatherIcon from '@expo/vector-icons/Feather';

const ReportScreen = () => {
  return (
    <View style={styles.container}>
    {/* Header with Logo */}
    <View style={styles.header}>
      <Image
        source={require("../../assets/images/logo.png")}
        style={styles.imageLogo}
      />
    </View>

    {/* Header */}
    <View>
        <Text style={styles.HELPheader}>แจ้งปัญหา</Text>
    </View>
    {/*Content*/}
        <View style={styles.formContainer}>
            <Text style={styles.formLabel}>
                ปัญหาที่เกิด <Text style={{ color: 'red' }}>*</Text>
            </Text>
            <TextInput style={styles.formField} multiline={true} placeholder="รายระเอียดเกี่ยวกับปัญหา"/>

        </View>
    {/* Button */}
        <TouchableOpacity style={styles.ReportButton}>
            <FeatherIcon name="send" size={24} />  
            <Text style={styles.ReportButtonText} >ส่ง</Text>
        </TouchableOpacity>
    </View>
  );
};

export default ReportScreen;
