import React, { useState } from 'react';
import { View, TextInput, StyleSheet,TouchableOpacity} from 'react-native';
import styles from '@/constants/Styles';
import { Ionicons } from '@expo/vector-icons';


const CustomTextInputs = ({value,placeholder,secureTextEntry = false,IconName,IconSize,keyboardType,onChangeText}) => {
   const [hidePassword,setHidePassword] = useState(secureTextEntry)
     const togglePasswordVisibility = () => {
        setHidePassword(!hidePassword)
     }

    return(
        <View style={styles.inputbox}>
            <Ionicons name={IconName} size={IconSize} color={'black'}/>
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
        </TouchableOpacity>
      )}
        </View>
    );
}
export default CustomTextInputs