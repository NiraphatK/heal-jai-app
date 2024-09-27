import { View, Text, Alert } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native';
import { QUESTIONS } from "./Question";

const ResultScreen = () => {
    const route = useRoute<any>();
    const { data } = route.params;
    console.log(data);
    

    const getMBTIType = (): string => {
        let E = 0, I = 0, S = 0, N = 0, T = 0, F = 0, J = 0, P = 0;
      
        data.forEach((optionIndex:any, questionIndex:any) => {
          const questionType = QUESTIONS[questionIndex].type;
          const score = optionIndex - 3; // Convert the option index to a score from -3 to +3
      
          switch (questionType) {
            case "EI":
              if (score > 0) E += score; // Positive score means E
              else I -= score;           // Negative score means I
              break;
            case "SN":
              if (score > 0) S += score;
              else N -= score;
              break;
            case "TF":
              if (score > 0) T += score;
              else F -= score;
              break;
            case "JP":
              if (score > 0) J += score;
              else P -= score;
              break;
          }
        });
      
        // Determine the final MBTI type based on the scores
        const EI = E >= I ? "E" : "I";
        const SN = S >= N ? "S" : "N";
        const TF = T >= F ? "T" : "F";
        const JP = J >= P ? "J" : "P";
      
        return EI + SN + TF + JP;
      };

      const mbtiType = getMBTIType();

  return (
    <View>
      <Text>{mbtiType}</Text>
    </View>
  )
}

export default ResultScreen