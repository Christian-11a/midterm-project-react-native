import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { useJobStore } from '../../store/useJobStore';
import JobCard from '../../components/JobCard/JobCard';
import styles from './AppliedHistoryStyles';
import { Job } from '../../types';

const AppliedHistoryScreen = () => {
  const { appliedHistory, isDarkMode } = useJobStore();

  return (
    <View style={[styles.container, !isDarkMode && styles.containerLight]}>
      <Text style={[styles.header, !isDarkMode && styles.textDark]}>Application History</Text>
      
      <FlatList 
        data={appliedHistory}
        keyExtractor={(item: Job) => item.id}
        renderItem={({ item }: { item: Job }) => (
          <View style={{ marginBottom: 15, opacity: 0.9 }}>
            {/* We pass an empty function to onPress 
               so the card UI still looks correct but does nothing.
            */}
            <JobCard 
              job={item} 
              isSaved={false} 
              showBookmark={false} 
              onPress={() => {}} 
            />
            
            <View style={styles.statusRow}>
              <View style={styles.appliedBadge}>
                <Text style={styles.appliedText}>Applied</Text>
              </View>
              <View style={styles.pendingBadge}>
                <Text style={styles.pendingText}>● Pending Review</Text>
              </View>
            </View>
          </View>
        )}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No applications yet.</Text>
          </View>
        }
      />
    </View>
  );
};

export default AppliedHistoryScreen;