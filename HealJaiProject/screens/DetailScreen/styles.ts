import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "stretch",
    height: 250,
  },
  bookCover: {
    padding: 10,
    marginTop: 50,
    height: 230,
    width: 170,
    borderRadius:10
  },
  name: {
    padding: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
  author: {
    fontSize: 16,
    marginBottom: 10,
  },
  like: {},
  MBTI: {
    backgroundColor: "#65558F",
    paddingHorizontal: 25,
    paddingVertical: 2,
    borderRadius: 20,
  },
  MBTIText: {
    color: "white",
  },
  detailTitle: {
    fontSize: 16,
    paddingVertical: 10,
  },
  detail: {
    fontSize: 14,
    marginTop: 10,
  },
});

export default styles;
