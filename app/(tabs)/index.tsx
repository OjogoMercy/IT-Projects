import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const index = () => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize:30}}>Muizat you can start your design in this screen, and please do not change anything in the folder structure. God bless </Text>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  container:{
    padding:20
  },
})