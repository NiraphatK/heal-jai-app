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

const QuestionScreen = () => {
  const navigation = useNavigation<any>();

  const [loaded] = useFonts({
    "Prompt-Regular": require("../../assets/fonts/Prompt-Regular.ttf"),
    "Prompt-Bold": require("../../assets/fonts/Prompt-Bold.ttf"),
    "Prompt-BoldItalic": require("../../assets/fonts/Prompt-BoldItalic.ttf"),
    "Prompt-Light": require("../../assets/fonts/Prompt-Light.ttf"),
  });

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


  // Function to handle form submission
  const handleSubmit = () => {
    if (selectedOptions.includes(-1)) {
      Alert.alert("Error", "กรุณาตอบคำถามทั้งหมดให้เสร็จสิ้น");
    } else {
      navigation.navigate({name:'ResultScreen',params:{data :selectedOptions}})
      // const mbtiType = getMBTIType();
      // Alert.alert("Your MBTI Result", `Your personality type is: ${mbtiType}`);
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
