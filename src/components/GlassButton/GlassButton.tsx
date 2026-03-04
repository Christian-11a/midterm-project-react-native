import React from 'react';
import { Pressable, Text } from 'react-native';
import styles from './GlassButtonStyles';

interface Props {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'outline';
}

const GlassButton = ({ title, onPress, variant = 'primary' }: Props) => (
  <Pressable 
    style={({ pressed }) => [
      styles.button, 
      variant === 'outline' ? styles.outline : styles.primary,
      pressed && styles.pressed
    ]} 
    onPress={onPress}
  >
    <Text style={styles.text}>{title}</Text>
  </Pressable>
);

export default GlassButton;