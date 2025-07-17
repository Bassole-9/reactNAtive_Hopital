import { StyleSheet } from "react-native";
import { PADDING } from "../../outilsAnd/constants";

const Style = StyleSheet.create({
    containerSet:{
        flex:1,
        paddingVertical:PADDING.verticale,
        paddingHorizontal:PADDING.horizontal
    },
    image:{
        width:80,
        height:80,
        borderRadius:80/2
    },
    header:{
        elevation:5,
        backgroundColor:"white",
        flexDirection:"row",
        alignItems:"center",
        padding:10
    },
    userInfo:{
        marginLeft:15
    },
    userName:{
        fontWeight:"bold",
        fontSize:16,
    marginBottom:5    }
   
})
export default Style