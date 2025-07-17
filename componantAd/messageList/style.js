import { StyleSheet } from "react-native";
import { PADDING } from "../../outilsAnd/constants";

const Style = StyleSheet.create({
    messageContainer:{
        flexDirection:"row",
        alignItems:"center",
        backgroundColor:'white',
        elevation:54,
        marginTop:15,
        paddingVertical:PADDING.verticale,
        paddingHorizontal:PADDING.horizontal,
    },
    messageImg:{
        width:50,
        height:50,
        borderRadius:50/2,
        marginRight:15
    },
    messageInfo:{
        flexDirection:'column',
        flex:1,
        paddingHorizontal:PADDING.horizontal,
        marginRight:15,
    },
    date_name:{
        flexDirection:"row",
    },
    name:{
        fontWeight:'bold',
        marginRight:5
    }
    
})
export default Style