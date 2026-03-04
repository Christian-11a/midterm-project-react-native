export interface Job {
  id: string;
  title: string;
  mainCategory: string;
  companyName: string;
  companyLogo: string;
  jobType: string;
  workModel: string;
  seniorityLevel: string;
  minSalary: number | null;
  maxSalary: number | null;
  currency: string;
  locations: string[];
  tags: string[];
  description: string;
  pubDate: number;
  expiryDate: number;
  applicationLink: string;
  guid: string;
}

export type RootStackParamList = {
  JobFinder: undefined;
  JobDetails: { job: Job };
  SavedJobs: undefined;
  AppliedHistory: undefined;
  ApplicationForm: { job: Job; fromSaved: boolean };
};