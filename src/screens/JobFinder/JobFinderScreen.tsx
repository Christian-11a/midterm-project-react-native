import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { useJobStore } from '../../store/useJobStore';
import { fetchJobs } from '../../api/jobApi';
import JobCard from '../../components/JobCard/JobCard';
import styles from './JobFinderStyles';

export default function JobFinderScreen({ navigation }: any) {
  const { jobs, setJobs, savedJobs, isDarkMode, toggleAppearance } = useJobStore();
  const [query, setQuery] = useState('');

  useEffect(() => { fetchJobs().then(setJobs); }, []);

  const filtered = jobs.filter(j => 
    j.title.toLowerCase().includes(query.toLowerCase()) || 
    j.companyName.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <View style={[styles.container, !isDarkMode && styles.containerLight]}>
      <View style={styles.header}>
        <TextInput 
          style={[styles.search, !isDarkMode && styles.searchLight]}
          placeholder="Search jobs..."
          placeholderTextColor={isDarkMode ? "#94A3B8" : "#64748B"}
          onChangeText={setQuery}
        />
        <TouchableOpacity onPress={toggleAppearance} style={styles.appearanceBtn}>
          <Text>{isDarkMode ? '🌙' : '☀️'}</Text>
        </TouchableOpacity>
      </View>
      <FlatList 
        data={filtered}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <JobCard 
            job={item} 
            isSaved={savedJobs.some(s => s.id === item.id)}
            onPress={() => navigation.navigate('JobDetails', { job: item })}
          />
        )}
      />
    </View>
  );
}