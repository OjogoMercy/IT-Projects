import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import styles from '@/constants/Styles'
import CustomHeader from '@/components/CustomHeader'
import Input from '@/components/Input'
import { useState } from 'react'
import Button from '@/components/Button'

const explore = () => {
  // const [fullName, setFullName] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [confirmPassword, setConfirmPassword] = useState('');
  // const [secureTextEntry, setSecureTextEntry] = useState(true);

  return (
    <SafeAreaView style={[styles.container,{padding:0}]} >
      <CustomHeader title="Register new Account" Custom="Already have an Account?" text="Sign Up"/>
      <View style={styles.form}>
      <Input IconName="person-outline" name="Full Name" />
      <Input IconName="mail-outline" name="Email"/>
      <Input IconName="lock-open-outline" name="Password" isPassword={true}/>
      <Input IconName="lock-open-outline" name="Confirm Password" isPassword={true}/>
      </View>
      <Button title="Sign In" navigateTo="/Navigation/SignIn" />;
    </SafeAreaView>
  )
}

export default explore
