import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  button: {
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  primary: { backgroundColor: '#8B5CF6' },
  outline: { 
    backgroundColor: 'transparent', 
    borderWidth: 1, 
    borderColor: 'rgba(255,255,255,0.2)' 
  },
  text: { color: '#FFFFFF', fontWeight: 'bold', fontSize: 16 },
  pressed: { opacity: 0.7, transform: [{ scale: 0.98 }] }
});