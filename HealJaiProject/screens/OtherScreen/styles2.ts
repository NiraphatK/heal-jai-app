import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        backgroundColor: '#fff',
    },
    header:{
        height:90
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
        marginTop:25
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
        ,marginTop: 10,
        fontSize:14
      },
      TOScontainer: {
        padding: 20,
        flex: 1,
        width: '100%',
        justifyContent:'center'
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
        padding:7,
        marginStart:4,
      },
      TOSparagraph: {
        fontSize: 16,
        lineHeight: 24,
        flexWrap: 'wrap',
        marginBottom: 4,
        padding:7,
        marginStart:4,
        marginEnd:4
      },
      TOScontact: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 30,
        textAlign: 'center',
        flexWrap: 'wrap',
        marginStart:10,
        marginEnd:10
      },
      TOSclosing: {
        fontSize: 16,
        textAlign: 'center',
        marginTop: 20,
        marginStart:6,
        marginEnd:6
      },
      scroll:{
        marginBottom:100
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
    HELPsectionTitle: {
      fontSize: 20,
      fontWeight: '600',
      padding: 10,
      marginTop:10
  },
  HELPheader: {
    fontSize:35,
    fontWeight: '600',
    alignSelf:'center',
    marginBottom:20
},
  HELPcontactRow: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 15,
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
      paddingHorizontal: 10,
  },
  HELPcontactText: {
      marginLeft: 10,
      padding : 5,
      fontSize: 16,
  },
  HELPknowledgeItem: {
      fontSize: 16,
      backgroundColor: '#fff',
      padding: 15,
      borderRadius: 8,
      marginBottom: 10,
      borderColor: '#ddd',
      borderWidth: 1,
      marginHorizontal: 10,
  },
  HELPchatButton: {
    position: 'absolute',
    right: 20,
    bottom: 80,
    backgroundColor: '#28a745',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
},
HELPchatButtonText: {
    color: '#fff',
    marginLeft: 8,
    fontSize: 16,
},
formContainer: {
  flex: 1,
  padding: 16,
  backgroundColor: '#fff',
},
formField: {
  borderWidth: 1,
  borderColor: '#ddd',
  borderRadius: 5,
  padding: 10,
  marginBottom: 20,
  backgroundColor: '#f9f9f9',
  fontSize: 16,
  minHeight: 100,
},
formLabel: {
  fontSize: 18,
  fontWeight: 'bold',
  marginBottom: 10,
},
ReportButton: {
  backgroundColor: '#28a745',
  paddingVertical: 10,
  paddingHorizontal: 20,
  borderRadius: 50,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  alignSelf: 'center',
  marginBottom: 450,
},
ReportButtonText: {
  color: '#fff',
  marginLeft: 8,
  fontSize: 16,
},
securityIcon:{
  alignSelf:'center'
},
iconContainer: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
},
  });

export default styles;