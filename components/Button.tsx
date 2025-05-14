import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router';
import styles from '@/constants/Styles'

const Button = ({title,navigateTo}) => {
    const router = useRouter();
    const handlePress = () => {
        if (navigateTo) {
          router.push(navigateTo);
        }
      };
  return (
    <TouchableOpacity style={[styles.button ,{backgroundColor:'#1D4ED8',borderRadius:10,width:'90%'}]} onPress={handlePress} activeOpacity={0.7}>
      <Text style={styles.buttontext}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button
