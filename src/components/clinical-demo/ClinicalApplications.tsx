'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, TrendingUp, Shield, Users, FileText, Brain, Target, BarChart3, Building2, Heart, FlaskConical, UserCheck, Stethoscope } from 'lucide-react';

type DemoStep = 'selection' | 'extraction' | 'applications';

interface ClinicalApplicationsProps {
  onNavigate: (step: DemoStep, patientId?: string) => void;
}

export function ClinicalApplications({ onNavigate }: ClinicalApplicationsProps) {
  const [selectedApplication, setSelectedApplication] = useState<string>('registry-reporting');

  const applications = [
    {
      id: 'registry-reporting',
      title: 'Regulatory & Quality Reporting',
      icon: FileText,
      description: 'Automated regulatory compliance and quality reporting',
      color: 'from-orange-600 to-red-700',
      borderColor: 'border-orange-500',
      bgColor: 'bg-orange-200/80',
      textColor: 'text-orange-800',
      metrics: {
        primary: '$7.5M+',
        primaryLabel: 'Annual Savings',
        secondary: '99%',
        secondaryLabel: 'Compliance Rate',
        impact: '80x Faster Processing'
      },
      features: [
        'State medical databases',
        'Federal reporting compliance',
        'National registry automation',
        'Custom reporting formats'
      ],
      useCase: 'Automate regulatory reporting to diverse regulatory reporting bodies with validated AI+human data extraction. Curate data in the necessary format for each regulatory or quality reporting requirement across state, federal, and national medical databases.'
    },
    {
      id: 'quality-analytics',
      title: 'Quality Analytics & Predictive Models',
      icon: TrendingUp,
      description: 'Quality monitoring with predictive analytics',
      color: 'from-green-600 to-teal-700',
      borderColor: 'border-green-500',
      bgColor: 'bg-green-200/80',
      textColor: 'text-green-800',
      metrics: {
        primary: '23%',
        primaryLabel: 'Readmission Reduction',
        secondary: '89%',
        secondaryLabel: 'Model Accuracy',
        impact: '$3.9M Total Impact'
      },
      features: [
        'Quality metric dashboards',
        'Predictive risk scoring',
        'Outcome prediction models',
        'Clinical decision support'
      ],
      useCase: 'Combine quality monitoring with predictive analytics to track patient outcomes, predict readmissions, and provide real-time clinical decision support with ML-powered risk assessment.'
    },
    {
      id: 'patient-screening',
      title: 'Patient Screening & Recruitment',
      icon: UserCheck,
      description: 'Identify patients for studies and programs',
      color: 'from-purple-600 to-pink-700',
      borderColor: 'border-purple-500',
      bgColor: 'bg-purple-200/80',
      textColor: 'text-purple-800',
      metrics: {
        primary: '40%',
        primaryLabel: 'Faster Recruitment',
        secondary: '78%',
        secondaryLabel: 'Screening Accuracy',
        impact: '$900K Research Efficiency'
      },
      features: [
        'Automated patient identification',
        'Eligibility screening',
        'Cohort matching',
        'Recruitment analytics'
      ],
      useCase: 'Rapidly identify eligible patients for clinical trials, quality improvement programs, and specialized care pathways with AI-powered screening.'
    },
    {
      id: 'clinical-workflows',
      title: 'Custom Point-of-Care Workflows',
      icon: Stethoscope,
      description: 'Specialty-specific clinical decision support tools',
      color: 'from-blue-600 to-indigo-700',
      borderColor: 'border-blue-500',
      bgColor: 'bg-blue-200/80',
      textColor: 'text-blue-800',
      metrics: {
        primary: '65%',
        primaryLabel: 'Workflow Efficiency',
        secondary: '92%',
        secondaryLabel: 'Clinical Accuracy',
        impact: '$1.2M Time Savings'
      },
      features: [
        'Specialty workflow modules',
        'Referral triage systems',
        'Treatment recommendation engines',
        'Custom clinical interfaces'
      ],
      useCase: 'Build custom clinical workflows tailored to specific specialties. Imagine custom modules for referral triage, candidacy assessment, and specialty-specific clinical-decision workflows. Powered by our AI-curated, human-validated clinical data system.'
    }
  ];

  const currentApp = applications.find(app => app.id === selectedApplication)!;
  const Icon = currentApp.icon;

  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-white mb-2">
          Actionable Intelligence
        </h2>
        <p className="text-slate-300">
          Apply curated clinical data across four key healthcare use cases
        </p>
      </div>

      {/* Application Selector */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {applications.map((app) => {
          const AppIcon = app.icon;
          const isSelected = selectedApplication === app.id;
          
          return (
            <button
              key={app.id}
              onClick={() => setSelectedApplication(app.id)}
              className={`p-4 rounded-lg border text-left transition-all hover:shadow-md ${
                isSelected 
                  ? app.id === 'registry-reporting' ? 'border-orange-400/50 bg-orange-500/10 shadow-md backdrop-blur-sm' :
                    app.id === 'quality-analytics' ? 'border-green-400/50 bg-green-500/10 shadow-md backdrop-blur-sm' :
                    app.id === 'patient-screening' ? 'border-purple-400/50 bg-purple-500/10 shadow-md backdrop-blur-sm' :
                    'border-blue-400/50 bg-blue-500/10 shadow-md backdrop-blur-sm'
                  : 'border-slate-600/50 bg-slate-800/40 hover:border-slate-500/50 backdrop-blur-xl'
              }`}
            >
              <div className="flex items-center space-x-3 mb-3">
                <div className={`p-2 rounded-lg ${isSelected ? 'bg-white/20' : 'bg-slate-700/50'}`}>
                  <AppIcon className={`h-5 w-5 ${isSelected ? 'text-white' : 'text-slate-400'}`} />
                </div>
                <div>
                  <h3 className={`font-semibold text-sm ${isSelected ? 'text-white' : 'text-slate-200'}`}>
                    {app.title}
                  </h3>
                </div>
              </div>
              <p className={`text-xs ${isSelected ? 'text-slate-200' : 'text-slate-400'}`}>
                {app.description}
              </p>
            </button>
          );
        })}
      </div>

      {/* Selected Application Details */}
      <div className="grid lg:grid-cols-3 gap-6 mb-6">
        {/* Main Application Card */}
        <div className="lg:col-span-2">
          <Card className="shadow-lg bg-slate-800/40 backdrop-blur-xl border border-white/10">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${currentApp.color}`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <CardTitle className="text-xl text-white">{currentApp.title}</CardTitle>
                  <p className="text-slate-300 mt-1">{currentApp.description}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold text-white mb-3">Use Case</h4>
                <p className="text-slate-300 leading-relaxed">
                  {currentApp.useCase}
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-3">Key Features</h4>
                <div className="grid grid-cols-2 gap-2">
                  {currentApp.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full" />
                      <span className="text-sm text-slate-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-700/50">
                <div className="text-center">
                  <span className="text-sm text-slate-300">
                    Powered by ChartR's AI-curated, human-validated clinical data
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Metrics Card */}
        <div>
          <Card className="shadow-lg bg-slate-800/40 backdrop-blur-xl border border-white/10">
            <CardHeader>
              <CardTitle className="text-lg text-white">Impact Metrics</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className={`p-4 rounded-lg border backdrop-blur-sm ${
                currentApp.id === 'registry-reporting' ? 'bg-orange-500/20 border-orange-400/30' :
                currentApp.id === 'quality-analytics' ? 'bg-green-500/20 border-green-400/30' :
                currentApp.id === 'patient-screening' ? 'bg-purple-500/20 border-purple-400/30' :
                'bg-blue-500/20 border-blue-400/30'
              }`}>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">
                    {currentApp.metrics.primary}
                  </div>
                  <div className="text-sm text-slate-300">
                    {currentApp.metrics.primaryLabel}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-3">
                <div className="bg-slate-700/50 p-3 rounded border border-slate-600/50">
                  <div className="font-semibold text-white">
                    {currentApp.metrics.secondary}
                  </div>
                  <div className="text-xs text-slate-400">
                    {currentApp.metrics.secondaryLabel}
                  </div>
                </div>
                <div className="bg-slate-700/50 p-3 rounded border border-slate-600/50">
                  <div className="font-semibold text-white">
                    {currentApp.metrics.impact}
                  </div>
                  <div className="text-xs text-slate-400">
                    Total Impact
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-700/50">
                <div className="text-xs text-slate-400 text-center">
                  Metrics based on implemented installations
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Value Proposition */}
      <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg p-6 border border-blue-400/20 backdrop-blur-sm mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">
              Four Applications, One Platform
            </h3>
            <p className="text-slate-300 max-w-2xl">
              ChartR's clinical intelligence platform supports multiple use cases from a single curated dataset. 
              Each application leverages the same high-quality, validated clinical variables for maximum ROI.
            </p>
          </div>
          <div className="hidden md:block">
            <div className="flex space-x-2">
              {applications.map((app) => {
                const AppIcon = app.icon;
                const iconColor = app.id === 'registry-reporting' ? 'text-orange-400' :
                                app.id === 'quality-analytics' ? 'text-green-400' :
                                app.id === 'patient-screening' ? 'text-purple-400' :
                                'text-blue-400';
                const bgColor = app.id === 'registry-reporting' ? 'bg-orange-500/10 border-orange-400/30' :
                               app.id === 'quality-analytics' ? 'bg-green-500/10 border-green-400/30' :
                               app.id === 'patient-screening' ? 'bg-purple-500/10 border-purple-400/30' :
                               'bg-blue-500/10 border-blue-400/30';
                return (
                  <div key={app.id} className={`p-2 rounded-lg shadow-sm border ${bgColor}`}>
                    <AppIcon className={`h-5 w-5 ${iconColor}`} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 