import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: '#fff',
  },
  header: {
    height: 90
  },
  imageLogo: {
    width: 100,
    height: 100,
  },
  row: {
    flexDirection: 'row',
    marginVertical: 20,
    justifyContent: 'space-between',
  },
  buttonsContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    width: '100%',
    alignItems: 'center',
    marginTop: 25
  },
  button: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  buttonText: {
    textAlign: 'center'
    , marginTop: 10,
    fontSize: 14
  },
  TOScontainer: {
    padding: 20,
    flex: 1,
    width: '100%',
    justifyContent: 'center'
  },
  TOStitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    flexWrap: 'wrap'
  },
  TOSdate: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    flexWrap: 'wrap'
  },
  TOSsectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5,
    flexWrap: 'wrap',
    padding: 7,
    marginStart: 4,
  },
  TOSparagraph: {
    fontSize: 16,
    lineHeight: 24,
    flexWrap: 'wrap',
    marginBottom: 4,
    padding: 7,
    marginStart: 4,
    marginEnd: 4
  },
  TOScontact: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 30,
    textAlign: 'center',
    flexWrap: 'wrap',
    marginStart: 10,
    marginEnd: 10
  },
  TOSclosing: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
    marginStart: 6,
    marginEnd: 6,
    marginBottom:150
  },
  scroll: {
    marginTop:50,
    padding:10,
  },
  lineContainer: {
    alignItems: 'center',
    marginVertical: 16,
  },
  horizontalLine: {
    width: '75%',
    height: 1,
    backgroundColor: 'gray',
  },
})

export default styles;