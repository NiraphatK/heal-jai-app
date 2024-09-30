import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
         flex: 1,
         paddingTop: 40,
         backgroundColor: '#fff',
    },
    header:{
        flex:1,
        height:90
    },
    imageLogo: {
        width: 100,
        height: 100,
    },
    maskSize:{
        height:25,
        width:20,
       marginLeft:14,
       marginRight: 5,
       marginTop:3,
    },
    container1: {
        flex:4,
        alignItems:'center',
        marginBottom:100
      },
      boxCard:{
        width:'100%',
      },
      itemImage:{
        flex:2,
        height:130,
        borderRadius:10,
      },
      favcard:{
        width:'100%',
        height:150,
        alignItems:'center',
        marginBottom:20,
      },
      buttonCard:{
        flex:1,
        flexDirection:'row',
        width:'90%',
        alignItems:'center',
        backgroundColor:'rgba(217, 217, 217,0.55)',
        borderRadius:20,
        paddingHorizontal:20
      },
      textType:{
        width:60,
        height:22,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#65558F',
        borderRadius:20,
        marginTop:20,
        marginRight:7
      }
})

export default styles;