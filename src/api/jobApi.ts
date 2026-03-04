import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { Job } from '../types';

export const fetchJobs = async (): Promise<Job[]> => {
  try {
    const response = await fetch('https://empllo.com/api/v1');
    const data = await response.json();
    return data.jobs.map((job: any) => ({
      ...job,
      id: uuidv4(),
    }));
  } catch (error) {
    console.error(error);
    return [];
  }
};