import React from 'react';
import { TextInput, View } from 'react-native';
import styles from './GlassInputStyles';

const GlassInput = (props: any) => (
  <View style={styles.container}>
    <TextInput 
      {...props} 
      style={[styles.input, props.multiline && styles.textArea]} 
      placeholderTextColor="#555" 
    />
  </View>
);

export default GlassInput;