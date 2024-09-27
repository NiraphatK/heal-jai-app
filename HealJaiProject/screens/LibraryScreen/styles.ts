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
    title:{
        fontWeight: 'bold', 
        fontSize: 17, 
        marginLeft: 7,
    },
    containerContent:{
        marginVertical:15,
        marginStart:20,
    },
    containerItem:{
        position:'relative',
        flexDirection:'row',
        padding:10,
    },
    containerCatagoryButton:{
        marginVertical:15,
        marginStart:4,
        flexDirection:'row',
    },
    buttonCatagory:{
        marginEnd:10,
        padding:5,
    },
    buttonCatagoryActive:{
        marginEnd:10,
        padding:5,
        borderBottomWidth:3,
        borderBottomColor:'#716868',
    },
    item:{
        width:110,
        position:'relative',
        marginRight:10,
        overflow:'hidden',
    },
    containerItemImage:{
        zIndex:-1,
        borderWidth:1,
        borderColor:'gray',
        borderRadius:5,
    },
    itemImage:{
        height:80,
        width:110,
        borderRadius:5,
    },
    subTitle:{
        padding:5,
    },
    scrollView:{
        marginBottom:50,
    },
})

export default styles;