import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#020617', 
    paddingHorizontal: 20, 
    paddingTop: 60 
  },
  containerLight: { 
    backgroundColor: '#F8FAFC' 
  },
  header: { 
    fontSize: 28, 
    fontWeight: 'bold', 
    color: '#FFFFFF', 
    marginBottom: 20 
  },
  textDark: { 
    color: '#0F172A' 
  },
  // FIX: Added the missing container for the empty state
  emptyContainer: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginTop: 100 
  },
  // FIX: Added the missing text style for the empty state
  emptyText: { 
    color: '#64748B', 
    fontSize: 16,
    textAlign: 'center'
  },
  // Keeping this just in case you used it elsewhere
  empty: {
    color: '#64748B',
    textAlign: 'center',
    marginTop: 50
  }
});