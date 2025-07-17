import { StyleSheet } from "react-native";
import { COLORS, PADDING } from "../../outilsAnd/constants";

const dashboardStyles = StyleSheet.create({
    header:{
        flexDirection:'row',
        justifyContent:"space-between",
        alignItems:"center",
        paddingHorizontal:PADDING.horizontal,
        paddingVertical:PADDING.verticale,
        backgroundColor:'white',
    },
    userImg:{
        height : 50,
        width:50,
        borderRadius:50/2,
    },
    userName:{
        fontSize:16,
        fontWeight:"bold",
        backgroundColor:"black",
        borderRadius:100,
        padding:10,
        color:"white"   
    },

    userFont:{
        fontSize:16,
        fontWeight:"bold",
    },
    userSize:{
        fontSize:30,
        fontWeight:"bold",
        marginTop:15
    },
    input:{
        paddingLeft:10,
        color:"white",
        fontSize:15
    },

    ContainerInput:{
        flexDirection:'row',
        backgroundColor:'#eee',
        alignItems:"center",
        backgroundColor:"gray",
        borderRadius:20,
        margin:15,
        padding:10
    },

        
    //styliser la flatListe
    scrollableList:{
        paddingHorizontal:PADDING.horizontal,
        paddingVertical:PADDING.verticale

    },

    title:{
        paddingHorizontal:PADDING.horizontal,
        paddingVertical:PADDING.verticale
    },
    titleBold:{
        fontWeight:"bold"
    },
    title_space_between:{
        paddingHorizontal:PADDING.horizontal,
        paddingVertical:PADDING.verticale,
        flexDirection:"row",
        justifyContent:"space-between",
        marginTop:15
    },
    link:{
        color:COLORS.main
    },
    docteurContainer:{
        paddingHorizontal:PADDING.horizontal,
        paddingVertical:PADDING.verticale
    },
    DocteurCarte:{
        flex:1,
        flexDirection:"row",
        backgroundColor:"gray",
        elevation:5,
        padding:10,
        paddingHorizontal:PADDING.horizontal,
        paddingVertical:PADDING.verticale,
        marginBottom:20,
        borderRadius:5
    },
    DocteurImg:{
        width:80,
        height:80,
        borderRadius:80/2,
        marginRight:15

    },
    DocteurInfo:{
        flexDirection:"column"
    },
    DocteurName:{
        fontWeight:'bold',
        fontSize:16,
        marginBottom:15
    },
    DocteurSpecialite:{
        backgroundColor:COLORS.main,
        padding:5,
        borderRadius:15,
        fontSize:14,
        color:"white",
        paddingHorizontal:PADDING.horizontal

    },

})
export default dashboardStyles