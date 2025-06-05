export interface MockPatient {
  id: string;
  demographics: {
    name: string;
    age: number;
    sex: string;
    mrn: string;
    surgeryDate: string;
    surgeryType: string;
  };
  notes: {
    admission: string;
    hAndP: string;
    echo: string;
    labs: string;
    discharge: string;
  };
  extractedVariables: {
    [key: string]: {
      value: any;
      source: string | string[];
      confidence: number;
      dataType: 'structured' | 'extracted'; // structured = EMR fields, extracted = AI from notes
    };
  };
  registryMappings: {
    sts: { [key: string]: any };
    nys: { [key: string]: any };
  };
}

export const mockPatients: { [key: string]: MockPatient } = {
  patient_a: {
    id: 'patient_a',
    demographics: {
      name: 'Mrs. Margaret Johnson',
      age: 67,
      sex: 'Female',
      mrn: 'MRN-2024-001',
      surgeryDate: '2024-03-15',
      surgeryType: 'CABG'
    },
    notes: {
      admission: `ADMISSION NOTE - 03/15/2024

CHIEF COMPLAINT: Elective CABG surgery

HISTORY OF PRESENT ILLNESS:
67-year-old female with diabetes mellitus on insulin, hypertension, and chronic lung disease presents for elective coronary artery bypass grafting. Patient has been experiencing increasing chest pain over the past 3 months despite optimal medical therapy.

VITAL SIGNS:
Height: 165 cm
Weight: 78 kg
BMI: 28.7

PAST MEDICAL HISTORY:
- Diabetes mellitus, insulin-dependent
- Hypertension
- Chronic obstructive pulmonary disease
- Previous myocardial infarction 6 months ago

SOCIAL HISTORY:
- Current smoker, 1 pack per day for 20 years
- Lives independently
- No known COVID-19 exposure or history

ALLERGIES: NKDA

ASSESSMENT AND PLAN:
Patient scheduled for elective CABG surgery tomorrow morning. Pre-operative workup complete.`,

      hAndP: `HISTORY & PHYSICAL - 03/15/2024

PAST MEDICAL HISTORY:
- Previous MI 6 months ago with 40% EF at that time
- Diabetes mellitus controlled with insulin therapy
- Chronic renal insufficiency, baseline creatinine 1.8 mg/dL
- Hypertension on ACE inhibitor
- COPD, on bronchodilators

SOCIAL HISTORY:
- Active tobacco use - current every day smoker, 1 pack/day
- Occasional alcohol use, 2-3 drinks per week
- Retired teacher

PHYSICAL EXAMINATION:
GENERAL: Well-appearing female in no acute distress
CARDIOVASCULAR: Regular rate and rhythm, no murmurs
PULMONARY: Diminished breath sounds at bases bilaterally
EXTREMITIES: No peripheral edema

ASSESSMENT:
67-year-old female with triple vessel coronary artery disease, ready for CABG surgery.`,

      echo: `ECHOCARDIOGRAM REPORT - 03/14/2024

INDICATION: Pre-operative assessment for CABG

TECHNIQUE: Transthoracic echocardiogram

FINDINGS:
Left Ventricular Function:
- Left ventricular ejection fraction: 35%
- Moderate left ventricular systolic dysfunction
- Regional wall motion abnormalities present in LAD territory
- LV End Systolic Dimension: 4.2 cm
- LV End Diastolic Dimension: 5.8 cm

Valvular Assessment:
- Mitral valve: Mild mitral regurgitation
- Aortic valve: Sclerotic, no significant stenosis
- Tricuspid valve: Trace tricuspid regurgitation

CONCLUSION:
Moderate left ventricular systolic dysfunction with EF 35%. Findings consistent with ischemic cardiomyopathy.`,

      labs: `LABORATORY RESULTS - 03/15/2024 06:00

CHEMISTRY:
Creatinine: 1.8 mg/dL (H) [0.6-1.2]
BUN: 28 mg/dL (H) [7-20]
Glucose: 145 mg/dL (H) [70-99]
Sodium: 138 mEq/L [136-145]

HEMATOLOGY:
Hemoglobin: 11.2 g/dL (L) [12.0-15.5]
Hematocrit: 33.8% (L) [36.0-46.0]
Platelet Count: 285 K/uL [150-450]

ENDOCRINE:
HbA1c: 8.1% (H) [<7.0%]

COAGULATION:
INR: 1.1 [0.8-1.1]
PT: 12.2 seconds [11.0-13.0]

All values obtained pre-operatively for surgical clearance.`,

      discharge: `DISCHARGE SUMMARY - 03/20/2024

ADMISSION DATE: 03/15/2024
DISCHARGE DATE: 03/20/2024
LENGTH OF STAY: 5 days

PROCEDURE PERFORMED:
Coronary artery bypass grafting x3 (LIMA to LAD, SVG to OM, SVG to RCA)

HOSPITAL COURSE:
Patient underwent uncomplicated CABG surgery. Post-operative course was unremarkable. Patient was extubated within 6 hours post-operatively. No major complications occurred.

DISCHARGE CONDITION:
Stable, afebrile, ambulatory

DISCHARGE DISPOSITION:
Home with family support

30-DAY STATUS: Patient is alive and recovering well at home

FOLLOW-UP:
- Cardiothoracic surgery clinic in 2 weeks
- Primary care in 1 week`
    },
    extractedVariables: {
      sex: { value: 'Female', source: 'admission', confidence: 100, dataType: 'structured' },
      height: { value: 165, source: 'admission', confidence: 100, dataType: 'structured' },
      weight: { value: 78, source: 'admission', confidence: 100, dataType: 'structured' },
      age: { value: 67, source: 'calculated', confidence: 100, dataType: 'structured' },
      bmi: { value: 28.7, source: 'calculated', confidence: 100, dataType: 'structured' },
      diabetes: { value: 'Yes', source: ['admission', 'hAndP'], confidence: 85, dataType: 'extracted' },
      creatinine: { value: 1.8, source: 'labs', confidence: 100, dataType: 'structured' },
      ejectionFraction: { value: 'Moderately reduced', source: 'echo', confidence: 88, dataType: 'extracted' },
      efMethod: { value: 'Transthoracic', source: 'echo', confidence: 95, dataType: 'extracted' },
      tobaccoUse: { value: 'Current', source: 'hAndP', confidence: 75, dataType: 'extracted' },
      covid19: { value: 'No known exposure', source: ['admission', 'hAndP'], confidence: 80, dataType: 'extracted' },
      hemoglobin: { value: 11.2, source: 'labs', confidence: 100, dataType: 'structured' },
      a1c: { value: 8.1, source: 'labs', confidence: 100, dataType: 'structured' },
      lengthOfStay: { value: 5, source: 'discharge', confidence: 100, dataType: 'structured' },
      mortality: { value: 'No', source: 'discharge', confidence: 100, dataType: 'structured' },
      surgeryDate: { value: '2024-03-15', source: 'admission', confidence: 100, dataType: 'structured' }
    },
    registryMappings: {
      sts: {
        sex: 'Female',
        heightCm: 165.0,
        weightKg: 78.0,
        diabetes: 'Yes',
        creatinine: 1.8,
        tobaccoUse: 'Current every day smoker',
        hemoglobin: 11.2
      },
      nys: {
        sex: 2,
        height: 165,
        weight: 78,
        diabetes: true,
        creatinine: 1.8,
        ejectionFraction: 35,
        efMeasure: 2,
        covid19: 1
      }
    }
  },

  patient_b: {
    id: 'patient_b',
    demographics: {
      name: 'Mr. Carlos Rodriguez',
      age: 72,
      sex: 'Male',
      mrn: 'MRN-2024-002',
      surgeryDate: '2024-03-18',
      surgeryType: 'Aortic Valve Replacement'
    },
    notes: {
      admission: `ADMISSION NOTE - 03/18/2024

CHIEF COMPLAINT: Aortic stenosis for valve replacement

HISTORY OF PRESENT ILLNESS:
72-year-old male with severe aortic stenosis presents for elective aortic valve replacement. Patient has been experiencing progressive dyspnea on exertion and chest pain over the past year.

VITAL SIGNS:
Height: 175 cm
Weight: 85 kg

PAST MEDICAL HISTORY:
- Severe aortic stenosis
- Hypertension
- History of COVID-19 infection 3 months ago, required hospitalization but no ARDS

SOCIAL HISTORY:
- Former smoker, quit 10 years ago
- Lives with spouse

ASSESSMENT:
Severe aortic stenosis, candidate for surgical aortic valve replacement.`,

      hAndP: `HISTORY & PHYSICAL - 03/18/2024

PAST MEDICAL HISTORY:
- Severe calcific aortic stenosis
- Hypertension, well controlled
- Hyperlipidemia
- COVID-19 infection January 2024, hospitalized for 4 days, no ARDS or ventilator requirement

SOCIAL HISTORY:
- Former smoker, 30 pack-year history, quit 10 years ago
- Retired mechanic
- No current alcohol use

PHYSICAL EXAMINATION:
GENERAL: Pleasant male in no acute distress
CARDIOVASCULAR: Regular rhythm, 3/6 systolic murmur at apex
PULMONARY: Clear to auscultation bilaterally

5-METER WALK TEST:
Trial 1: 8.2 seconds
Trial 2: 8.5 seconds
Trial 3: 8.1 seconds`,

      echo: `ECHOCARDIOGRAM REPORT - 03/17/2024

TECHNIQUE: Transthoracic echocardiogram

FINDINGS:
Aortic Valve:
- Severe aortic stenosis
- Valve area: 0.8 cm²
- Mean gradient: 45 mmHg

Left Ventricular Function:
- Left ventricular ejection fraction: 55%
- Normal left ventricular systolic function
- No regional wall motion abnormalities

CONCLUSION:
Severe aortic stenosis with preserved left ventricular function.`,

      labs: `LABORATORY RESULTS - 03/18/2024 06:00

CHEMISTRY:
Creatinine: 1.1 mg/dL [0.6-1.2]
BUN: 18 mg/dL [7-20]
Glucose: 98 mg/dL [70-99]

HEMATOLOGY:
Hemoglobin: 13.5 g/dL [13.5-17.5]
Hematocrit: 40.5% [39.0-50.0]
Platelet Count: 220 K/uL [150-450]

COAGULATION:
INR: 1.0 [0.8-1.1]`,

      discharge: `DISCHARGE SUMMARY - 03/23/2024

PROCEDURE PERFORMED:
Aortic valve replacement with bioprosthetic valve

HOSPITAL COURSE:
Uncomplicated aortic valve replacement. Patient recovered well post-operatively.

LENGTH OF STAY: 5 days

DISCHARGE DISPOSITION: Home

30-DAY STATUS: Alive and well`
    },
    extractedVariables: {
      sex: { value: 'Male', source: 'admission', confidence: 100, dataType: 'structured' },
      height: { value: 175, source: 'admission', confidence: 100, dataType: 'structured' },
      weight: { value: 85, source: 'admission', confidence: 100, dataType: 'structured' },
      age: { value: 72, source: 'calculated', confidence: 100, dataType: 'structured' },
      covid19History: { value: 'Previous infection, no ARDS', source: ['admission', 'hAndP'], confidence: 85, dataType: 'extracted' },
      ejectionFraction: { value: 'Normal', source: 'echo', confidence: 90, dataType: 'extracted' },
      walkTest: { value: '8.3 seconds average', source: 'hAndP', confidence: 80, dataType: 'extracted' },
      creatinine: { value: 1.1, source: 'labs', confidence: 100, dataType: 'structured' },
      hemoglobin: { value: 13.5, source: 'labs', confidence: 100, dataType: 'structured' },
      tobaccoUse: { value: 'Former', source: 'hAndP', confidence: 85, dataType: 'extracted' },
      lengthOfStay: { value: 5, source: 'discharge', confidence: 100, dataType: 'structured' },
      mortality: { value: 'No', source: 'discharge', confidence: 100, dataType: 'structured' }
    },
    registryMappings: {
      sts: {
        sex: 'Male',
        heightCm: 175.0,
        weightKg: 85.0,
        creatinine: 1.1,
        tobaccoUse: 'Former smoker',
        hemoglobin: 13.5
      },
      nys: {
        sex: 1,
        height: 175,
        weight: 85,
        creatinine: 1.1,
        ejectionFraction: 55,
        covid19: 2,
        walkTest1: 8.2,
        walkTest2: 8.5,
        walkTest3: 8.1
      }
    }
  },

  patient_c: {
    id: 'patient_c',
    demographics: {
      name: 'Ms. Lisa Chen',
      age: 59,
      sex: 'Female',
      mrn: 'MRN-2024-003',
      surgeryDate: '2024-03-20',
      surgeryType: 'Combined CABG + Valve'
    },
    notes: {
      admission: `ADMISSION NOTE - 03/20/2024

CHIEF COMPLAINT: Combined CABG and mitral valve repair

HISTORY OF PRESENT ILLNESS:
59-year-old female with coronary artery disease and mitral regurgitation presents for combined CABG and mitral valve repair.

VITAL SIGNS:
Height: 160 cm
Weight: 65 kg

PAST MEDICAL HISTORY:
- Coronary artery disease
- Severe mitral regurgitation
- Hypertension
- No diabetes
- No known renal disease

SOCIAL HISTORY:
- Never smoker
- Social drinker`,

      hAndP: `HISTORY & PHYSICAL - 03/20/2024

PAST MEDICAL HISTORY:
- Three-vessel coronary artery disease
- Severe degenerative mitral regurgitation
- Hypertension, controlled on medication
- No diabetes mellitus
- Previous cardiac catheterization showing 90% LAD stenosis

SOCIAL HISTORY:
- Never used tobacco
- Occasional wine with dinner
- Works as accountant

REVIEW OF SYSTEMS:
- Denies chest pain at rest
- Dyspnea on exertion, 2-block limitation
- No orthopnea or PND`,

      echo: `ECHOCARDIOGRAM REPORT - 03/19/2024

FINDINGS:
Left Ventricular Function:
- Left ventricular ejection fraction: Unable to accurately assess due to severe MR
- Estimated EF 45-50%

Mitral Valve:
- Severe mitral regurgitation
- Degenerative etiology with posterior leaflet prolapse

CONCLUSION:
Severe mitral regurgitation with preserved LV function (estimated).`,

      labs: `LABORATORY RESULTS - 03/20/2024 06:00

CHEMISTRY:
Creatinine: 0.9 mg/dL [0.6-1.2]
BUN: 15 mg/dL [7-20]

HEMATOLOGY:
Hemoglobin: 12.8 g/dL [12.0-15.5]
Hematocrit: 38.2% [36.0-46.0]

No diabetes screening ordered - no history of diabetes.`,

      discharge: `DISCHARGE SUMMARY - 03/26/2024

PROCEDURE PERFORMED:
CABG x2 (LIMA to LAD, SVG to RCA) and mitral valve repair

HOSPITAL COURSE:
Combined procedure performed successfully. Longer recovery due to complexity.

LENGTH OF STAY: 6 days

DISCHARGE DISPOSITION: Home

30-DAY STATUS: Alive and recovering`
    },
    extractedVariables: {
      sex: { value: 'Female', source: 'admission', confidence: 100, dataType: 'structured' },
      height: { value: 160, source: 'admission', confidence: 100, dataType: 'structured' },
      weight: { value: 65, source: 'admission', confidence: 100, dataType: 'structured' },
      age: { value: 59, source: 'calculated', confidence: 100, dataType: 'structured' },
      diabetes: { value: 'No', source: ['admission', 'hAndP', 'labs'], confidence: 85, dataType: 'extracted' },
      creatinine: { value: 0.9, source: 'labs', confidence: 100, dataType: 'structured' },
      ejectionFraction: { value: 'Moderately reduced', source: 'echo', confidence: 65, dataType: 'extracted' },
      tobaccoUse: { value: 'Never', source: ['admission', 'hAndP'], confidence: 90, dataType: 'extracted' },
      hemoglobin: { value: 12.8, source: 'labs', confidence: 100, dataType: 'structured' },
      lengthOfStay: { value: 6, source: 'discharge', confidence: 100, dataType: 'structured' },
      mortality: { value: 'No', source: 'discharge', confidence: 100, dataType: 'structured' }
    },
    registryMappings: {
      sts: {
        sex: 'Female',
        heightCm: 160.0,
        weightKg: 65.0,
        diabetes: 'No',
        creatinine: 0.9,
        ejectionFraction: 'Unable to assess',
        tobaccoUse: 'Never smoker',
        hemoglobin: 12.8
      },
      nys: {
        sex: 2,
        height: 160,
        weight: 65,
        diabetes: false,
        creatinine: 0.9,
        ejectionFraction: 0,
        efMeasure: 9
      }
    }
  }
}; 