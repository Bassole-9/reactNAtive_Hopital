import { StyleSheet } from "react-native";
import { COLORS, PADDING } from "../../outilsAnd/constants";

const Styles = StyleSheet.create({
    ContainerInput:{
        padding:20,
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'#eee',
        alignItems:"center"

    },
    input:{
        flex: 1,
        backgroundColor:"white",
    },
    send:{
        backgroundColor:COLORS.main,
        padding:10,
        paddingHorizontal:PADDING.horizontal,
        paddingVertical:13,
        borderRadius:50/2,
        alignItems:"center",
        color:"white"

    }
    
})
export default Styles