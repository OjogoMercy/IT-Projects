import { StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";
const styles = StyleSheet.create({
container:{
    flex: 1,
    backgroundColor: Colors.light.background,
    padding:20
},
profile:{
    width: 50,
    height: 50,
    borderRadius: 10,
    elevation:5
},
text:{
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.light.text,
},
row:{
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    justifyContent:'space-between'
},
con:{
    backgroundColor:'#F5F6FF',
    // opacity: 0.5,
    height: 40,
    width: 40,
    borderRadius: 10,
    alignItems:'center',
    justifyContent:'center'
},
box:{
    backgroundColor:'#F5F6FF',
    borderRadius:15,
    height:70,
    width:'90%',
    alignSelf:'center',
    justifyContent:'space-between',
    flexDirection:'row',
    alignItems:'center',
    paddingHorizontal:20,
},

})
export default styles