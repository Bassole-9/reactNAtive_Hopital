import { StyleSheet } from "react-native";
import { PADDING } from "../../outilsAnd/constants";

const Styles = StyleSheet.create({
    root:{
        paddingHorizontal:PADDING.horizontal,
        paddingVertical:PADDING.verticale
    },
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 , backgroundColor:'#B0C4DE' },
  image: { width: 200, height: 200, marginBottom: 20 ,borderRadius:10},
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  titleMini : {fontSize:16,fontWeight:'bold',marginTop:10, paddingBottom:29},
  subtitle: { fontSize: 16, textAlign: 'center', marginBottom: 20 },
})
export default Styles