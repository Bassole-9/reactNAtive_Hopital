import { StyleSheet } from "react-native";

const Style = StyleSheet.create({
    scrollableItem:{
        flexDirection:"column",
        paddingHorizontal:15,
        paddingVertical:15,
        backgroundColor:"gray",
        marginRight:15,
        elevation:1,
        borderRadius:10,
        height:250,
        width:200
    },

    mainText:{
        fontWeight:"bold",
        fontSize:16,
        color:"white"
    },
    subText:{
        marginTop:14,
        fontSize:12,
         color:"white"
    },
    svgStyle:{
        position:"relative",
        marginTop:-200
    },
    svgStyles:{
        position:"relative",
        marginTop:-150
    }

})
export default Style
