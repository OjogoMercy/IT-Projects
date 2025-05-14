import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '@/constants/Styles'

const Button = ({title}) => {
  return (
    <TouchableOpacity style={[styles.button ,{backgroundColor:'#1D4ED8',borderRadius:10,width:'90%'}]}  activeOpacity={0.7}>
      <Text style={styles.buttontext}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button
