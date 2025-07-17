import { StyleSheet } from "react-native";
import { PADDING } from "../../outilsAnd/constants";

const Style = StyleSheet.create({
    item:{
        marginRight:15,
        flexDirection:"row",
        backgroundColor:"black",
        alignItems:"center",
        paddingHorizontal:PADDING.horizontal,
        paddingVertical:PADDING.verticale,
        borderRadius:10,
        color:"white",
    },
    itemsImage:{
        width:40,height:40,marginRight:5
    },
    colorItem:{
        color:"white",
        fontWeight:"bold"
    }
    

})
export default Style