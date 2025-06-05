'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { FileText, CheckCircle } from 'lucide-react';
import { mockPatients, MockPatient } from './data/mockPatients';

export function FormGenerator() {
  const patients = Object.values(mockPatients);
  const [selectedPatient, setSelectedPatient] = useState<string>(() => {
    // Try to get from sessionStorage first, fallback to first patient
    if (typeof window !== 'undefined') {
      return sessionStorage.getItem('selectedPatient') || patients[0].id;
    }
    return patients[0].id;
  });
  const [selectedForm, setSelectedForm] = useState<string>('sts');
  
  const currentPatient = patients.find(p => p.id === selectedPatient)!;
  const extractedData = currentPatient.extractedVariables;

  const formatSTSValue = (key: string, value: any) => {
    switch (key) {
      case 'sex':
        return value === 'Female' ? 'Female' : 'Male';
      case 'height':
        return `${value}.0`;
      case 'weight':
        return `${value}.0`;
      case 'diabetes':
        return value === 'Yes' ? 'Yes' : value === 'No' ? 'No' : 'Unknown';
      case 'tobaccoUse':
        return value || 'Unknown';
      default:
        return value?.toString() || '';
    }
  };

  const formatNYSValue = (key: string, value: any) => {
    switch (key) {
      case 'sex':
        return value === 'Female' ? '2' : '1';
      case 'height':
      case 'weight':
        return Math.round(value).toString();
      case 'diabetes':
        return value === 'Yes' ? 'true' : 'false';
      case 'tobaccoUse':
        if (value?.includes('Current')) return 'Current';
        if (value?.includes('Former')) return 'Former';
        return 'Never';
      case 'covid19':
        return '1'; // No known exposure
      default:
        return value?.toString() || '';
    }
  };

  return (
    <div className="p-6">
      {/* Patient Selector */}
      <div className="mb-6">
        <div className="flex items-center space-x-1 p-1 bg-slate-100 rounded-lg">
          {patients.map((patient) => (
            <button
              key={patient.id}
              onClick={() => {
                setSelectedPatient(patient.id);
                if (typeof window !== 'undefined') {
                  sessionStorage.setItem('selectedPatient', patient.id);
                }
              }}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                selectedPatient === patient.id
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              {patient.demographics.name}
            </button>
          ))}
        </div>
      </div>

      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              Registry Form Generation
            </h2>
            <p className="text-slate-600 mt-1">
              {currentPatient.demographics.name} • Pre-filled submission forms
            </p>
          </div>
        </div>

        <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-200">
          <div className="flex items-center space-x-2">
            <CheckCircle className="h-5 w-5 text-green-600" />
            <p className="text-sm text-green-700">
              <strong>Forms Generated:</strong> The extracted clinical data has been automatically 
              formatted and mapped to both registry requirements, showing how EHR data can streamline quality reporting.
            </p>
          </div>
        </div>
      </div>

      {/* Form Tabs */}
      <Tabs value={selectedForm} onValueChange={setSelectedForm} className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="sts" className="flex items-center space-x-2">
            <FileText className="h-4 w-4" />
            <span>STS ACSD Form</span>
          </TabsTrigger>
          <TabsTrigger value="nys" className="flex items-center space-x-2">
            <FileText className="h-4 w-4" />
            <span>NYS Cardiac Form</span>
          </TabsTrigger>
        </TabsList>

        {/* STS Form */}
        <TabsContent value="sts" className="space-y-6">
          <Card>
            <CardHeader>
              <div>
                <CardTitle className="flex items-center space-x-2">
                  <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                    STS ACSD
                  </Badge>
                  <span>Adult Cardiac Surgery Database</span>
                </CardTitle>
                <p className="text-sm text-slate-600 mt-1">
                  Society of Thoracic Surgeons Data Collection Form V4.20.2
                </p>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Patient Demographics Section */}
              <div>
                <h3 className="font-semibold text-slate-900 mb-4">A. Patient Demographics</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="sts-sex">Sex</Label>
                    <Input 
                      id="sts-sex"
                      value={formatSTSValue('sex', extractedData.sex?.value)}
                      readOnly
                      className="bg-blue-50 border-blue-200"
                    />
                  </div>
                  <div>
                    <Label htmlFor="sts-age">Age</Label>
                    <Input 
                      id="sts-age"
                      value={extractedData.age?.value || ''}
                      readOnly
                      className="bg-blue-50 border-blue-200"
                    />
                  </div>
                  <div>
                    <Label htmlFor="sts-height">Height (cm)</Label>
                    <Input 
                      id="sts-height"
                      value={formatSTSValue('height', extractedData.height?.value)}
                      readOnly
                      className="bg-blue-50 border-blue-200"
                    />
                  </div>
                  <div>
                    <Label htmlFor="sts-weight">Weight (kg)</Label>
                    <Input 
                      id="sts-weight"
                      value={formatSTSValue('weight', extractedData.weight?.value)}
                      readOnly
                      className="bg-blue-50 border-blue-200"
                    />
                  </div>
                </div>
              </div>

              <Separator />

              {/* Risk Factors Section */}
              <div>
                <h3 className="font-semibold text-slate-900 mb-4">B. Risk Factors</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="sts-diabetes">Diabetes Mellitus</Label>
                    <Input 
                      id="sts-diabetes"
                      value={formatSTSValue('diabetes', extractedData.diabetes?.value)}
                      readOnly
                      className="bg-blue-50 border-blue-200"
                    />
                  </div>
                  <div>
                    <Label htmlFor="sts-tobacco">Tobacco Use</Label>
                    <Input 
                      id="sts-tobacco"
                      value={formatSTSValue('tobaccoUse', extractedData.tobaccoUse?.value)}
                      readOnly
                      className="bg-blue-50 border-blue-200"
                    />
                  </div>
                </div>
              </div>

              <Separator />

              {/* Laboratory Values Section */}
              <div>
                <h3 className="font-semibold text-slate-900 mb-4">C. Laboratory Values</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="sts-creatinine">Last Creatinine (mg/dL)</Label>
                    <Input 
                      id="sts-creatinine"
                      value={extractedData.creatinine?.value || ''}
                      readOnly
                      className="bg-blue-50 border-blue-200"
                    />
                  </div>
                  <div>
                    <Label htmlFor="sts-hemoglobin">Hemoglobin (g/dL)</Label>
                    <Input 
                      id="sts-hemoglobin"
                      value={extractedData.hemoglobin?.value || ''}
                      readOnly
                      className="bg-blue-50 border-blue-200"
                    />
                  </div>
                </div>
              </div>

              {extractedData.ejectionFraction?.value && (
                <>
                  <Separator />
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-4">D. Cardiac Function</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="sts-ef">Left Ventricular EF (%)</Label>
                        <Input 
                          id="sts-ef"
                          value={extractedData.ejectionFraction.value}
                          readOnly
                          className="bg-blue-50 border-blue-200"
                        />
                      </div>
                    </div>
                  </div>
                </>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* NYS Form */}
        <TabsContent value="nys" className="space-y-6">
          <Card>
            <CardHeader>
              <div>
                <CardTitle className="flex items-center space-x-2">
                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                    NYS DOH
                  </Badge>
                  <span>Cardiac Surgery Report</span>
                </CardTitle>
                <p className="text-sm text-slate-600 mt-1">
                  New York State Department of Health Form DOH-2254a
                </p>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Patient Information Section */}
              <div>
                <h3 className="font-semibold text-slate-900 mb-4">Section I - Patient Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="nys-sex">Sex (1=Male, 2=Female)</Label>
                    <Input 
                      id="nys-sex"
                      value={formatNYSValue('sex', extractedData.sex?.value)}
                      readOnly
                      className="bg-green-50 border-green-200"
                    />
                  </div>
                  <div>
                    <Label htmlFor="nys-age">Age at Surgery</Label>
                    <Input 
                      id="nys-age"
                      value={extractedData.age?.value || ''}
                      readOnly
                      className="bg-green-50 border-green-200"
                    />
                  </div>
                  <div>
                    <Label htmlFor="nys-height">Height (cm)</Label>
                    <Input 
                      id="nys-height"
                      value={formatNYSValue('height', extractedData.height?.value)}
                      readOnly
                      className="bg-green-50 border-green-200"
                    />
                  </div>
                  <div>
                    <Label htmlFor="nys-weight">Weight (kg)</Label>
                    <Input 
                      id="nys-weight"
                      value={formatNYSValue('weight', extractedData.weight?.value)}
                      readOnly
                      className="bg-green-50 border-green-200"
                    />
                  </div>
                </div>
              </div>

              <Separator />

              {/* Risk Factors Section */}
              <div>
                <h3 className="font-semibold text-slate-900 mb-4">Section II - Risk Factors</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="nys-diabetes">Diabetes (true/false)</Label>
                    <Input 
                      id="nys-diabetes"
                      value={formatNYSValue('diabetes', extractedData.diabetes?.value)}
                      readOnly
                      className="bg-green-50 border-green-200"
                    />
                  </div>
                  <div>
                    <Label htmlFor="nys-tobacco">Tobacco Use</Label>
                    <Input 
                      id="nys-tobacco"
                      value={formatNYSValue('tobaccoUse', extractedData.tobaccoUse?.value)}
                      readOnly
                      className="bg-green-50 border-green-200"
                    />
                  </div>
                  <div>
                    <Label htmlFor="nys-covid">COVID-19 (1=No, 2=History, 3=Current)</Label>
                    <Input 
                      id="nys-covid"
                      value={formatNYSValue('covid19', extractedData.covid19?.value)}
                      readOnly
                      className="bg-green-50 border-green-200"
                    />
                  </div>
                </div>
              </div>

              <Separator />

              {/* Laboratory Values Section */}
              <div>
                <h3 className="font-semibold text-slate-900 mb-4">Section III - Laboratory Values</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="nys-creatinine">Creatinine (mg/dL)</Label>
                    <Input 
                      id="nys-creatinine"
                      value={extractedData.creatinine?.value || ''}
                      readOnly
                      className="bg-green-50 border-green-200"
                    />
                  </div>
                  <div>
                    <Label htmlFor="nys-hemoglobin">Hemoglobin (g/dL)</Label>
                    <Input 
                      id="nys-hemoglobin"
                      value={extractedData.hemoglobin?.value || ''}
                      readOnly
                      className="bg-green-50 border-green-200"
                    />
                  </div>
                </div>
              </div>

              {extractedData.ejectionFraction?.value && (
                <>
                  <Separator />
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-4">Section IV - Cardiac Function</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="nys-ef">Ejection Fraction (%)</Label>
                        <Input 
                          id="nys-ef"
                          value={extractedData.ejectionFraction.value}
                          readOnly
                          className="bg-green-50 border-green-200"
                        />
                      </div>
                      <div>
                        <Label htmlFor="nys-ef-method">EF Measure (2=Echo, 9=Unable to assess)</Label>
                        <Input 
                          id="nys-ef-method"
                          value={extractedData.efNote?.value ? '9' : '2'}
                          readOnly
                          className="bg-green-50 border-green-200"
                        />
                      </div>
                    </div>
                  </div>
                </>
              )}

              {/* NYS-Specific Variables */}
              {extractedData.walkTest?.value && (
                <>
                  <Separator />
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-4">Section V - Functional Assessment</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="nys-walk1">5-Meter Walk Test 1 (sec)</Label>
                        <Input 
                          id="nys-walk1"
                          value={extractedData.walkTest.value[0]}
                          readOnly
                          className="bg-green-50 border-green-200"
                        />
                      </div>
                      <div>
                        <Label htmlFor="nys-walk2">5-Meter Walk Test 2 (sec)</Label>
                        <Input 
                          id="nys-walk2"
                          value={extractedData.walkTest.value[1]}
                          readOnly
                          className="bg-green-50 border-green-200"
                        />
                      </div>
                      <div>
                        <Label htmlFor="nys-walk3">5-Meter Walk Test 3 (sec)</Label>
                        <Input 
                          id="nys-walk3"
                          value={extractedData.walkTest.value[2]}
                          readOnly
                          className="bg-green-50 border-green-200"
                        />
                      </div>
                    </div>
                  </div>
                </>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Completion Summary */}
      <div className="mt-8 p-6 bg-slate-50 rounded-lg border">
        <div className="text-center">
          <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-3" />
          <h3 className="text-lg font-semibold text-slate-900 mb-2">
            Demo Complete!
          </h3>
          <p className="text-slate-600 mb-4">
            You've experienced the complete workflow from clinical notes to registry-ready forms. 
            This demonstration shows how EHR data extraction can be automated to support 
            cardiac surgery quality reporting, with proper formatting applied for each registry's requirements.
          </p>
          <div className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="p-3 bg-blue-50 rounded border border-blue-200">
                <p className="font-medium text-blue-900">STS ACSD Format</p>
                <p className="text-blue-700">Text-based values, descriptive fields</p>
              </div>
              <div className="p-3 bg-green-50 rounded border border-green-200">
                <p className="font-medium text-green-900">NYS DOH Format</p>
                <p className="text-green-700">Numeric codes, boolean values</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 