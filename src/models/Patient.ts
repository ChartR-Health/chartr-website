import { ObjectId } from 'mongodb';

export interface Patient {
  _id?: ObjectId;
  mrn: string;
  name: string;
  age: number;
  dateOfBirth: Date;
  gender: 'M' | 'F' | 'Other';
  procedure: string;
  surgeonId?: ObjectId;
  admissionDate: Date;
  dischargeDate?: Date;
  
  // Risk factors and comorbidities
  riskFactors: string[];
  comorbidities: {
    diabetes: boolean;
    hypertension: boolean;
    copd: boolean;
    cad: boolean;
    ckd: boolean;
    previousMI: boolean;
    atrial_fibrillation: boolean;
  };

  // Pre-operative data
  preOperative: {
    ejectionFraction?: number;
    creatinine?: number;
    hemoglobin?: number;
    bodyMassIndex?: number;
    stsRiskScore?: number;
    euroScore?: number;
  };

  // Operative data
  operative: {
    procedureType: string;
    approach: 'sternotomy' | 'minimally_invasive' | 'robotic';
    crossClampTime?: number;
    pumpTime?: number;
    complications: string[];
  };

  // Post-operative outcomes
  postOperative: {
    lengthOfStay?: number;
    complications: string[];
    mortality: boolean;
    readmission30Day: boolean;
    outcomes: string;
  };

  // AI processing data
  aiProcessing: {
    extractedVariables: number;
    totalVariables: number;
    processingTime: number; // in seconds
    confidence: number;
    lastProcessed: Date;
    status: 'complete' | 'in-progress' | 'needs-review' | 'validated';
  };

  // Human validation
  validation: {
    validated: boolean;
    validatedBy?: string;
    validationDate?: Date;
    notes?: string;
  };

  // Registry data
  registryData: {
    stsReady: boolean;
    ncdrReady: boolean;
    nysCabgReady: boolean;
    complianceScore: number;
    exportedAt?: Date;
  };

  // Financial impact
  costSavings: {
    timeSavedMinutes: number;
    costSavingsDollars: number;
    efficiencyGain: number;
  };

  createdAt: Date;
  updatedAt: Date;
}

export const PatientCollection = 'patients'; 