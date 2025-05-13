import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '@/constants/Styles'

const CustomButton = ({title}) => {
  return (
    <TouchableOpacity style={styles.button}  activeOpacity={0.7}>
      <Text style={styles.buttontext}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton

