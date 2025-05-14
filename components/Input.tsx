import { StyleSheet, Text, View ,TextInput,TouchableOpacity} from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import styles from '@/constants/Styles'
import { useState } from 'react'

const Input = ({value,placeholder,keyboardType,onChangeText,IconName}) => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [secureTextEntry, setSecureTextEntry] = useState(true);

    const [hidePassword,setHidePassword] = useState(secureTextEntry)
    const togglePasswordVisibility = () => {
       setHidePassword(!hidePassword)
    }
  return (                                  
    
    <View>
        <Text>Full Name</Text>
        <View style={styles.inputContainer}>
    <Ionicons name={IconName} size={20} color="#000" style={styles.icon} />
    <TextInput
            value={value}
            placeholder={placeholder}
            secureTextEntry={hidePassword}
            style={styles.input}
            keyboardType={keyboardType}
            placeholderTextColor={'#888'}
            onChangeText={onChangeText}
    />
     {secureTextEntry && (
        <TouchableOpacity onPress={togglePasswordVisibility}>
          <Ionicons
            name={hidePassword ? 'eye-off' : 'eye'}
            size={20}
            color="#777"
          />
        </TouchableOpacity>)}
  </View>
        </View>
  );
}

export default Input

