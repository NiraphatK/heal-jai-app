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
    body: {
        width: '100%',
        height: 'auto',
        paddingVertical: 10
    },
    CardExam: {
        height: 190,
        position: 'relative',
        borderRadius: 20,
        overflow: 'hidden'
    },
    examBackground: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
        opacity: 0.7,
        backgroundColor: '#000'
    },
    buttonExam: {
        width: 130,
        height: 25,
        paddingHorizontal: 5,
        backgroundColor: '#fff',
        marginTop: 10,
        borderRadius: 7
    },
    insideImg: {
        position: 'absolute',
        bottom: 30,
        left: 25
    },
    CardMBTI: {
        height: 300,
        borderRadius: 20,
        backgroundColor: '#fff',
        overflow: 'hidden',
        elevation: 5,
        padding: 25
    },
    buttonInfo: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#fafafa",
        elevation: 5,
        borderRadius: 20,
    },
    CardFeature: {
        height: 300,
        backgroundColor: '#fff',
        paddingVertical:15
    },
    maskSize:{
        height:20,
        width:15,
    },
    MaginTop:{
        marginTop:10
    },
    showFav:{
        position:'relative',
        width:150,
        height:100,
        marginTop:20,
        backgroundColor:'#fff',
        padding:7,
        borderRadius:15,
        borderColor:'#d1d1d1',
        borderWidth:1.5,
        marginRight:5
    },
    positionRT:{
        position:'absolute',
        right:10,
        top:-2,
    },

});

export default styles;