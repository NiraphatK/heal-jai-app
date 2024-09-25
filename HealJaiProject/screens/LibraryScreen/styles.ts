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
    item:{
        position:'relative',
        marginRight:10,
    },
    itemImage:{
        height:80,
        width:110,
        borderRadius:5,
        zIndex:-1,
    },
    subTitle:{
        padding:5,
    },
    
})

export default styles;