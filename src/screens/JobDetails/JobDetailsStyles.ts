import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: { flex: 1, backgroundColor: '#020617' },
  containerLight: { backgroundColor: '#F8FAFC' },
  scrollContent: { paddingHorizontal: 20 },
  
  headerSection: { alignItems: 'center', marginTop: 30, marginBottom: 25 },
  largeLogo: { width: 100, height: 100, borderRadius: 24, backgroundColor: '#FFF', marginBottom: 15 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#FFF', textAlign: 'center' },
  textDark: { color: '#0F172A' },
  companyName: { color: '#8B5CF6', fontSize: 18, fontWeight: '600', marginTop: 4 },
  locationRow: { flexDirection: 'row', alignItems: 'center', marginTop: 8 },
  locationText: { color: '#64748B', marginLeft: 5, fontSize: 14 },

  salaryCard: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    backgroundColor: '#1E293B', 
    padding: 20, 
    borderRadius: 20, 
    marginBottom: 25 
  },
  salaryCardLight: { backgroundColor: '#FFFFFF', elevation: 3 },
  salaryLabel: { color: '#64748B', fontSize: 12, marginBottom: 4 },
  salaryValue: { color: '#10B981', fontSize: 18, fontWeight: 'bold' },

  sectionContainer: { marginBottom: 20 },
  sectionTitle: { fontSize: 20, fontWeight: 'bold', color: '#FFF', marginBottom: 15 },
  
  grid: { gap: 12 },
  metaItem: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: 'rgba(255,255,255,0.03)', 
    padding: 15, 
    borderRadius: 15 
  },
  metaItemLight: { backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#F1F5F9' },
  metaLabel: { color: '#64748B', fontSize: 12 },
  metaVal: { color: '#FFF', fontWeight: 'bold', fontSize: 15 },

  // CLEAN TEXT STYLES
  sectionGap: {
    marginBottom: 12,
  },
  boldHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 6,
  },
  bulletRow: {
    flexDirection: 'row',
    marginBottom: 4,
    paddingLeft: 4,
  },
  bulletPoint: {
    width: 15,
    fontSize: 16,
    color: '#8B5CF6',
    lineHeight: 22,
  },
  bulletText: {
    flex: 1,
    color: '#94A3B8',
    fontSize: 15,
    lineHeight: 22,
  },
  descriptionLight: { 
    color: '#475569' 
  },

  bottomBar: { 
    position: 'absolute', 
    bottom: 0, 
    left: 0, 
    right: 0, 
    padding: 20, 
    backgroundColor: '#020617', 
    borderTopWidth: 1, 
    borderTopColor: 'rgba(255,255,255,0.1)' 
  },
  bottomBarLight: { backgroundColor: '#FFFFFF', borderTopColor: '#E2E8F0' },
  applyBtn: { backgroundColor: '#8B5CF6', padding: 18, borderRadius: 16, alignItems: 'center' },
  applyText: { color: '#FFF', fontWeight: 'bold', fontSize: 16 }
});