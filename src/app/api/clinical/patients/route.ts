import { NextRequest, NextResponse } from 'next/server';
import { getDatabase } from '@/lib/mongodb';
import { Patient, PatientCollection } from '@/models/Patient';
import { ObjectId } from 'mongodb';

// Sample patients for demo
const samplePatients: Patient[] = [
  {
    _id: new ObjectId(),
    mrn: "MRN001234",
    name: "Patient A (Demo)",
    age: 67,
    dateOfBirth: new Date('1957-03-15'),
    gender: 'M',
    procedure: "CABG (Coronary Artery Bypass Graft)",
    admissionDate: new Date('2024-01-10'),
    dischargeDate: new Date('2024-01-14'),
    
    riskFactors: ['Type 2 Diabetes Mellitus', 'Hypertension', 'Previous Myocardial Infarction', 'Hyperlipidemia'],
    comorbidities: {
      diabetes: true,
      hypertension: true,
      copd: false,
      cad: true,
      ckd: false,
      previousMI: true,
      atrial_fibrillation: false
    },

    preOperative: {
      ejectionFraction: 45,
      creatinine: 1.2,
      hemoglobin: 12.8,
      bodyMassIndex: 28.5,
      stsRiskScore: 2.4,
      euroScore: 3.1
    },

    operative: {
      procedureType: "Triple vessel CABG",
      approach: 'sternotomy',
      crossClampTime: 78,
      pumpTime: 112,
      complications: []
    },

    postOperative: {
      lengthOfStay: 4,
      complications: [],
      mortality: false,
      readmission30Day: false,
      outcomes: "Successful revascularization, discharged POD 4"
    },

    aiProcessing: {
      extractedVariables: 247,
      totalVariables: 250,
      processingTime: 2.3,
      confidence: 96.8,
      lastProcessed: new Date('2024-01-11'),
      status: 'validated'
    },

    validation: {
      validated: true,
      validatedBy: "Dr. Sarah Chen",
      validationDate: new Date('2024-01-12'),
      notes: "All variables accurately extracted and validated"
    },

    registryData: {
      stsReady: true,
      ncdrReady: true,
      nysCabgReady: true,
      complianceScore: 99.2,
      exportedAt: new Date('2024-01-13')
    },

    costSavings: {
      timeSavedMinutes: 45,
      costSavingsDollars: 2400,
      efficiencyGain: 85
    },

    createdAt: new Date('2024-01-10'),
    updatedAt: new Date('2024-01-12')
  },
  {
    _id: new ObjectId(),
    mrn: "MRN005678",
    name: "Patient B (Demo)",
    age: 72,
    dateOfBirth: new Date('1952-08-22'),
    gender: 'F',
    procedure: "Aortic Valve Replacement",
    admissionDate: new Date('2024-01-08'),
    dischargeDate: new Date('2024-01-15'),
    
    riskFactors: ['Severe Aortic Stenosis', 'Atrial Fibrillation', 'COPD', 'Chronic Kidney Disease'],
    comorbidities: {
      diabetes: false,
      hypertension: true,
      copd: true,
      cad: false,
      ckd: true,
      previousMI: false,
      atrial_fibrillation: true
    },

    preOperative: {
      ejectionFraction: 55,
      creatinine: 1.8,
      hemoglobin: 11.2,
      bodyMassIndex: 24.8,
      stsRiskScore: 4.8,
      euroScore: 6.2
    },

    operative: {
      procedureType: "Bioprosthetic Aortic Valve Replacement",
      approach: 'minimally_invasive',
      crossClampTime: 95,
      pumpTime: 128,
      complications: ["Mild paravalvular leak"]
    },

    postOperative: {
      lengthOfStay: 7,
      complications: ["Mild paravalvular leak"],
      mortality: false,
      readmission30Day: false,
      outcomes: "Valve implanted successfully, monitoring leak"
    },

    aiProcessing: {
      extractedVariables: 238,
      totalVariables: 250,
      processingTime: 2.1,
      confidence: 89.4,
      lastProcessed: new Date('2024-01-09'),
      status: 'needs-review'
    },

    validation: {
      validated: false,
      notes: "Requires review of complication data"
    },

    registryData: {
      stsReady: false,
      ncdrReady: true,
      nysCabgReady: false,
      complianceScore: 87.3
    },

    costSavings: {
      timeSavedMinutes: 38,
      costSavingsDollars: 2100,
      efficiencyGain: 78
    },

    createdAt: new Date('2024-01-08'),
    updatedAt: new Date('2024-01-09')
  },
  {
    _id: new ObjectId(),
    mrn: "MRN009012",
    name: "Patient C (Demo)",
    age: 58,
    dateOfBirth: new Date('1966-11-03'),
    gender: 'M',
    procedure: "PCI (Percutaneous Coronary Intervention)",
    admissionDate: new Date('2024-01-12'),
    
    riskFactors: ['Smoking History', 'Hyperlipidemia', 'Family History CAD'],
    comorbidities: {
      diabetes: false,
      hypertension: false,
      copd: false,
      cad: true,
      ckd: false,
      previousMI: false,
      atrial_fibrillation: false
    },

    preOperative: {
      ejectionFraction: 60,
      creatinine: 0.9,
      hemoglobin: 14.2,
      bodyMassIndex: 26.1,
      stsRiskScore: 1.2
    },

    operative: {
      procedureType: "Single vessel PCI with DES",
      approach: 'minimally_invasive',
      complications: []
    },

    postOperative: {
      lengthOfStay: 1,
      complications: [],
      mortality: false,
      readmission30Day: false,
      outcomes: "Successful PCI, same-day discharge"
    },

    aiProcessing: {
      extractedVariables: 189,
      totalVariables: 250,
      processingTime: 1.8,
      confidence: 92.1,
      lastProcessed: new Date('2024-01-12'),
      status: 'in-progress'
    },

    validation: {
      validated: false
    },

    registryData: {
      stsReady: false,
      ncdrReady: false,
      nysCabgReady: false,
      complianceScore: 65.8
    },

    costSavings: {
      timeSavedMinutes: 42,
      costSavingsDollars: 1800,
      efficiencyGain: 82
    },

    createdAt: new Date('2024-01-12'),
    updatedAt: new Date('2024-01-12')
  }
];

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');
    const limit = parseInt(searchParams.get('limit') || '10');
    const search = searchParams.get('search') || '';
    
    // For demo purposes, return sample data
    let filteredPatients = samplePatients;
    
    if (status) {
      filteredPatients = samplePatients.filter(patient => patient.aiProcessing.status === status);
    }
    
    if (search) {
      filteredPatients = filteredPatients.filter(patient => 
        patient.name.toLowerCase().includes(search.toLowerCase()) ||
        patient.procedure.toLowerCase().includes(search.toLowerCase()) ||
        patient.mrn.toLowerCase().includes(search.toLowerCase())
      );
    }
    
    const paginatedPatients = filteredPatients.slice(0, limit);
    
    // Calculate registry metrics
    const registryMetrics = {
      totalPatients: 2847,
      completionRate: 98.7,
      averageAccuracy: 96.4,
      timeSavingsPerPatient: 45,
      annualCostSavings: 7500000,
      complianceScore: 99.2,
      processingStats: {
        complete: samplePatients.filter(p => p.aiProcessing.status === 'validated').length,
        inProgress: samplePatients.filter(p => p.aiProcessing.status === 'in-progress').length,
        needsReview: samplePatients.filter(p => p.aiProcessing.status === 'needs-review').length,
        averageProcessingTime: 2.1,
        averageConfidence: 92.8
      }
    };
    
    return NextResponse.json({
      patients: paginatedPatients,
      total: filteredPatients.length,
      registryMetrics
    });
  } catch (error) {
    console.error('Error fetching patients:', error);
    return NextResponse.json(
      { error: 'Failed to fetch patients' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { patientId, action, validationData } = body;
    
    if (action === 'validate') {
      // Simulate patient validation
      return NextResponse.json({
        success: true,
        message: 'Patient data validated successfully',
        patient: {
          ...samplePatients[0],
          validation: {
            validated: true,
            validatedBy: validationData.validatedBy || "Dr. Sarah Chen",
            validationDate: new Date(),
            notes: validationData.notes
          },
          aiProcessing: {
            ...samplePatients[0].aiProcessing,
            status: 'validated'
          }
        }
      });
    }
    
    if (action === 'extract') {
      // Simulate AI extraction process
      return NextResponse.json({
        success: true,
        message: 'AI extraction initiated',
        extractionStatus: {
          stage: 'processing',
          progress: 0,
          estimatedCompletion: new Date(Date.now() + 30000) // 30 seconds from now
        }
      });
    }
    
    if (action === 'export') {
      // Simulate registry export
      return NextResponse.json({
        success: true,
        message: 'Registry export completed',
        exportData: {
          stsExported: true,
          ncdrExported: true,
          nysCabgExported: true,
          exportedAt: new Date(),
          recordCount: 1
        }
      });
    }
    
    return NextResponse.json(
      { error: 'Invalid action' },
      { status: 400 }
    );
  } catch (error) {
    console.error('Error processing patient action:', error);
    return NextResponse.json(
      { error: 'Failed to process patient action' },
      { status: 500 }
    );
  }
} 