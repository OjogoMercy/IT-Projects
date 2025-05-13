import { StyleSheet, Text, View,SafeAreaView, TouchableOpacity,Image,StatusBar, ScrollView } from 'react-native'
import React from 'react'
import styles from '@/constants/Styles'
import { AntDesign } from '@expo/vector-icons'
import CustomTextInputs from '@/components/CustomTextInputs'
import { useState } from 'react'
import CustomButton from '@/components/CustomButton'
import images from '@/constants/images'

const Login = () => {
const [email,setEmail] = useState("")
const [name,setName] = useState("")
const [password, setPassword] = useState("")
const [confirm,setConfirm] = useState("")

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'transparent'} barStyle={'dark-content'} translucent/>
      <TouchableOpacity style={{marginTop:10}} activeOpacity={0.5}>
      <AntDesign name='left' size={20} color={'black'}/>
      </TouchableOpacity>
      <Text  style={[styles.text, {fontSize:20,marginTop:30}]}>Welcome</Text>
      <Text style={{opacity:0.5,marginTop:10}}>By Creating an Account you can start a new one with Quizzly</Text>
    <ScrollView style={{flexGrow: 0,padding: 0,marginVertical: 30,}}
       showsVerticalScrollIndicator={false}>
      <CustomTextInputs 
      placeholder='Enter your name'
      IconName={'person-outline'}
      IconSize={20}
      value={name}
      onChangeText={setName}
      />
      <CustomTextInputs 
      placeholder='Enter your email'
      IconName={'mail-outline'}
      IconSize={20}
      value={email}
      onChangeText={setEmail}
      />
      <CustomTextInputs 
      placeholder='Enter your Password'
      IconName={'lock-closed-outline'}
      IconSize={20}
      value={password}
      secureTextEntry={true}
      onChangeText={setPassword}
      />
      <CustomTextInputs 
      placeholder='Enter your confirm Password'
      IconName={'lock-closed-outline'}
      IconSize={20}
      value={confirm}
      secureTextEntry={true}
      onChangeText={setConfirm}
      />
    </ScrollView>
       <CustomButton title="Create Account"/>
       <View style={styles.row1}> 
       <View style={styles.circle}>
       <Image source={images.facebook} style={styles.google}/>
       </View>
      <View style={styles.circle}>
      <Image source={images.google} style={styles.google}/>
      </View>
       <View style={styles.circle}>
       <Image source={images.apple} style={styles.google}/>
       </View>
       </View>
      <Text style={{textAlign:'center',color:'#666',fontSize:14}}>Already use Quizzly? <Text style={{color:'black',fontWeight:'bold'}}>Log in</Text></Text>
    </SafeAreaView>
  )
}

export default Login
