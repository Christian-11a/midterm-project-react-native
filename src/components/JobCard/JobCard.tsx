import React from 'react';
import { View, Text, Pressable, Image, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { useJobStore } from '../../store/useJobStore';
import styles from './JobCardStyles';
import { Job } from '../../types';

interface Props {
  job: Job;
  isSaved: boolean;
  onPress: () => void;
  showBookmark?: boolean; 
}

const JobCard = ({ job, isSaved, onPress, showBookmark = true }: Props) => {
  const { isDarkMode, toggleSave } = useJobStore();

  const handleBookmark = () => {
    if (isSaved) {
      Alert.alert(
        "Remove Bookmark",
        `Are you sure you want to remove "${job.title}"?`,
        [
          { text: "Cancel", style: "cancel" },
          { text: "Remove", style: "destructive", onPress: () => toggleSave(job) }
        ]
      );
    } else {
      toggleSave(job);
    }
  };

  return (
    <Pressable 
      style={[styles.card, !isDarkMode && styles.cardLight]} 
      onPress={onPress}
      // If showBookmark is false (History mode), we can disable the press effect
      disabled={!showBookmark} 
    >
      <View style={styles.header}>
        <Image source={{ uri: job.companyLogo }} style={styles.logo} />
        <View style={styles.info}>
          <Text style={[styles.title, !isDarkMode && styles.textLight]}>{job.title}</Text>
          <Text style={styles.company}>{job.companyName}</Text>
          
          <View style={styles.tagRow}>
            {job.tags && job.tags.slice(0, 2).map((tag: string, index: number) => (
              <View key={index} style={[styles.miniTag, !isDarkMode && styles.miniTagLight]}>
                <Text style={[styles.miniTagText, !isDarkMode && styles.miniTagTextLight]}>{tag}</Text>
              </View>
            ))}
          </View>
        </View>
        
        {showBookmark && (
          <TouchableOpacity onPress={handleBookmark} style={styles.bookmark}>
            <Ionicons 
              name={isSaved ? "bookmark" : "bookmark-outline"} 
              size={24} 
              color={isSaved ? '#8B5CF6' : (isDarkMode ? '#94A3B8' : '#64748B')} 
            />
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.footer}>
        <Text style={styles.tag}>{job.jobType} • {job.workModel}</Text>
        <Text style={styles.salary}>
          {job.minSalary ? `${job.currency} ${job.minSalary.toLocaleString()}` : 'Negotiable'}
        </Text>
      </View>
    </Pressable>
  );
};

export default JobCard;