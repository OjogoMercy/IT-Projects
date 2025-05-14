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
    marginBottom:20,
    alignSelf:'center'
   
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
 header: {
    backgroundColor: '#1D4ED8',
    paddingVertical: 50,
    paddingHorizontal:20,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  logo: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#02DBF5',
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    color: '#fff',
    marginTop: 15,
  },
  subtitle: {
    fontSize: 14,
    color: '#ddd',
    marginTop: 5,
  },
  line:{width:300,
    height:15,
    backgroundColor:'#2b5be3',
    borderBottomLeftRadius:30,
    borderBottomRightRadius:30,
    alignSelf:'center'
},
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f8f9fd',
        borderRadius: 10,
        paddingHorizontal: 12,
        marginVertical: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 2,height:55
      },
      imput: {
        flex: 1,
        fontSize: 16,
        paddingLeft: 10,
        // height:40
      },
      icon: {
        marginRight: 10,
      },
      form: {
        padding: 20,
        marginTop: 10,
      },
})
export default styles