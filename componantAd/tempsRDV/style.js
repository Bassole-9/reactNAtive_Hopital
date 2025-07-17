import { StyleSheet } from "react-native";
import { PADDING } from "../../outilsAnd/constants";

const StyleTemps = StyleSheet.create({
    item:{
        flexDirection:"row",
        backgroundColor:"black",
        alignItems:"center",
        paddingHorizontal:PADDING.horizontal,
        paddingVertical:PADDING.verticale,
        borderRadius:100,
        margin:4
    },
    itemsImage:{
        width:50,height:50
    },
    itemsText:{
        fontWeight:"bold",
        marginTop:10
    },
    flex:{
        display:"flex",
        justifyContent:"center",
        flexDirection:"column",
        alignItems:"center",
    }
    

})
export default StyleTemps 