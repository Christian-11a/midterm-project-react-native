import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, Alert, ScrollView } from 'react-native';
import { useJobStore } from '../../store/useJobStore';
import { validateForm } from '../../utils/validation';
import styles from './ApplicationFormStyles';

export default function ApplicationFormScreen({ route, navigation }: any) {
  const { job, fromSaved } = route.params;
  const { applyForJob, isDarkMode } = useJobStore();
  const [form, setForm] = useState({ name: '', email: '', contact: '', bio: '' });

  const handleApply = () => {
    const error = validateForm(form.name, form.email, form.contact, form.bio);
    if (error) return Alert.alert("Error", error);

    applyForJob(job);
    Alert.alert("Success", "Application Submitted!", [
      { text: "OK", onPress: () => fromSaved ? navigation.navigate('JobFinder') : navigation.goBack() }
    ]);
  };

  return (
    <ScrollView style={[styles.container, !isDarkMode && styles.containerLight]}>
      <Text style={[styles.title, !isDarkMode && styles.textDark]}>Applying for {job.title}</Text>
      <TextInput placeholder="Full Name" style={[styles.input, !isDarkMode && styles.inputLight]} placeholderTextColor="#64748B" onChangeText={t => setForm({...form, name: t})} />
      <TextInput placeholder="Email" style={[styles.input, !isDarkMode && styles.inputLight]} placeholderTextColor="#64748B" onChangeText={t => setForm({...form, email: t})} />
      <TextInput placeholder="Contact (09XXXXXXXXX)" style={[styles.input, !isDarkMode && styles.inputLight]} placeholderTextColor="#64748B" onChangeText={t => setForm({...form, contact: t})} />
      <TextInput placeholder="Why should we hire you?" multiline style={[styles.input, styles.area, !isDarkMode && styles.inputLight]} placeholderTextColor="#64748B" onChangeText={t => setForm({...form, bio: t})} />
      <Pressable style={styles.btn} onPress={handleApply}>
        <Text style={styles.btnText}>Submit Application</Text>
      </Pressable>
    </ScrollView>
  );
}