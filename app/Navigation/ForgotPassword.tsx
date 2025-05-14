import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import styles from '@/constants/Styles'
import CustomHeader from '@/components/CustomHeader'
import Input from '@/components/Input'
import { useState } from 'react'
import Button from '@/components/Button'

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  return (
    <SafeAreaView style={[styles.container,{padding:0}]} >
    <CustomHeader title="Forgot Password" Custom="Forgot Your pPssword Do'nt Worry"/>
    <View style={styles.form}>
      <Input name="Email" value={email} IconName="mail-outline" onChangeText={setEmail}/>
    </View>
    <Button title="Recover Password"/>
  </SafeAreaView>
  )
}

export default ForgotPassword
