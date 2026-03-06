import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: { flex: 1, backgroundColor: '#020617', padding: 15 },
  containerLight: { backgroundColor: '#F8FAFC' },
  header: { flexDirection: 'row', gap: 10, marginBottom: 20, marginTop: 10 },
  search: { 
    flex: 1, 
    backgroundColor: 'rgba(255,255,255,0.05)', 
    borderRadius: 12, 
    padding: 12, 
    color: '#FFF', 
    borderWidth: 1, 
    borderColor: 'rgba(255,255,255,0.1)' 
  },
  searchLight: { 
    backgroundColor: '#FFF', 
    borderColor: '#E2E8F0', 
    color: '#0F172A' 
  },
  appearanceBtn: { 
    backgroundColor: 'rgba(255,255,255,0.1)', 
    padding: 12, 
    borderRadius: 12, 
    justifyContent: 'center',
    alignItems: 'center', 
    width: 50, 
  },
  appearanceBtnLight: {
    backgroundColor: '#E2E8F0', 
  }
});