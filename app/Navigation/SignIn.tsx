import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import styles from '@/constants/Styles'
import CustomHeader from '@/components/CustomHeader'
import Input from '@/components/Input'
import { useState } from 'react'
import Button from '@/components/Button'

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <SafeAreaView style={[styles.container,{padding:0}]} >
      <CustomHeader title="Sign In" text="Sign Up" Custom="Don't have an account?"/>
      <View style={styles.form}>
        <Input name="Email" value={email} IconName="mail-outline" onChangeText={setEmail}/>
        <Input IconName="lock-open-outline" name="Password" isPassword={true} value={password} onChangeText={setPassword}/>
      </View>
      <View style={{flexDirection:'row',paddingHorizontal:35,justifyContent:'space-between',marginBottom:30}}>
        <Text>Remember me</Text>
        <Link href="/Navigation/ForgotPassword">
        <Text style={{ color: '#02DBF5'}}>Forgot Password?</Text>
        </Link>
      </View>
      <Button title="Sign In" navigateTo="../Navigation/SignIn.tsx"/>
    </SafeAreaView>
  )
}

export default SignIn
