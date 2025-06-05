'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { FileText, Activity, FlaskConical, TestTube, Home, ArrowRight, Clock, User, Calendar } from 'lucide-react';
import { mockPatients, MockPatient } from './data/mockPatients';

type DemoStep = 'selection' | 'notes' | 'extraction' | 'applications' | 'outputs';

interface NotesViewerProps {
  onNavigate: (step: DemoStep, patientId?: string) => void;
}

export function NotesViewer({ onNavigate }: NotesViewerProps) {
  const patients = Object.values(mockPatients);
  const [selectedPatient, setSelectedPatient] = useState<string>(() => {
    // Try to get from sessionStorage first, fallback to first patient
    if (typeof window !== 'undefined') {
      return sessionStorage.getItem('selectedPatient') || patients[0].id;
    }
    return patients[0].id;
  });
  
  const currentPatient = patients.find(p => p.id === selectedPatient)!;

  const [activeTab, setActiveTab] = useState('admission');
  const [viewedTabs, setViewedTabs] = useState<Set<string>>(new Set(['admission']));

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    setViewedTabs(prev => new Set(Array.from(prev).concat(value)));
  };

  const noteTypes = [
    {
      id: 'admission',
      title: 'Admission Note',
      icon: FileText,
      description: 'Initial assessment and patient history',
      content: currentPatient.notes.admission
    },
    {
      id: 'hAndP',
      title: 'History & Physical',
      icon: Activity,
      description: 'Detailed medical history and physical examination',
      content: currentPatient.notes.hAndP
    },
    {
      id: 'echo',
      title: 'Echo Report',
      icon: Activity,
      description: 'Echocardiogram findings and measurements',
      content: currentPatient.notes.echo
    },
    {
      id: 'labs',
      title: 'Lab Results',
      icon: TestTube,
      description: 'Laboratory values and blood work',
      content: currentPatient.notes.labs
    },
    {
      id: 'discharge',
      title: 'Discharge Summary',
      icon: Home,
      description: 'Post-operative course and outcomes',
      content: currentPatient.notes.discharge
    }
  ];

  const allTabsViewed = noteTypes.every(note => viewedTabs.has(note.id));

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

      {/* Patient Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              Clinical Notes Review
            </h2>
            <p className="text-slate-600 mt-1">
              {currentPatient.demographics.name} • MRN: {currentPatient.demographics.mrn}
            </p>
          </div>
          <div className="text-right">
            <Badge variant="outline" className="mb-2">
              {currentPatient.demographics.surgeryType}
            </Badge>
            <p className="text-sm text-slate-500">
              Surgery: {currentPatient.demographics.surgeryDate}
            </p>
          </div>
        </div>
        
        <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <p className="text-sm text-blue-700">
            <strong>Optional:</strong> Review the clinical notes to understand the patient's case and see how variables 
            are documented across different note types (demographics, lab values, procedures, outcomes). 
            You can proceed to data extraction at any time or explore the notes first.
          </p>
        </div>
      </div>

      {/* Notes Tabs */}
      <div className="space-y-6">
        <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            {noteTypes.map((note) => {
              const Icon = note.icon;
              const isViewed = viewedTabs.has(note.id);
              
              return (
                <TabsTrigger 
                  key={note.id} 
                  value={note.id}
                  className="flex items-center space-x-2"
                >
                  <Icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{note.title}</span>
                  {isViewed && <div className="w-2 h-2 bg-green-500 rounded-full" />}
                </TabsTrigger>
              );
            })}
          </TabsList>

          {noteTypes.map((note) => {
            const Icon = note.icon;
            
            return (
              <TabsContent key={note.id} value={note.id} className="space-y-4">
                <Card>
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-slate-100 rounded-lg">
                        <Icon className="h-5 w-5 text-slate-600" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{note.title}</CardTitle>
                        <p className="text-sm text-slate-500">{note.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-slate-50 p-4 rounded-lg border">
                      <pre className="whitespace-pre-wrap text-sm font-mono text-slate-700 leading-relaxed">
                        {note.content}
                      </pre>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            );
          })}
        </Tabs>

        {/* Progress Indicator */}
        <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg border">
          <div className="flex items-center space-x-4">
            <div className="text-sm">
              <span className="font-medium">Progress:</span>
              <span className="ml-2 text-slate-600">
                {viewedTabs.size} of {noteTypes.length} notes reviewed
              </span>
            </div>
            <div className="flex space-x-1">
              {noteTypes.map((note) => (
                <div
                  key={note.id}
                  className={`w-3 h-3 rounded-full ${
                    viewedTabs.has(note.id) ? 'bg-green-500' : 'bg-slate-300'
                  }`}
                />
              ))}
            </div>
          </div>
          
          <Button 
            className="ml-4"
            onClick={() => onNavigate('extraction', selectedPatient)}
          >
            Extract Variables
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* Variable Hints */}
        <div className="p-4 bg-green-50 rounded-lg border border-green-200">
          <h3 className="font-medium text-green-900 mb-2">
            Ready for Variable Extraction
          </h3>
          <p className="text-sm text-green-700 mb-3">
            The extraction process will identify and parse variables from the clinical notes:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-blue-500 rounded-full" />
              <span>Demographics (age, sex)</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              <span>Vital signs (height, weight)</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-purple-500 rounded-full" />
              <span>Lab values (creatinine, etc.)</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-orange-500 rounded-full" />
              <span>Cardiac function (EF)</span>
            </div>
          </div>
          {!allTabsViewed && (
            <p className="text-xs text-green-600 mt-2 italic">
              Tip: Review more notes to see how variables are documented across different clinical contexts.
            </p>
          )}
        </div>
      </div>
    </div>
  );
} 