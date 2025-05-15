import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import styles from '@/constants/Styles'
import CustomHeader from '@/components/CustomHeader'
import Input from '@/components/Input'
import { useState } from 'react'
import Button from '@/components/Button'

const SignIn = () => {
  return (
    <SafeAreaView style={[styles.container,{padding:0}]} >
      <CustomHeader title="Sign In" text="Sign Up" Custom="Don't have an account?"/>
    </SafeAreaView>
  )
}

export default SignIn
