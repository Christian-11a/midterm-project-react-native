import React from 'react';
import { View } from 'react-native';
import { useJobStore } from '../../store/useJobStore';
import styles from './GradientBgStyles';

const GradientBg = ({ children }: any) => {
  const { isDarkMode } = useJobStore();
  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? '#020617' : '#F1F5F9' }]}>
      {children}
    </View>
  );
};

export default GradientBg;