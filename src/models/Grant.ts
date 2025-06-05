import { ObjectId } from 'mongodb';

export interface Grant {
  _id?: ObjectId;
  title: string;
  agency: string;
  program: string;
  fundingAmount: {
    min?: number;
    max?: number;
    typical?: number;
  };
  deadline: Date;
  description: string;
  keywords: string[];
  eligibility: {
    institutions: string[];
    careerStage: string[];
    citizenshipRequired?: boolean;
    geographicRestrictions?: string[];
  };
  
  // AI matching data
  aiAnalysis: {
    matchScore: number;
    reasoning: string[];
    relevantKeywords: string[];
    confidence: number;
    lastAnalyzed: Date;
  };

  // Application requirements
  requirements: {
    preApplicationRequired: boolean;
    letterOfIntent: boolean;
    collaboratorRequired: boolean;
    institutionalSupport: boolean;
    costSharing: boolean;
    maxPages?: number;
    requiredSections: string[];
  };

  // Timeline
  timeline: {
    announcementDate: Date;
    deadlineDate: Date;
    awardNotificationDate?: Date;
    projectStartDate?: Date;
    projectDuration: string; // e.g., "3 years"
  };

  // Contact information
  contact: {
    programOfficer?: string;
    email?: string;
    phone?: string;
  };

  // Metadata
  source: string; // NIH, NSF, etc.
  url: string;
  cfda?: string;
  lastUpdated: Date;
  isActive: boolean;
  
  // User interaction
  bookmarked?: boolean;
  applied?: boolean;
  notes?: string;

  createdAt: Date;
  updatedAt: Date;
}

export interface ResearchProfile {
  _id?: ObjectId;
  userId: ObjectId;
  researchInterests: string[];
  keywords: string[];
  institution: string;
  department: string;
  careerStage: 'graduate' | 'postdoc' | 'junior_faculty' | 'senior_faculty';
  citizenship: string;
  preferredFundingAgencies: string[];
  fundingRange: {
    min: number;
    max: number;
  };
  aiPreferences: {
    matchThreshold: number;
    notificationFrequency: 'daily' | 'weekly' | 'monthly';
    autoBookmark: boolean;
  };
  createdAt: Date;
  updatedAt: Date;
}

export const GrantCollection = 'grants';
export const ResearchProfileCollection = 'research_profiles'; 