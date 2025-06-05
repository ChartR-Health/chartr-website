'use client'

import { useState } from 'react';
import Navigation from '@/components/Navigation'
import { PatientSelector } from '@/components/clinical-demo/PatientSelector';
import { NotesViewer } from '@/components/clinical-demo/NotesViewer';
import { ExtractionResults } from '@/components/clinical-demo/ExtractionResults';
import { RegistryComparison } from '@/components/clinical-demo/RegistryComparison';
import { FormGenerator } from '@/components/clinical-demo/FormGenerator';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, FileText, Database, GitCompare, FileDown, Brain, Sparkles, TrendingUp, Shield, Users, Target, BarChart3 } from 'lucide-react';

type DemoStep = 'selection' | 'notes' | 'extraction' | 'applications' | 'outputs';

export default function ClinicalDemoPage() {
  const [currentStep, setCurrentStep] = useState<DemoStep>('selection');

  const handleStepClick = (stepId: DemoStep) => {
    setCurrentStep(stepId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateWithPatient = (stepId: DemoStep, patientId?: string) => {
    setCurrentStep(stepId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Store patient selection for components to use
    if (patientId) {
      sessionStorage.setItem('selectedPatient', patientId);
    }
  };

  const handleBack = () => {
    const stepOrder: DemoStep[] = ['selection', 'notes', 'extraction', 'applications', 'outputs'];
    const currentIndex = stepOrder.indexOf(currentStep);
    if (currentIndex > 0) {
      setCurrentStep(stepOrder[currentIndex - 1]);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const steps = [
    { 
      id: 'selection', 
      title: 'Patient Selection', 
      icon: FileText, 
      description: 'Choose a clinical case'
    },
    { 
      id: 'notes', 
      title: 'Clinical Documentation', 
      icon: FileText, 
      description: 'Review unstructured notes'
    },
    { 
      id: 'extraction', 
      title: 'AI Data Curation', 
      icon: Database, 
      description: 'Structured data extraction'
    },
    { 
      id: 'applications', 
      title: 'Clinical Applications', 
      icon: BarChart3, 
      description: 'Risk, Quality, Screening, Registry'
    },
    { 
      id: 'outputs', 
      title: 'Actionable Intelligence', 
      icon: Target, 
      description: 'Reports & Insights'
    },
  ];

  const currentStepIndex = steps.findIndex(step => step.id === currentStep);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
                  ChartR Clinical Platform
                </h1>
                <p className="text-lg text-slate-600 dark:text-slate-400">
                  AI-Powered Clinical Intelligence Demo
                </p>
              </div>
            </div>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-4xl mx-auto">
              Transform unstructured clinical data into actionable intelligence for risk assessment, 
              quality improvement, patient screening, and regulatory compliance.
            </p>
          </div>

          {/* Key Metrics Dashboard */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="bg-white rounded-lg p-4 text-center border shadow-sm">
              <div className="text-2xl font-bold text-blue-600">$7.5M+</div>
              <div className="text-xs text-slate-600">Annual Savings/Hospital</div>
            </div>
            <div className="bg-white rounded-lg p-4 text-center border shadow-sm">
              <div className="text-2xl font-bold text-green-600">96.4%</div>
              <div className="text-xs text-slate-600">AI Accuracy Rate</div>
            </div>
            <div className="bg-white rounded-lg p-4 text-center border shadow-sm">
              <div className="text-2xl font-bold text-purple-600">45min</div>
              <div className="text-xs text-slate-600">Time Saved/Patient</div>
            </div>
            <div className="bg-white rounded-lg p-4 text-center border shadow-sm">
              <div className="text-2xl font-bold text-orange-600">4</div>
              <div className="text-xs text-slate-600">Clinical Applications</div>
            </div>
          </div>

          {/* Main Demo Container */}
          <div className="bg-white rounded-lg border p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <div>
                <div className="flex items-center space-x-3 mb-3">
                  <Badge variant="secondary" className="bg-blue-50 text-blue-700 border-blue-200">
                    <Sparkles className="h-3 w-3 mr-1" />
                    Interactive Demo
                  </Badge>
                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                    Live Data Processing
                  </Badge>
                </div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Clinical Data Intelligence Workflow
                </h2>
                <p className="text-slate-600 mt-2">
                  Experience the complete ChartR platform: from unstructured notes to actionable clinical intelligence
                </p>
              </div>
              {currentStep !== 'selection' && (
                <Button onClick={handleBack} variant="outline" size="lg">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back
                </Button>
              )}
            </div>

            {/* Enhanced Progress Steps */}
            <div className="flex items-center justify-between mb-8 overflow-x-auto pb-2">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isActive = index === currentStepIndex;
                const isCompleted = index < currentStepIndex;
                
                return (
                  <div key={step.id} className="flex items-center flex-shrink-0">
                    <button
                      onClick={() => handleStepClick(step.id as DemoStep)}
                      className={`flex flex-col items-center space-y-2 px-4 py-3 rounded-lg transition-all duration-200 hover:opacity-80 min-w-[160px] text-center ${
                        isActive ? 'bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg transform scale-105' :
                        isCompleted ? 'bg-green-50 text-green-700 hover:bg-green-100 border border-green-200' :
                        'bg-slate-50 text-slate-500 hover:bg-slate-100 border border-slate-200'
                      }`}
                    >
                      <Icon className="h-6 w-6 flex-shrink-0" />
                      <div>
                        <div className="text-sm font-medium">{step.title}</div>
                        <div className="text-xs opacity-75">{step.description}</div>
                      </div>
                    </button>
                    {index < steps.length - 1 && (
                      <div className="flex items-center mx-3">
                        <div className={`w-8 h-px ${
                          isCompleted ? 'bg-green-300' : 'bg-slate-200'
                        }`} />
                        <div className={`w-2 h-2 rounded-full mx-1 ${
                          isCompleted ? 'bg-green-400' : 'bg-slate-300'
                        }`} />
                        <div className={`w-8 h-px ${
                          isCompleted ? 'bg-green-300' : 'bg-slate-200'
                        }`} />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Content Area */}
          <div className="bg-white rounded-lg border shadow-sm">
            {currentStep === 'selection' && (
              <PatientSelector onNavigate={handleNavigateWithPatient} />
            )}
            
            {currentStep === 'notes' && (
              <NotesViewer onNavigate={handleNavigateWithPatient} />
            )}
            
            {currentStep === 'extraction' && (
              <ExtractionResults onNavigate={handleNavigateWithPatient} />
            )}
            
            {currentStep === 'applications' && (
              <ClinicalApplications onNavigate={handleNavigateWithPatient} />
            )}
            
            {currentStep === 'outputs' && (
              <ActionableIntelligence />
            )}
          </div>

          {/* Enhanced CTA Section */}
          <div className="mt-8 bg-gradient-to-r from-blue-50 via-purple-50 to-green-50 rounded-lg border p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  Transform Your Clinical Data Infrastructure
                </h3>
                <p className="text-slate-600 mb-4">
                  ChartR's AI platform delivers measurable ROI across four critical clinical applications:
                </p>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Risk Assessment & ML</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Quality Improvement</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span>Patient Screening</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span>Registry Reporting</span>
                  </div>
                </div>
              </div>
              <div className="text-center lg:text-right">
                <div className="mb-4">
                  <div className="text-3xl font-bold text-slate-900">$7.5M+</div>
                  <div className="text-sm text-slate-600">Annual ROI per hospital facility</div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-end">
                  <Button 
                    onClick={() => window.open('/contact', '_blank')}
                    size="lg"
                    className="bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700"
                  >
                    Schedule Live Demo
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    onClick={() => window.open('/products/clinical', '_blank')}
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// New component for Clinical Applications step
function ClinicalApplications({ onNavigate }: { onNavigate: (step: DemoStep, patientId?: string) => void }) {
  const [selectedApplication, setSelectedApplication] = useState<string>('risk');

  const applications = [
    {
      id: 'risk',
      title: 'Risk Assessment & ML Models',
      icon: TrendingUp,
      description: 'Predictive analytics and machine learning model development',
      color: 'blue',
      features: ['Predictive Risk Scoring', 'ML Model Training', 'Outcome Prediction', 'Cohort Analysis'],
      roi: 'Reduce readmissions by 23%'
    },
    {
      id: 'quality',
      title: 'Quality Improvement',
      icon: Shield,
      description: 'Performance monitoring and quality metrics tracking',
      color: 'green',
      features: ['Quality Metrics', 'Performance Dashboards', 'Outcome Tracking', 'Benchmarking'],
      roi: 'Improve quality scores by 18%'
    },
    {
      id: 'screening',
      title: 'Patient Screening',
      icon: Users,
      description: 'Clinical trial recruitment and patient identification',
      color: 'purple',
      features: ['Trial Matching', 'Cohort Identification', 'Eligibility Screening', 'Population Health'],
      roi: 'Accelerate recruitment by 40%'
    },
    {
      id: 'registry',
      title: 'Registry Reporting',
      icon: FileText,
      description: 'Automated compliance and regulatory reporting',
      color: 'orange',
      features: ['STS Registry', 'NYS CABG', 'NCDR', 'Custom Registries'],
      roi: 'Save $7.5M+ annually'
    }
  ];

  const getColorClasses = (color: string, selected: boolean) => {
    const colors = {
      blue: selected ? 'bg-blue-500 text-white border-blue-500' : 'bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100',
      green: selected ? 'bg-green-500 text-white border-green-500' : 'bg-green-50 text-green-700 border-green-200 hover:bg-green-100',
      purple: selected ? 'bg-purple-500 text-white border-purple-500' : 'bg-purple-50 text-purple-700 border-purple-200 hover:bg-purple-100',
      orange: selected ? 'bg-orange-500 text-white border-orange-500' : 'bg-orange-50 text-orange-700 border-orange-200 hover:bg-orange-100'
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">
          Clinical Applications
        </h2>
        <p className="text-slate-600 text-lg">
          ChartR's structured data powers four key clinical applications. Explore how our AI-curated data 
          drives actionable intelligence across your organization.
        </p>
      </div>

      {/* Application Selector */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {applications.map((app) => {
          const Icon = app.icon;
          const isSelected = selectedApplication === app.id;
          
          return (
            <button
              key={app.id}
              onClick={() => setSelectedApplication(app.id)}
              className={`p-6 rounded-lg border-2 transition-all duration-200 text-left ${
                getColorClasses(app.color, isSelected)
              }`}
            >
              <Icon className="h-8 w-8 mb-3" />
              <h3 className="font-semibold mb-2">{app.title}</h3>
              <p className="text-sm opacity-90 mb-3">{app.description}</p>
              <div className="text-xs font-medium">{app.roi}</div>
            </button>
          );
        })}
      </div>

      {/* Selected Application Details */}
      {applications.map((app) => {
        if (selectedApplication !== app.id) return null;
        const Icon = app.icon;
        
        return (
          <div key={app.id} className="bg-slate-50 rounded-lg p-8 border">
            <div className="flex items-start space-x-6">
              <div className={`p-4 rounded-lg ${getColorClasses(app.color, true)}`}>
                <Icon className="h-8 w-8" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{app.title}</h3>
                <p className="text-slate-600 mb-6">{app.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {app.features.map((feature, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                          <span className="text-slate-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-3">Impact & ROI</h4>
                    <div className="bg-white p-4 rounded border">
                      <div className="text-2xl font-bold text-slate-900 mb-1">{app.roi}</div>
                      <div className="text-sm text-slate-600">Proven measurable outcomes</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Continue Button */}
      <div className="mt-8 flex items-center justify-between p-4 bg-slate-50 rounded-lg border">
        <div>
          <p className="font-medium text-slate-900">Ready to see the outputs?</p>
          <p className="text-sm text-slate-600">
            Explore how ChartR delivers actionable intelligence across all clinical applications
          </p>
        </div>
        <Button 
          onClick={() => onNavigate('outputs')}
          className="bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700"
        >
          View Actionable Intelligence
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}

// New component for Actionable Intelligence step
function ActionableIntelligence() {
  const [selectedOutput, setSelectedOutput] = useState<string>('dashboard');

  const outputs = [
    {
      id: 'dashboard',
      title: 'Executive Dashboard',
      description: 'Real-time clinical intelligence and performance metrics',
      content: 'Interactive dashboards showing quality metrics, risk scores, and operational efficiency'
    },
    {
      id: 'reports',
      title: 'Clinical Reports',
      description: 'Automated reporting for compliance and quality improvement',
      content: 'Structured reports for registry submission, quality committees, and regulatory compliance'
    },
    {
      id: 'alerts',
      title: 'Risk Alerts',
      description: 'Real-time patient risk notifications and recommendations',
      content: 'Predictive alerts for high-risk patients with recommended interventions'
    },
    {
      id: 'insights',
      title: 'Data Insights',
      description: 'ML-powered insights for clinical decision support',
      content: 'AI-generated insights for treatment optimization and outcome prediction'
    }
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">
          Actionable Intelligence Outputs
        </h2>
        <p className="text-slate-600 text-lg">
          ChartR transforms raw clinical data into actionable intelligence that drives measurable improvements 
          in patient outcomes, operational efficiency, and regulatory compliance.
        </p>
      </div>

      {/* Output Selector */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        {outputs.map((output) => (
          <button
            key={output.id}
            onClick={() => setSelectedOutput(output.id)}
            className={`p-4 rounded-lg border transition-all duration-200 text-left ${
              selectedOutput === output.id
                ? 'bg-gradient-to-br from-blue-500 to-purple-600 text-white border-blue-500'
                : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
            }`}
          >
            <h3 className="font-semibold mb-2">{output.title}</h3>
            <p className="text-sm opacity-90">{output.description}</p>
          </button>
        ))}
      </div>

      {/* Selected Output Content */}
      <div className="bg-slate-50 rounded-lg p-8 border mb-8">
        <h3 className="text-xl font-bold text-slate-900 mb-4">
          {outputs.find(o => o.id === selectedOutput)?.title}
        </h3>
        <p className="text-slate-600 mb-6">
          {outputs.find(o => o.id === selectedOutput)?.content}
        </p>
        
        {/* Mock Output Display */}
        <div className="bg-white rounded border p-6">
          <div className="text-center text-slate-500">
            <BarChart3 className="h-16 w-16 mx-auto mb-4 opacity-50" />
            <p className="text-lg font-medium">Interactive Output Preview</p>
            <p className="text-sm">
              {selectedOutput === 'dashboard' && 'Real-time dashboard with quality metrics, risk scores, and KPIs'}
              {selectedOutput === 'reports' && 'Automated registry reports and compliance documentation'}
              {selectedOutput === 'alerts' && 'Risk stratification alerts and clinical recommendations'}
              {selectedOutput === 'insights' && 'ML-powered insights and predictive analytics'}
            </p>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6 border border-green-200">
        <div className="text-center">
          <h3 className="text-xl font-bold text-slate-900 mb-2">
            Demo Complete - Ready to Get Started?
          </h3>
          <p className="text-slate-600 mb-4">
            You've experienced ChartR's complete clinical intelligence workflow. 
            See how we can transform your clinical data infrastructure.
          </p>
          <div className="flex justify-center space-x-4">
            <Button 
              onClick={() => window.open('/contact', '_blank')}
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700"
            >
              Schedule Implementation Call
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => window.location.reload()}
            >
              Restart Demo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
} 