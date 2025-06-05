'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ArrowRight, GitCompare, AlertCircle, CheckCircle, ArrowDown, AlertTriangle, Info } from 'lucide-react';
import { mockPatients, MockPatient } from './data/mockPatients';

type DemoStep = 'selection' | 'notes' | 'extraction' | 'comparison' | 'forms';

interface RegistryComparisonProps {
  onNavigate: (step: DemoStep, patientId?: string) => void;
}

export function RegistryComparison({ onNavigate }: RegistryComparisonProps) {
  const patients = Object.values(mockPatients);
  const [selectedPatient, setSelectedPatient] = useState<string>(() => {
    // Try to get from sessionStorage first, fallback to first patient
    if (typeof window !== 'undefined') {
      return sessionStorage.getItem('selectedPatient') || patients[0].id;
    }
    return patients[0].id;
  });
  
  const currentPatient = patients.find(p => p.id === selectedPatient)!;
  const extractedData = currentPatient.extractedVariables;

  const [selectedComparison, setSelectedComparison] = useState<string>('overview');

  // Variable mapping definitions based on our evidence-based analysis
  const variableMappings = [
    {
      variable: 'sex',
      extracted: extractedData.sex?.value,
      sts: { value: 'Female', format: 'Text: Male/Female', notes: 'Free text field' },
      nys: { value: '2', format: 'Numeric: 1=Male, 2=Female', notes: 'Coded value required' },
      difference: 'Format: Text vs Numeric coding'
    },
    {
      variable: 'height',
      extracted: extractedData.height?.value,
      sts: { value: '165.0', format: 'Decimal (cm)', notes: 'Height in centimeters' },
      nys: { value: '165', format: 'Integer (cm)', notes: 'Height in centimeters as integer' },
      difference: 'Format: Decimal vs Integer precision'
    },
    {
      variable: 'weight',
      extracted: extractedData.weight?.value,
      sts: { value: '78.0', format: 'Decimal (kg)', notes: 'Weight in kilograms' },
      nys: { value: '78', format: 'Integer (kg)', notes: 'Weight in kilograms as integer' },
      difference: 'Format: Decimal vs Integer precision'
    },
    {
      variable: 'diabetes',
      extracted: extractedData.diabetes?.value,
      sts: { value: 'Yes', format: 'Text: Yes/No/Unknown', notes: 'Free text with Unknown option' },
      nys: { value: 'true', format: 'Boolean: true/false', notes: 'Boolean field only' },
      difference: 'Format: Text with Unknown vs Boolean only'
    },
    {
      variable: 'creatinine',
      extracted: extractedData.creatinine?.value,
      sts: { value: '1.8', format: 'Decimal (mg/dL)', notes: 'Last creatinine value before surgery' },
      nys: { value: '1.8', format: 'Decimal (mg/dL)', notes: 'Most recent creatinine' },
      difference: 'Identical: Both use decimal mg/dL'
    },
    {
      variable: 'tobaccoUse',
      extracted: extractedData.tobaccoUse?.value,
      sts: { value: 'Current every day smoker', format: 'Detailed text categories', notes: 'Specific smoking status with quantity' },
      nys: { value: 'Current', format: 'Simple categories: Current/Former/Never', notes: 'Basic categorical only' },
      difference: 'Detail: STS captures quantity, NYS basic category'
    }
  ];

  // Add patient-specific variables
  if (extractedData.ejectionFraction?.value) {
    variableMappings.push({
      variable: 'ejectionFraction',
      extracted: extractedData.ejectionFraction.value,
      sts: { value: extractedData.ejectionFraction.value.toString(), format: 'Integer (percentage)', notes: 'Ejection fraction percentage' },
      nys: { value: extractedData.ejectionFraction.value.toString(), format: 'Integer (percentage)', notes: 'Left ventricular ejection fraction' },
      difference: 'Identical: Both capture as integer percentage'
    });
  }

  if (extractedData.covid19?.value) {
    variableMappings.push({
      variable: 'covid19',
      extracted: extractedData.covid19.value,
      sts: { value: 'Not captured', format: 'Not in STS V4.20', notes: 'COVID-19 not in current STS spec' },
      nys: { value: '1', format: 'Coded: 1=No, 2=History, 3=Current', notes: 'NYS-specific COVID tracking' },
      difference: 'Coverage: NYS includes COVID-19, STS does not'
    });
  }

  const getStatusColor = (difference: string) => {
    if (difference.includes('Identical')) return 'text-green-600 bg-green-50 border-green-200';
    if (difference.includes('Coverage')) return 'text-red-600 bg-red-50 border-red-200';
    return 'text-amber-600 bg-amber-50 border-amber-200';
  };

  const getStatusIcon = (difference: string) => {
    if (difference.includes('Identical')) return CheckCircle;
    if (difference.includes('Coverage')) return AlertCircle;
    return ArrowDown;
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
              Registry Format Comparison
            </h2>
            <p className="text-slate-600 mt-1">
              {currentPatient.demographics.name} • STS ACSD vs NYS Cardiac Data System
            </p>
          </div>
        </div>

        <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <p className="text-sm text-blue-700">
            <strong>Registry Mapping Analysis:</strong> This comparison shows how the same clinical data 
            must be formatted differently for STS vs NYS reporting. Notice differences in data types, 
            coding schemes, and variable coverage between registries.
          </p>
        </div>
      </div>

      {/* Comparison Tabs */}
      <Tabs value={selectedComparison} onValueChange={setSelectedComparison} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="sidebyside">Side-by-Side</TabsTrigger>
          <TabsTrigger value="conflicts">Differences</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="text-sm text-slate-600">Identical Format</p>
                    <p className="text-2xl font-bold text-slate-900">
                      {variableMappings.filter(v => v.difference.includes('Identical')).length}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex items-center space-x-3">
                  <ArrowDown className="h-5 w-5 text-amber-600" />
                  <div>
                    <p className="text-sm text-slate-600">Format Differences</p>
                    <p className="text-2xl font-bold text-slate-900">
                      {variableMappings.filter(v => v.difference.includes('Format')).length}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex items-center space-x-3">
                  <AlertCircle className="h-5 w-5 text-red-600" />
                  <div>
                    <p className="text-sm text-slate-600">Coverage Gaps</p>
                    <p className="text-2xl font-bold text-slate-900">
                      {variableMappings.filter(v => v.difference.includes('Coverage')).length}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Overview Table */}
          <Card>
            <CardHeader>
              <CardTitle>Variable Mapping Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Variable</TableHead>
                    <TableHead>Extracted Value</TableHead>
                    <TableHead>Mapping Status</TableHead>
                    <TableHead>Primary Difference</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {variableMappings.map((mapping) => {
                    const StatusIcon = getStatusIcon(mapping.difference);
                    
                    return (
                      <TableRow key={mapping.variable}>
                        <TableCell className="font-medium">
                          {mapping.variable.charAt(0).toUpperCase() + mapping.variable.slice(1)}
                        </TableCell>
                        <TableCell>
                          <span className="font-mono text-sm">
                            {mapping.extracted || 'N/A'}
                          </span>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            <StatusIcon className="h-4 w-4" />
                            <Badge className={getStatusColor(mapping.difference)}>
                              {mapping.difference.split(':')[0]}
                            </Badge>
                          </div>
                        </TableCell>
                        <TableCell className="text-sm text-slate-600">
                          {mapping.difference.split(':')[1]?.trim() || mapping.difference}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sidebyside" className="space-y-6">
          {variableMappings.map((mapping) => (
            <Card key={mapping.variable}>
              <CardHeader>
                <CardTitle className="text-lg">
                  {mapping.variable.charAt(0).toUpperCase() + mapping.variable.slice(1)}
                </CardTitle>
                <p className="text-sm text-slate-600">
                  Extracted Value: <span className="font-mono">{mapping.extracted || 'N/A'}</span>
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* STS Column */}
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                        STS ACSD
                      </Badge>
                      <GitCompare className="h-4 w-4 text-slate-400" />
                    </div>
                    <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                      <p className="text-sm font-medium text-blue-900 mb-1">Format:</p>
                      <p className="font-mono text-sm text-blue-800">{mapping.sts.format}</p>
                      <p className="text-sm font-medium text-blue-900 mt-2 mb-1">Value:</p>
                      <p className="font-mono text-sm text-blue-800">{mapping.sts.value}</p>
                      <p className="text-xs text-blue-700 mt-2">{mapping.sts.notes}</p>
                    </div>
                  </div>

                  {/* NYS Column */}
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                        NYS Cardiac
                      </Badge>
                    </div>
                    <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                      <p className="text-sm font-medium text-green-900 mb-1">Format:</p>
                      <p className="font-mono text-sm text-green-800">{mapping.nys.format}</p>
                      <p className="text-sm font-medium text-green-900 mt-2 mb-1">Value:</p>
                      <p className="font-mono text-sm text-green-800">{mapping.nys.value}</p>
                      <p className="text-xs text-green-700 mt-2">{mapping.nys.notes}</p>
                    </div>
                  </div>
                </div>

                {/* Difference Highlight */}
                <div className={`mt-4 p-3 rounded-lg border ${getStatusColor(mapping.difference)}`}>
                  <p className="text-sm font-medium">Key Difference:</p>
                  <p className="text-sm mt-1">{mapping.difference}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="conflicts" className="space-y-6">
          <div className="space-y-4">
            {variableMappings
              .filter(m => !m.difference.includes('Identical'))
              .map((mapping) => {
                const StatusIcon = getStatusIcon(mapping.difference);
                
                return (
                  <Card key={mapping.variable} className="border-l-4 border-l-amber-400">
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <StatusIcon className="h-5 w-5 text-amber-600 mt-0.5" />
                        <div className="flex-1">
                          <h3 className="font-medium text-slate-900">
                            {mapping.variable.charAt(0).toUpperCase() + mapping.variable.slice(1)}
                          </h3>
                          <p className="text-sm text-slate-600 mt-1">
                            {mapping.difference}
                          </p>
                          <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <p className="text-xs font-medium text-slate-500 mb-1">STS ACSD</p>
                              <p className="text-sm font-mono bg-blue-50 p-2 rounded border">
                                {mapping.sts.value} ({mapping.sts.format})
                              </p>
                            </div>
                            <div>
                              <p className="text-xs font-medium text-slate-500 mb-1">NYS Cardiac</p>
                              <p className="text-sm font-mono bg-green-50 p-2 rounded border">
                                {mapping.nys.value} ({mapping.nys.format})
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
          </div>
        </TabsContent>
      </Tabs>

      {/* Continue Section */}
      <div className="mt-8 p-4 bg-purple-50 rounded-lg border border-purple-200">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-medium text-purple-900">
              Registry Comparison Complete
            </h3>
            <p className="text-sm text-purple-700 mt-1">
              Ready to generate formatted submission forms showing how the extracted data 
              would appear in actual STS and NYS registry submissions.
            </p>
          </div>
          <Button onClick={() => onNavigate('forms', selectedPatient)}>
            Generate Forms
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
} 