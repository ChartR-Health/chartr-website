'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Calendar, Stethoscope, User, Eye, X } from 'lucide-react';
import { mockPatients } from './data/mockPatients';

type DemoStep = 'selection' | 'extraction' | 'applications';

interface PatientSelectorProps {
  onNavigate?: (step: DemoStep, patientId?: string) => void;
}

export function PatientSelector({ onNavigate }: PatientSelectorProps = {}) {
  const [notesModal, setNotesModal] = useState<{ isOpen: boolean; patient: any }>({
    isOpen: false,
    patient: null
  });

  const patients = Object.values(mockPatients);

  const getSurgeryTypeColor = (surgeryType: string) => {
    switch (surgeryType) {
      case 'CABG':
        return 'bg-blue-500/20 text-blue-300 border-blue-400/30';
      case 'Aortic Valve Replacement':
        return 'bg-emerald-500/20 text-emerald-300 border-emerald-400/30';
      case 'Combined CABG + Valve':
        return 'bg-purple-500/20 text-purple-300 border-purple-400/30';
      default:
        return 'bg-slate-500/20 text-slate-300 border-slate-400/30';
    }
  };

  const openNotesModal = (patient: any) => {
    setNotesModal({ isOpen: true, patient });
  };

  const closeNotesModal = () => {
    setNotesModal({ isOpen: false, patient: null });
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-white mb-2">
          ChartR Clinical Demo - Patient Selection
        </h2>
        <p className="text-slate-300 mb-3">
          Experience how ChartR's AI transforms clinical documentation into structured registry data. 
          Choose a patient case to see automated data extraction in action.
        </p>

      </div>

      <div className="space-y-8">
        {/* Patient Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {patients.map((patient) => (
            <Card key={patient.id} className="transition-all duration-200 hover:shadow-lg bg-slate-800/40 backdrop-blur-xl border border-white/10 hover:border-white/20 hover:scale-105">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="p-2 bg-slate-700/50 rounded-full">
                      <User className="h-4 w-4 text-slate-300" />
                    </div>
                    <div>
                      <CardTitle className="text-lg text-white">{patient.demographics.name}</CardTitle>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Demographics */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-sm">
                    <span className="text-slate-400">Age:</span>
                    <span className="font-medium text-slate-200">{patient.demographics.age} years</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <span className="text-slate-400">Sex:</span>
                    <span className="font-medium text-slate-200">{patient.demographics.sex}</span>
                  </div>
                </div>

                {/* Surgery Info */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-sm">
                    <Calendar className="h-3 w-3 text-slate-400" />
                    <span className="text-slate-400">Surgery Date:</span>
                    <span className="font-medium text-slate-200">{patient.demographics.surgeryDate}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Stethoscope className="h-3 w-3 text-slate-400" />
                    <Badge className={getSurgeryTypeColor(patient.demographics.surgeryType)}>
                      {patient.demographics.surgeryType}
                    </Badge>
                  </div>
                </div>



                {/* View Notes Button */}
                <div className="pt-3 border-t border-slate-700/50">
                  <Button 
                    variant="outline"
                    size="sm"
                    className="w-full mb-2 bg-slate-700/30 border-slate-600/50 text-slate-200 hover:bg-slate-600/50 hover:border-slate-500/50"
                    onClick={() => openNotesModal(patient)}
                  >
                    <Eye className="mr-2 h-4 w-4" />
                    View Clinical Notes
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Single Analyze All Patients Button */}
        <div className="mt-8 text-center">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 px-8 py-4 text-lg shadow-lg shadow-blue-500/25"
            onClick={() => {
              // Set first patient as default for demo
              if (typeof window !== 'undefined') {
                sessionStorage.setItem('selectedPatient', patients[0].id);
              }
              if (onNavigate) {
                onNavigate('extraction', patients[0].id);
              }
            }}
          >
            Analyze Patients with ChartR AI
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Clinical Notes Modal */}
      {notesModal.isOpen && notesModal.patient && (
        <div 
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-start justify-center p-4 py-8 overflow-y-auto"
          onClick={closeNotesModal}
        >
          <div 
            className="bg-slate-800/95 backdrop-blur-xl border border-white/20 rounded-lg w-full max-w-4xl max-h-[80vh] flex flex-col shadow-2xl my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 border-b border-slate-700/50 flex-shrink-0">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">
                  Clinical Notes - {notesModal.patient.demographics.name}
                </h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    closeNotesModal();
                  }}
                  className="h-8 w-8 p-0 text-slate-400 hover:text-white hover:bg-slate-600/70 rounded-md border border-transparent hover:border-slate-500/50 transition-all duration-200"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="p-6 overflow-y-auto flex-1">
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-white mb-2">Admission Note</h4>
                  <div className="text-sm text-slate-300 bg-slate-900/50 p-3 rounded border border-slate-700/50">
                    <pre className="whitespace-pre-wrap font-mono text-xs">
                      {notesModal.patient.notes.admission}
                    </pre>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-white mb-2">History & Physical</h4>
                  <div className="text-sm text-slate-300 bg-slate-900/50 p-3 rounded border border-slate-700/50">
                    <pre className="whitespace-pre-wrap font-mono text-xs">
                      {notesModal.patient.notes.hAndP}
                    </pre>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-white mb-2">Echo Report</h4>
                  <div className="text-sm text-slate-300 bg-slate-900/50 p-3 rounded border border-slate-700/50">
                    <pre className="whitespace-pre-wrap font-mono text-xs">
                      {notesModal.patient.notes.echo}
                    </pre>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-white mb-2">Lab Results</h4>
                  <div className="text-sm text-slate-300 bg-slate-900/50 p-3 rounded border border-slate-700/50">
                    <pre className="whitespace-pre-wrap font-mono text-xs">
                      {notesModal.patient.notes.labs}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 