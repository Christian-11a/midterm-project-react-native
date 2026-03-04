import { create } from 'zustand';
import { Job } from '../types';

interface JobState {
  jobs: Job[];
  savedJobs: Job[];
  appliedHistory: Job[];
  isDarkMode: boolean;
  setJobs: (jobs: Job[]) => void;
  toggleAppearance: () => void;
  toggleSave: (job: Job) => void;
  applyForJob: (job: Job) => void;
  removeSavedJob: (id: string) => void;
}

export const useJobStore = create<JobState>((set) => ({
  jobs: [],
  savedJobs: [],
  appliedHistory: [],
  isDarkMode: true,
  setJobs: (jobs) => set({ jobs }),
  toggleAppearance: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
  toggleSave: (job) => set((state) => {
    const exists = state.savedJobs.some(j => j.id === job.id);
    return {
      savedJobs: exists ? state.savedJobs.filter(j => j.id !== job.id) : [...state.savedJobs, job]
    };
  }),
  applyForJob: (job) => set((state) => ({
    // Add to history and remove from other lists to prevent duplicates
    appliedHistory: [job, ...state.appliedHistory],
    jobs: state.jobs.filter(j => j.id !== job.id),
    savedJobs: state.savedJobs.filter(j => j.id !== job.id)
  })),
  removeSavedJob: (id) => set((state) => ({
    savedJobs: state.savedJobs.filter(j => j.id !== id)
  })),
}));