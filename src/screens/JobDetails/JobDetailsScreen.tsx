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

  // Helper to render sections with proper wrapping and bold headers
  const renderCleanDescription = (html: string) => {
    // FIXED: Changed styles.description to styles.bulletText
    if (!html) return <Text style={styles.bulletText}>No description provided.</Text>;

    const sections = html.split(/<h3>(.*?)<\/h3>/g).filter(Boolean);
    const elements = [];

    for (let i = 0; i < sections.length; i += 2) {
      const title = sections[i].trim();
      const content = sections[i + 1] || "";

      // Determine Emoji based on title keywords
      let emoji = " ";
      if (title.toLowerCase().includes("requirement")) emoji = " ";
      if (title.toLowerCase().includes("benefit")) emoji = " ";

      elements.push(
        <View key={title} style={styles.sectionGap}>
          <Text style={[styles.boldHeader, !isDarkMode && styles.textDark]}>
            {emoji}{title}:
          </Text>
          {content.split('<li>').map((item, index) => {
            const cleanItem = item.replace(/<\/?[^>]+(>|$)/g, "").trim();
            if (!cleanItem) return null;
            return (
              <View key={index} style={styles.bulletRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={[styles.bulletText, !isDarkMode && styles.descriptionLight]}>
                  {cleanItem}
                </Text>
              </View>
            );
          })}
        </View>
      );
    }
    return elements;
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
          <Text style={[styles.sectionTitle, !isDarkMode && styles.textDark]}>Job Description</Text>
          {renderCleanDescription(job.description)}
        </View>

        <View style={{ height: 120 }} />
      </ScrollView>

      <View style={[styles.bottomBar, !isDarkMode && styles.bottomBarLight]}>
        <Pressable 
          style={[styles.applyBtn, isAlreadyApplied && { backgroundColor: '#475569' }]} 
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