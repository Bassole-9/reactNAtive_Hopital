import { StyleSheet } from "react-native";
import { PADDING } from "../../outilsAnd/constants";

const Style = StyleSheet.create({
    Container:{
        backgroundColor:"white",
        elevation:5,
        marginTop:15,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        paddingVertical:PADDING.verticale,
        paddingHorizontal:PADDING.horizontal
    }

})
export default Style