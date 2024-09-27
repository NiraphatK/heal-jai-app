import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Button,
  ActivityIndicator,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { QUESTIONS } from "./Question";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { updateResultScore } from "../../services/product-service";

// Constants for size and color of options
const SIZES = [30, 25, 20, 15, 20, 25, 30];
const COLORS = [
  "#88619A", // Strongly Disagree
  "#88619A", // Disagree
  "#88619A", // Slightly Disagree
  "#808080", // Neutral
  "#33A474", // Slightly Agree
  "#33A474", // Agree
  "#33A474", // Strongly Agree
];

interface scoreType {
  E: number;
  I: number;
  S: number;
  N: number;
  T: number;
  F: number;
  J: number;
  P: number;
}

const QuestionScreen = () => {
  const navigation = useNavigation<any>();

  const [loaded] = useFonts({
    "Prompt-Regular": require("../../assets/fonts/Prompt-Regular.ttf"),
    "Prompt-Bold": require("../../assets/fonts/Prompt-Bold.ttf"),
    "Prompt-BoldItalic": require("../../assets/fonts/Prompt-BoldItalic.ttf"),
    "Prompt-Light": require("../../assets/fonts/Prompt-Light.ttf"),
  });

  const [users,setUsers] = useState<string>()
  
  if (!loaded) {
    return <ActivityIndicator size="large" />;
  }

  // State to keep track of selected options for each question
  const [selectedOptions, setSelectedOptions] = useState<number[]>(
    new Array(QUESTIONS.length).fill(-1) // Initial state where -1 means no answer selected
  );

  // Function to handle the selection of an option
  const handleOptionSelect = (questionIndex: number, optionIndex: number) => {
    const updatedOptions = [...selectedOptions];
    updatedOptions[questionIndex] = optionIndex; // Update the selected option for the question
    setSelectedOptions(updatedOptions); // Update state
  };

  const updateScore = async (userID: string, score: scoreType, type: string) => {
    try {
        await updateResultScore(userID, score, type);
    } catch (error) {
        console.error('Error updating score:', error);
    }
};

const getMBTIType = async () => {
    let E = 0, I = 0, S = 0, N = 0, T = 0, F = 0, J = 0, P = 0;
  
    selectedOptions.forEach((optionIndex: any, questionIndex: any) => {
      const questionType = QUESTIONS[questionIndex].type;
      const score = optionIndex - 3;
  
      switch (questionType) {
        case 'EI':
          if (score > 0) E += score; 
          else I -= score;          
          break;
        case 'SN':
          if (score > 0) S += score;
          else N -= score;
          break;
        case 'TF':
          if (score > 0) T += score;
          else F -= score;
          break;
        case 'JP':
          if (score > 0) J += score;
          else P -= score;
          break;
      }
    });
  
    const EI = E >= I ? 'E' : 'I';
    const SN = S >= N ? 'S' : 'N';
    const TF = T >= F ? 'T' : 'F';
    const JP = J >= P ? 'J' : 'P';
  
    const score = {
      E: E,
      I: I,
      S: S,
      N: N,
      T: T,
      F: F,
      J: J,
      P: P,
    };
  
    const type = EI + SN + TF + JP;
  
    // ดึง userID จาก AsyncStorage
    const storedUserID = await AsyncStorage.getItem('userID');
    if (storedUserID === null) {
      console.error('User ID not found in AsyncStorage');
      return;
    }

    // เรียกใช้ updateScore พร้อมกับ userID โดยตรง
    await updateScore(storedUserID, score, type);
  
    return storedUserID; // ส่ง userID กลับมาหลังจากทำงานเสร็จ
};

const handleSubmit = async () => {
    if (selectedOptions.includes(-1)) {
      Alert.alert("Error", "กรุณาตอบคำถามทั้งหมดให้เสร็จสิ้น");
    } else {
      const userID = await getMBTIType(); // รอการคำนวณและส่งข้อมูลเสร็จ

      if (userID) { // ตรวจสอบว่ามี userID ก่อนนำทาง
        navigation.navigate('ResultScreen', { user_id: userID }); // นำทางไปยัง ResultScreen พร้อมกับ userID
      }
    }
};


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../../assets/images/logo.png")}
          style={styles.imageLogo}
        />
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Render each question */}
        {QUESTIONS.map((question, questionIndex) => (
          <View key={questionIndex} style={styles.questionContainer}>
            <Text style={styles.questionText}>{question.text}</Text>
            <View style={styles.optionsContainer}>
              <Text style={styles.optionText}>ฉันไม่เห็นด้วย</Text>
              {SIZES.map((size, optionIndex) => (
                <TouchableOpacity
                  key={optionIndex}
                  style={[
                    styles.circle,
                    {
                      width: size,
                      height: size,
                      borderRadius: size / 2,
                      borderColor: COLORS[optionIndex],
                      backgroundColor:
                        selectedOptions[questionIndex] === optionIndex
                          ? COLORS[optionIndex] // Background color for selected circle
                          : "transparent", // Background color for non-selected circles
                    },
                  ]}
                  onPress={() => handleOptionSelect(questionIndex, optionIndex)}
                />
              ))}
              <Text style={styles.optionText}>ฉันเห็นด้วย</Text>
            </View>
          </View>
        ))}
        <TouchableOpacity
          style={styles.buttonSubmit}
          onPress={() => handleSubmit()}
        >
          <Text style={styles.textButton}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default QuestionScreen;

// Styles for the component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: "#fff",
  },
  header: {
    height: 90,
  },
  imageLogo: {
    width: 100,
    height: 100,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  questionContainer: {
    alignItems: "center",
    width: "100%",
    marginBottom: 20,
  },
  questionText: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
    fontFamily: "Prompt-Regular",
  },
  optionsContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  circle: {
    borderWidth: 2,
    marginHorizontal: 5,
    marginVertical: 10,
  },
  optionText: {
    fontSize: 12,
    color: "#333",
    textAlign: "center",
    flex: 1,
    fontFamily: "Prompt-Regular",
  },
  buttonSubmit: {
    width: "90%",
    padding: 15,
    borderRadius: 25,
    alignItems: "center",
    backgroundColor: "#88619A",
    marginBottom: 10,
  },
  textButton: {
    color: "white",
    fontFamily: "Prompt-Regular",
  },
});
