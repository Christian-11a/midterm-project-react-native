import { StyleSheet } from 'react-native';
export default StyleSheet.create({
  container: { flex: 1, backgroundColor: '#020617', padding: 20 },
  containerLight: { backgroundColor: '#F8FAFC' },
  title: { color: '#FFF', fontSize: 20, fontWeight: 'bold', marginBottom: 20 },
  textDark: { color: '#0F172A' },
  input: { backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: 12, padding: 15, color: '#FFF', marginBottom: 15, borderWidth: 1, borderColor: 'rgba(255,255,255,0.1)' },
  inputLight: { backgroundColor: '#FFF', borderColor: '#E2E8F0', color: '#0F172A' },
  area: { height: 120, textAlignVertical: 'top' },
  btn: { backgroundColor: '#8B5CF6', padding: 16, borderRadius: 12, alignItems: 'center', marginTop: 10 },
  btnText: { color: '#FFF', fontWeight: 'bold' }
});