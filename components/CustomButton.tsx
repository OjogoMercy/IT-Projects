import { Text, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from '@/constants/Styles';
import { useRouter } from 'expo-router';

const CustomButton = ({ title, navigateTo }) => {
  const router = useRouter();

  const handlePress = () => {
    if (navigateTo) {
      router.push(navigateTo);
    }
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handlePress} activeOpacity={0.7}>
      <Text style={styles.buttontext}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
