import { ObjectId } from 'mongodb';

export interface Document {
  _id?: ObjectId;
  title: string;
  authors: string[];
  abstract: string;
  fullText?: string;
  journal?: string;
  publicationDate?: string;
  doi?: string;
  keywords?: string[];
  aiAnalysis?: {
    relevanceScore: number;
    analysisDate: Date;
    inclusion: 'include' | 'exclude' | 'pending';
    reasoning?: string;
    confidence: number;
  };
  humanReview?: {
    decision: 'include' | 'exclude' | 'pending';
    reviewer: string;
    reviewDate: Date;
    notes?: string;
    criteria?: {
      populationRelevant: boolean;
      interventionApplicable: boolean;
      outcomesMeasured: boolean;
      studyDesignAppropriate: boolean;
    };
  };
  projectId?: ObjectId;
  uploadedAt: Date;
  status: 'ai-processing' | 'ai-complete' | 'human-review' | 'complete' | 'excluded';
}

export interface StudyCriteria {
  population: string;
  intervention: string;
  comparator: string;
  outcomes: string;
  studyDesign: string[];
  exclusionCriteria: string[];
}

export const DocumentCollection = 'documents'; 