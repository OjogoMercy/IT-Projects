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
inputbox:{
    width:'100%',
    borderWidth:1,
    borderColor:'#bbb',
    borderRadius:10,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    marginVertical:10,
    flex:1,
    paddingHorizontal:10,
    
},
input:{
flex:1,
},
button:{
    backgroundColor:'black',
    justifyContent:'center',
    alignItems:'center',
    width:'100%',
    height:50,
    borderRadius:15,
    marginBottom:20
   
},
buttontext:{
    fontSize:16,
    color:'white'
},
google:{
    height:20,
    width:20,
},
row1:{
    flexDirection:'row',
    width:'35%',
    alignSelf:'center',
    alignItems:'center',
    justifyContent:'space-between',
    marginVertical:15
},
circle:{
    backgroundColor:'white',
    height:30,
    width:30,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:20,
    elevation:2
},
})
export default styles