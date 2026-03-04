import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  card: { backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: 16, padding: 16, marginBottom: 12, borderWidth: 1, borderColor: 'rgba(255,255,255,0.1)' },
  cardLight: { backgroundColor: '#FFFFFF', borderColor: '#E2E8F0', elevation: 4, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4 },
  header: { flexDirection: 'row', alignItems: 'flex-start' },
  logo: { width: 45, height: 45, borderRadius: 10, backgroundColor: '#FFF' },
  info: { flex: 1, marginLeft: 12 },
  title: { color: '#FFFFFF', fontWeight: 'bold', fontSize: 16 },
  textLight: { color: '#0F172A' },
  company: { color: '#64748B', fontSize: 13, marginTop: 2 },
  
  // Tag Styles for the Main List
  tagRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 6, marginTop: 8 },
  miniTag: { backgroundColor: 'rgba(139, 92, 246, 0.1)', paddingHorizontal: 8, paddingVertical: 2, borderRadius: 6 },
  miniTagLight: { backgroundColor: '#F3F4F6' },
  miniTagText: { color: '#A78BFA', fontSize: 10, fontWeight: '600' },
  miniTagTextLight: { color: '#4B5563' },
  moreText: { color: '#64748B', fontSize: 10, alignSelf: 'center' },

  bookmark: { padding: 4 },
  footer: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 15, alignItems: 'center' },
  tag: { color: '#8B5CF6', fontWeight: '600', fontSize: 12 },
  salary: { color: '#10B981', fontWeight: 'bold', fontSize: 14 }
});