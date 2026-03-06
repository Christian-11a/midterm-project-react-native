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
  statusRow: { 
    flexDirection: 'row', 
    gap: 8, 
    marginTop: -10, 
    marginLeft: 10, 
    marginBottom: 15 
  },
  appliedBadge: { 
    backgroundColor: 'rgba(139, 92, 246, 0.1)', 
    paddingHorizontal: 8, 
    paddingVertical: 4, 
    borderRadius: 6 
  },
  appliedText: { 
    color: '#8B5CF6', 
    fontSize: 11, 
    fontWeight: 'bold' 
  },
  pendingBadge: { 
    backgroundColor: 'rgba(245, 158, 11, 0.1)', 
    paddingHorizontal: 8, 
    paddingVertical: 4, 
    borderRadius: 6 
  },
  pendingText: { 
    color: '#F59E0B', 
    fontSize: 11, 
    fontWeight: 'bold' 
  },
 
  emptyContainer: { 
    alignItems: 'center', 
    marginTop: 100 
  },
  emptyText: { 
    color: '#64748B', 
    fontSize: 16,
    textAlign: 'center'
  }
});