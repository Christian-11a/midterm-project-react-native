import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { useJobStore } from '../../store/useJobStore';
import JobCard from '../../components/JobCard/JobCard';
import styles from './SavedJobsStyles';

const SavedJobsScreen = ({ navigation }: any) => {
  const { savedJobs, isDarkMode } = useJobStore();

  return (
    <View style={[styles.container, !isDarkMode && styles.containerLight]}>
      <Text style={[styles.header, !isDarkMode && styles.textDark]}>Bookmarks</Text>
      
      <FlatList 
        data={savedJobs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <JobCard 
            job={item} 
            isSaved={true} 
            onPress={() => navigation.navigate('JobDetails', { job: item })}
          />
        )}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>You haven't bookmarked any jobs yet.</Text>
          </View>
        }
      />
    </View>
  );
};

export default SavedJobsScreen;