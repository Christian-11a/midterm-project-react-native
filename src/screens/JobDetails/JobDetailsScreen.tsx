import React from 'react';
import { View, Text, ScrollView, Pressable, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useJobStore } from '../../store/useJobStore';
import { formatSalary } from '../../utils/formatting';
import styles from './JobDetailsStyles';
import { Job } from '../../types';

interface RouteParams {
  route: { params: { job: Job } };
  navigation: any;
}

const JobDetailsScreen = ({ route, navigation }: RouteParams) => {
  const { job } = route.params;
  const { isDarkMode, appliedHistory } = useJobStore();

  const isAlreadyApplied = appliedHistory.some((appliedJob: Job) => appliedJob.id === job.id);

  // Helper to clean HTML and force sections (Requirements, Benefits) to new lines
  const formatDescription = (html: string) => {
    if (!html) return 'No description provided.';
    return html
      .replace(/<h3>/g, '\n\n')        // Add gap before headings
      .replace(/<\/h3>/g, ':\n')      // Add colon and line break after headings
      .replace(/<li>/g, '  • ')       // Bullet point indentation
      .replace(/<\/li>/g, '\n')       // Line break after each bullet
      .replace(/<[^>]*>?/gm, '')      // Strip all remaining HTML tags
      .trim();
  };

  const InfoBadge = ({ icon, label, value }: { icon: any, label: string, value: string }) => (
    <View style={[styles.metaItem, !isDarkMode && styles.metaItemLight]}>
      <Ionicons name={icon} size={20} color="#8B5CF6" />
      <View style={{ marginLeft: 12 }}>
        <Text style={styles.metaLabel}>{label}</Text>
        <Text style={[styles.metaVal, !isDarkMode && styles.textDark]}>{value || 'Not Specified'}</Text>
      </View>
    </View>
  );

  return (
    <View style={[styles.container, !isDarkMode && styles.containerLight]}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
        <View style={styles.headerSection}>
          <Image source={{ uri: job.companyLogo }} style={styles.largeLogo} />
          <Text style={[styles.title, !isDarkMode && styles.textDark]}>{job.title}</Text>
          <Text style={styles.companyName}>{job.companyName}</Text>
          <View style={styles.locationRow}>
            <Ionicons name="location-outline" size={14} color="#64748B" />
            <Text style={styles.locationText}>{job.locations[0] || 'Remote'}</Text>
          </View>
        </View>

        <View style={[styles.salaryCard, !isDarkMode && styles.salaryCardLight]}>
          <View>
            <Text style={styles.salaryLabel}>Offered Salary</Text>
            <Text style={styles.salaryValue}>
              {job.minSalary && job.maxSalary 
                ? `${job.currency} ${formatSalary(job.minSalary)} - ${formatSalary(job.maxSalary)}`
                : "Salary Undisclosed"}
            </Text>
          </View>
          <Ionicons name="cash-outline" size={28} color="#10B981" />
        </View>

        {job.tags && job.tags.length > 0 && (
          <View style={styles.sectionContainer}>
            <Text style={[styles.sectionTitle, !isDarkMode && styles.textDark]}>Skills & Tags</Text>
            <View style={styles.tagWrapper}>
              {job.tags.map((tag: string, index: number) => (
                <View key={index} style={[styles.tag, !isDarkMode && styles.tagLight]}>
                  <Text style={[styles.tagText, !isDarkMode && styles.tagTextLight]}>{tag}</Text>
                </View>
              ))}
            </View>
          </View>
        )}

        <View style={styles.sectionContainer}>
          <Text style={[styles.sectionTitle, !isDarkMode && styles.textDark]}>Job Overview</Text>
          <View style={styles.grid}>
            <InfoBadge icon="briefcase-outline" label="Job Type" value={job.jobType} />
            <InfoBadge icon="home-outline" label="Work Model" value={job.workModel} />
            <InfoBadge icon="ribbon-outline" label="Seniority" value={job.seniorityLevel} />
            <InfoBadge icon="layers-outline" label="Category" value={job.mainCategory} />
          </View>
        </View>

        <View style={styles.sectionContainer}>
          <Text style={[styles.sectionTitle, !isDarkMode && styles.textDark]}>Job Details</Text>
          <Text style={[styles.description, !isDarkMode && styles.descriptionLight]}>
            {formatDescription(job.description)}
          </Text>
        </View>

        <View style={{ height: 120 }} />
      </ScrollView>

      <View style={[styles.bottomBar, !isDarkMode && styles.bottomBarLight]}>
        <Pressable 
          style={[
            styles.applyBtn, 
            isAlreadyApplied && { backgroundColor: '#475569' } 
          ]} 
          disabled={isAlreadyApplied}
          onPress={() => navigation.navigate('ApplicationForm', { job, fromSaved: false })}
        >
          <Text style={styles.applyText}>
            {isAlreadyApplied ? '✓ Applied Successfully' : 'Apply for this position'}
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default JobDetailsScreen;