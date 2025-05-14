import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import styles from '@/constants/Styles'
import CustomHeader from '@/components/CustomHeader'
import Input from '@/components/Input'

const explore = () => {
  return (
    <SafeAreaView style={[styles.container,{padding:0}]} >
      <CustomHeader title="Register new Account" Custom="Already have an Account?" text="Sign Up"/>
      <View style={styles.form}>
      <Input IconName="person-outline"/>
      </View>
   
      <Link href="/Navigation/SignIn"><Text>Go to Register</Text></Link>
    </SafeAreaView>
  )
}

export default explore
