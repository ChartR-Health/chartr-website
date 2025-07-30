'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { 
  Heart, Activity, Calculator, Users, Droplet, Beaker, Settings, ClipboardCheck, 
  Flag, CheckCircle, AlertTriangle, Plus, X, FileText, Database, BarChart3, 
  ArrowRight, Target, TrendingUp, Brain, Eye, Layers
} from 'lucide-react'

const PreOperativeRiskDemo = () => {
  const [selectedModules, setSelectedModules] = useState(['cardiac', 'pulmonary', 'preop-planning']);
  const [showModuleSelector, setShowModuleSelector] = useState(false);
  const [showWorkflowSettings, setShowWorkflowSettings] = useState(false);
  const [showBuildModuleModal, setShowBuildModuleModal] = useState(false);
  const moduleSelectorRef = useRef<HTMLDivElement>(null);
  const workflowSettingsRef = useRef<HTMLDivElement>(null);
  
  const iconColorMap = {
    rose: 'bg-rose-100 dark:bg-rose-900/30',
    blue: 'bg-blue-100 dark:bg-blue-900/30',
    purple: 'bg-purple-100 dark:bg-purple-900/30',
    amber: 'bg-amber-100 dark:bg-amber-900/30',
    red: 'bg-red-100 dark:bg-red-900/30',
    cyan: 'bg-cyan-100 dark:bg-cyan-900/30',
    emerald: 'bg-emerald-100 dark:bg-emerald-900/30',
    orange: 'bg-orange-100 dark:bg-orange-900/30'
  };
  
  const textColorMap = {
    rose: 'text-rose-700 dark:text-rose-400',
    blue: 'text-blue-700 dark:text-blue-400',
    purple: 'text-purple-700 dark:text-purple-400',
    amber: 'text-amber-700 dark:text-amber-400',
    red: 'text-red-700 dark:text-red-400',
    cyan: 'text-cyan-700 dark:text-cyan-400',
    emerald: 'text-emerald-700 dark:text-emerald-400',
    orange: 'text-orange-700 dark:text-orange-400'
  };
  
  const availableModules = [
    { id: 'cardiac', name: 'Cardiac Risk', icon: Heart, color: 'rose' },
    { id: 'pulmonary', name: 'Pulmonary Risk', icon: Activity, color: 'blue' },
    { id: 'nsqip', name: 'ACS NSQIP Calculator', icon: Calculator, color: 'purple' },
    { id: 'frailty', name: 'Frailty Assessment', icon: Users, color: 'amber' },
    { id: 'bleeding', name: 'Bleeding Risk', icon: Droplet, color: 'red' },
    { id: 'renal', name: 'Renal Risk', icon: Beaker, color: 'cyan' },
    { id: 'preop-planning', name: 'Pre-Operative Planning', icon: ClipboardCheck, color: 'emerald' },
    { id: 'dvt', name: 'DVT Risk Assessment', icon: Flag, color: 'orange' }
  ];

  const toggleModule = (moduleId: string) => {
    setSelectedModules(prev => 
      prev.includes(moduleId) 
        ? prev.filter(id => id !== moduleId)
        : [...prev, moduleId]
  );
};

// Calculate dynamic risk scores based on selected modules
const calculateRiskScores = () => {
  const riskData = {
    cardiac: { score: '15.3%', level: 'Elevated', recommendation: 'Cardiology consult, Beta-blockers' },
    pulmonary: { score: '8.2%', level: 'Moderate', recommendation: 'Pulmonary function tests' },
    nsqip: { score: '12.4%', level: 'High', recommendation: 'Optimize medical conditions' },
    frailty: { score: '4/7', level: 'Pre-frail', recommendation: 'PT evaluation, nutrition' },
    bleeding: { score: '22%', level: 'High', recommendation: 'Hold anticoagulation' },
    renal: { score: '18%', level: 'Moderate', recommendation: 'Nephrology consult' },
    'preop-planning': { 
      score: '2/3', 
      level: 'In Progress', 
      recommendation: 'DVT prophylaxis pending', 
      items: [
        { name: 'Patient is NPO', status: 'completed', icon: CheckCircle },
        { name: 'Anesthesia Clearance', status: 'completed', icon: CheckCircle },
        { name: 'DVT Prophylaxis', status: 'pending', icon: selectedModules.includes('dvt') ? Flag : AlertTriangle, note: selectedModules.includes('dvt') ? 'Order DVT prophylaxis' : 'Add DVT Risk Module' }
      ]
    },
    dvt: { score: '18%', level: 'Moderate', recommendation: 'Add Lovenox 40 mg SQ daily' }
  };

  const activeRisks = selectedModules.map(moduleId => ({
    moduleId,
    ...riskData[moduleId as keyof typeof riskData]
  }));

  // Determine overall risk based on selected modules
  const hasHighRisk = activeRisks.some(risk => risk.level === 'High' || risk.level === 'Elevated');
  const hasModerateRisk = activeRisks.some(risk => risk.level === 'Moderate' || risk.level === 'Pre-frail');
  
  let overallLevel = 'Low';
  if (hasHighRisk) overallLevel = 'High';
  else if (hasModerateRisk) overallLevel = 'Moderate';

  return { activeRisks, overallLevel };
};

// Click outside to close dropdowns
useEffect(() => {
  const handleClickOutside = (event: MouseEvent) => {
    // Don't close dropdowns if modal is open
    if (showBuildModuleModal) return;
    
    if (moduleSelectorRef.current && !moduleSelectorRef.current.contains(event.target as Node)) {
      setShowModuleSelector(false);
    }
    if (workflowSettingsRef.current && !workflowSettingsRef.current.contains(event.target as Node)) {
      setShowWorkflowSettings(false);
    }
  };

  document.addEventListener('mousedown', handleClickOutside);
  return () => document.removeEventListener('mousedown', handleClickOutside);
}, [showBuildModuleModal]);

return (
    <div className="relative w-full">
      {/* Main Container - Professional Healthcare Design */}
      <div className="relative bg-white/90 dark:bg-white/5 backdrop-blur-sm rounded-2xl border border-slate-200/50 dark:border-slate-200/10 overflow-hidden shadow-lg">
        {/* Enhanced Header with Module Controls */}
        <div className="bg-slate-100/50 dark:bg-slate-700/30 px-6 py-3 border-b border-slate-200/30 dark:border-slate-200/10">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center space-x-3">
              <img 
                src="/logo.svg" 
                alt="ChartR Logo" 
                className="w-5 h-5"
              />
              <h3 className="text-sm font-medium text-slate-900 dark:text-slate-200">Surgical Pre-Operative Risk Assessment</h3>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setShowWorkflowSettings(!showWorkflowSettings)}
                className="flex items-center space-x-1 px-2 py-1 bg-slate-100/80 hover:bg-slate-200/80 text-slate-700 dark:bg-slate-700/50 dark:hover:bg-slate-600/50 dark:text-slate-300 text-xs rounded-md border border-slate-300/50 dark:border-slate-600/50 transition-all"
              >
                <Settings className="w-3 h-3" />
                <span className="hidden md:inline">Workflow Settings</span>
              </button>
            </div>
          </div>
        </div>

        {/* Workflow Settings Dropdown */}
        {showWorkflowSettings && (
          <motion.div 
            ref={workflowSettingsRef}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-14 right-6 z-20 bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm rounded-lg border border-slate-200/50 dark:border-slate-600/50 shadow-2xl p-4 min-w-[250px]"
          >
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-xs font-medium text-slate-700 dark:text-slate-300">Workflow Settings</h4>
              <button
                onClick={() => setShowWorkflowSettings(false)}
                className="w-5 h-5 flex items-center justify-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
              >
                <X className="w-3 h-3" />
              </button>
            </div>
            <div className="space-y-2">
              <button
                className="w-full flex items-center p-2 rounded-lg border border-slate-200/50 dark:border-slate-600/30 text-slate-600 dark:text-slate-400 hover:bg-slate-200/50 dark:hover:bg-slate-700/50 transition-all"
              >
                <Settings className="w-4 h-4 mr-2" />
                <span className="text-xs font-medium">Edit Variables</span>
              </button>

                                <button
                  onClick={() => {
                    setShowBuildModuleModal(true);
                    setShowWorkflowSettings(false);
                  }}
                  className="w-full flex items-center p-2 rounded-lg border border-slate-200/50 dark:border-slate-600/30 text-slate-600 dark:text-slate-400 hover:bg-slate-200/50 dark:hover:bg-slate-700/50 transition-all"
                >
                  <TrendingUp className="w-4 h-4 mr-2" />
                  <span className="text-xs font-medium">Build New Module</span>
                </button>
              <button
                className="w-full flex items-center p-2 rounded-lg border border-slate-200/50 dark:border-slate-600/30 text-slate-600 dark:text-slate-400 hover:bg-slate-200/50 dark:hover:bg-slate-700/50 transition-all"
              >
                <Brain className="w-4 h-4 mr-2" />
                <span className="text-xs font-medium">Set Up Continuous Learning</span>
              </button>
            </div>
          </motion.div>
        )}

        {/* Module Selector Dropdown */}
        {showModuleSelector && (
          <div 
            ref={moduleSelectorRef}
            className="absolute right-2 md:top-16 top-auto bottom-80 w-64 bg-white dark:bg-slate-800 rounded-lg shadow-xl border border-slate-200 dark:border-slate-700 z-50"
          >
            <div className="p-3 border-b border-slate-200 dark:border-slate-700">
              <h4 className="text-sm font-medium text-slate-900 dark:text-white">Available Modules</h4>
            </div>
            <div className="p-2 max-h-64 overflow-y-auto">
              {availableModules.filter(m => !selectedModules.includes(m.id)).map(module => (
                <button
                  key={module.id}
                  onClick={() => {
                    toggleModule(module.id);
                    setShowModuleSelector(false);
                  }}
                  className="w-full flex items-center space-x-3 p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors"
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${iconColorMap[module.color as keyof typeof iconColorMap]}`}>
                    <module.icon className={`w-4 h-4 ${textColorMap[module.color as keyof typeof textColorMap]}`} />
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-medium text-slate-900 dark:text-white">{module.name}</div>
                    <div className="text-xs text-slate-600 dark:text-slate-400">
                      {module.id === 'dvt' && 'Recommended for pre-op planning'}
                      {module.id === 'nsqip' && 'Comprehensive surgical risk'}
                      {module.id === 'frailty' && 'Assess functional status'}
                      {module.id === 'bleeding' && 'Bleeding risk assessment'}
                      {module.id === 'renal' && 'Kidney function assessment'}
                      {module.id === 'preop-planning' && 'Comprehensive pre-op checklist'}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Content - Adaptive Layout */}
        <div className="p-6 lg:p-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Clinical Notes - Enhanced for Surgery */}
            <div className="flex flex-col relative flex-1 md:max-w-2xl">
              <h4 className="text-xs font-medium text-slate-800 dark:text-slate-300 mb-2 flex items-center">
                <FileText className="w-3 h-3 mr-1 text-blue-400" />
                Clinical Retrieval
              </h4>
              
              {/* Arrow to next step */}
              <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                <ArrowRight className="w-4 h-4 text-emerald-400" />
              </div>
              <div className="bg-slate-100/50 dark:bg-slate-700/20 rounded-lg p-3 text-xs text-slate-700 dark:text-slate-300 leading-relaxed border border-slate-200/50 dark:border-slate-600/20 h-full">
                <div className="mb-2 pb-2 border-b border-slate-200/50 dark:border-slate-600/30">
                  <p className="text-[10px] text-slate-600 dark:text-slate-400 mb-1 font-medium">Surgical Consultation</p>
                  <p className="mb-1">
                    <span className="text-slate-700 dark:text-slate-300 text-[10px]">Procedure:</span> <span className="bg-emerald-100/70 dark:bg-emerald-900/20 text-emerald-800 dark:text-emerald-300 px-1 py-0.5 rounded text-[10px] font-medium">Laparoscopic Gastrectomy</span>
                  </p>
                  <p className="mb-1">
                    <span className="text-slate-700 dark:text-slate-300 text-[10px]">PMH:</span> <span className="bg-amber-100/70 dark:bg-amber-900/20 text-amber-800 dark:text-amber-300 px-1 py-0.5 rounded text-[10px] font-medium">CAD</span>, <span className="bg-amber-100/70 dark:bg-amber-900/20 text-amber-800 dark:text-amber-300 px-1 py-0.5 rounded text-[10px] font-medium">COPD</span>, <span className="bg-amber-100/70 dark:bg-amber-900/20 text-amber-800 dark:text-amber-300 px-1 py-0.5 rounded text-[10px] font-medium">DM Type 2</span>
                  </p>
                  <div className="space-y-0.5 mt-1">
                    <div className="h-2 bg-slate-300/30 dark:bg-slate-600/30 rounded w-3/4"></div>
                  </div>
                </div>
                
                <div className="mb-2 pb-2 border-b border-slate-200/50 dark:border-slate-600/30">
                  <p className="text-[10px] text-slate-600 dark:text-slate-400 mb-1 font-medium">Pre-Op Assessment</p>
                  <div className="space-y-0.5 mb-1">
                    <div className="h-2 bg-slate-300/30 dark:bg-slate-600/30 rounded"></div>
                    <div className="h-2 bg-slate-300/30 dark:bg-slate-600/30 rounded w-5/6"></div>
                  </div>
                  <p className="mb-1">
                    <span className="text-slate-700 dark:text-slate-300 text-[10px]">Functional Status:</span> <span className="bg-blue-100/70 dark:bg-blue-900/20 text-blue-800 dark:text-blue-300 px-1 py-0.5 rounded text-[10px] font-medium">METs &lt;4</span>
                  </p>
                  <div className="h-2 bg-slate-300/30 dark:bg-slate-600/30 rounded"></div>
                </div>
                
                {/* EMR Lab Values */}
                <div>
                  <p className="text-[10px] text-slate-600 dark:text-slate-400 mb-1 font-medium">EMR Labs (03/14/24)</p>
                  <div className="space-y-0.5 text-[9px]">
                    <div className="h-2 bg-slate-300/30 dark:bg-slate-600/30 rounded"></div>
                    <p><span className="bg-blue-100/70 dark:bg-blue-900/20 text-blue-800 dark:text-blue-300 px-1 py-0.5 rounded text-[10px] font-medium">Creatinine 1.8 mg/dL</span></p>
                    <p><span className="bg-blue-100/70 dark:bg-blue-900/20 text-blue-800 dark:text-blue-300 px-1 py-0.5 rounded text-[10px] font-medium">Hemoglobin 10.2 g/dL</span></p>
                    <div className="h-2 bg-slate-300/30 dark:bg-slate-600/30 rounded"></div>
                    <p><span className="bg-blue-100/70 dark:bg-blue-900/20 text-blue-800 dark:text-blue-300 px-1 py-0.5 rounded text-[10px] font-medium">HbA1c 8.4%</span></p>
                    <div className="h-2 bg-slate-300/30 dark:bg-slate-600/30 rounded"></div>
                    <div className="h-2 bg-slate-300/30 dark:bg-slate-600/30 rounded"></div>
                    <p><span className="bg-blue-100/70 dark:bg-blue-900/20 text-blue-800 dark:text-blue-300 px-1 py-0.5 rounded text-[10px] font-medium">BNP 342 pg/mL</span></p>
                    <div className="h-2 bg-slate-300/30 dark:bg-slate-600/30 rounded w-4/5"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Data Extraction - Enhanced - Hidden on mobile */}
            <div className="hidden md:flex flex-col relative flex-1 md:max-w-2xl">
              <h4 className="text-xs font-medium text-slate-800 dark:text-slate-300 mb-2 flex items-center">
                <Database className="w-3 h-3 mr-1 text-purple-400" />
                Data Mapping
              </h4>
              
              {/* Arrow to next step */}
              <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                <ArrowRight className="w-4 h-4 text-emerald-400" />
              </div>
              
              <div className="bg-slate-100/50 dark:bg-slate-700/20 rounded-lg p-3 border border-slate-200/50 dark:border-slate-600/20 h-full">
                <div className="space-y-2">
                  {/* Surgical Factors */}
                  <div>
                    <h5 className="text-[10px] font-medium text-slate-700 dark:text-slate-300 mb-1">Surgical Factors</h5>
                    <div className="space-y-1">
                      <div className="flex justify-between items-center bg-emerald-50/70 dark:bg-emerald-900/10 rounded px-2 py-1 border border-emerald-300/50 dark:border-emerald-700/30">
                        <span className="text-emerald-800 dark:text-emerald-300 text-[10px] font-medium">Non-cardiac Surgery</span>
                        <CheckCircle className="w-2.5 h-2.5 text-emerald-700 dark:text-emerald-400" />
                      </div>
                      <div className="flex justify-between items-center bg-emerald-50/70 dark:bg-emerald-900/10 rounded px-2 py-1 border border-emerald-300/50 dark:border-emerald-700/30">
                        <span className="text-emerald-800 dark:text-emerald-300 text-[10px] font-medium">ASA Class III</span>
                        <CheckCircle className="w-2.5 h-2.5 text-emerald-700 dark:text-emerald-400" />
                      </div>
                    </div>
                  </div>

                  {/* Medical History Mappings */}
                  <div>
                    <h5 className="text-[10px] font-medium text-slate-700 dark:text-slate-300 mb-1">Risk Factors</h5>
                    <div className="space-y-1">
                      <div className="flex justify-between items-center bg-amber-50/70 dark:bg-amber-900/10 rounded px-2 py-1 border border-amber-300/50 dark:border-amber-700/30">
                        <span className="text-amber-800 dark:text-amber-300 text-[10px] font-medium">Ischemic Heart Disease</span>
                        <CheckCircle className="w-2.5 h-2.5 text-amber-700 dark:text-amber-400" />
                      </div>
                      <div className="flex justify-between items-center bg-amber-50/70 dark:bg-amber-900/10 rounded px-2 py-1 border border-amber-300/50 dark:border-amber-700/30">
                        <span className="text-amber-800 dark:text-amber-300 text-[10px] font-medium">Insulin-dependent DM</span>
                        <CheckCircle className="w-2.5 h-2.5 text-amber-700 dark:text-amber-400" />
                      </div>
                      <div className="flex justify-between items-center bg-amber-50/70 dark:bg-amber-900/10 rounded px-2 py-1 border border-amber-300/50 dark:border-amber-700/30">
                        <span className="text-amber-800 dark:text-amber-300 text-[10px] font-medium">COPD (Active)</span>
                        <CheckCircle className="w-2.5 h-2.5 text-amber-700 dark:text-amber-400" />
                      </div>
                      <div className="flex justify-between items-center bg-amber-50/70 dark:bg-amber-900/10 rounded px-2 py-1 border border-amber-300/50 dark:border-amber-700/30">
                        <span className="text-amber-800 dark:text-amber-300 text-[10px] font-medium">Chronic Kidney Disease</span>
                        <CheckCircle className="w-2.5 h-2.5 text-amber-700 dark:text-amber-400" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Functional Status */}
                  <div>
                    <h5 className="text-[10px] font-medium text-slate-700 dark:text-slate-300 mb-1">Functional Status</h5>
                    <div className="space-y-1">
                      <div className="flex justify-between items-center bg-blue-50/70 dark:bg-blue-900/10 rounded px-2 py-0.5 border border-blue-300/50 dark:border-blue-700/30">
                        <span className="text-blue-800 dark:text-blue-300 text-[10px]">Mobility</span>
                        <span className="text-blue-800 dark:text-blue-300 text-[10px] font-medium">Limited</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Lab Abnormalities */}
                  <div>
                    <h5 className="text-[10px] font-medium text-slate-700 dark:text-slate-300 mb-1">Lab Abnormalities</h5>
                    <div className="space-y-1">
                      <div className="flex justify-between items-center bg-rose-50/70 dark:bg-rose-900/10 rounded px-2 py-0.5 border border-rose-300/50 dark:border-rose-700/30">
                        <span className="text-rose-800 dark:text-rose-300 text-[10px]">Renal Function</span>
                        <span className="text-rose-800 dark:text-rose-300 text-[10px] font-medium">Impaired</span>
                      </div>
                      <div className="flex justify-between items-center bg-blue-50/70 dark:bg-blue-900/10 rounded px-2 py-0.5 border border-blue-300/50 dark:border-blue-700/30">
                        <span className="text-blue-800 dark:text-blue-300 text-[10px]">Anemia</span>
                        <span className="text-blue-800 dark:text-blue-300 text-[10px] font-medium">Moderate</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Arrow and Data Mapping Indicator */}
            <div className="flex md:hidden flex-col items-center py-1">
              <ArrowRight className="w-4 h-4 text-purple-500 rotate-90 mb-1" />
              <div className="w-6 h-6 bg-purple-500/20 rounded-full flex items-center justify-center border border-purple-400/30 mb-1">
                <Database className="w-3 h-3 text-purple-600 dark:text-purple-400" />
              </div>
              <div className="text-[10px] text-purple-600 dark:text-purple-400 font-medium mb-1">Intelligent Data Mapping</div>
              <ArrowRight className="w-4 h-4 text-purple-500 rotate-90" />
            </div>

            {/* Integrated AI Modules - Dynamic Display */}
            <div className="flex flex-col w-full md:w-[300px]">
              <h4 className="text-xs font-medium text-slate-800 dark:text-slate-300 mb-2 flex items-center">
                <BarChart3 className="w-3 h-3 mr-1 text-violet-400" />
                Integrated AI Modules
              </h4>
              <div className="bg-slate-100/50 dark:bg-slate-700/20 rounded-lg p-3 border border-slate-200/50 dark:border-slate-600/20">
                <div className="grid grid-cols-2 gap-2">
                  {selectedModules.map(moduleId => {
                    const module = availableModules.find(m => m.id === moduleId);
                    if (!module) return null;

                    // Module-specific risk displays
                    const riskData = {
                      cardiac: { score: '15.3%', level: 'Elevated', recommendation: 'Cardiology consult, Beta-blockers' },
                      pulmonary: { score: '8.2%', level: 'Moderate', recommendation: 'Pulmonary function tests' },
                      nsqip: { score: '12.4%', level: 'High', recommendation: 'Optimize medical conditions' },
                      frailty: { score: '4/7', level: 'Pre-frail', recommendation: 'PT evaluation, nutrition' },
                      bleeding: { score: '22%', level: 'High', recommendation: 'Hold anticoagulation' },
                      renal: { score: '18%', level: 'Moderate', recommendation: 'Nephrology consult' },
                      'preop-planning': { 
                        score: '2/3', 
                        level: 'In Progress', 
                        recommendation: 'DVT prophylaxis pending', 
                        items: [
                          { name: 'Patient is NPO', status: 'completed', icon: CheckCircle },
                          { name: 'Anesthesia Clearance', status: 'completed', icon: CheckCircle },
                          { name: 'DVT Prophylaxis', status: 'pending', icon: selectedModules.includes('dvt') ? Flag : AlertTriangle, note: selectedModules.includes('dvt') ? 'Order DVT prophylaxis' : 'Add DVT Risk Module' }
                        ]
                      },
                      dvt: { score: '18%', level: 'Moderate', recommendation: 'Add Lovenox 40 mg SQ daily' }
                    };

                    const data = riskData[moduleId as keyof typeof riskData];
                    const Icon = module.icon;
                    const colorClasses = 'from-slate-100/50 to-slate-200/50 dark:from-slate-700/30 dark:to-slate-600/30 border-slate-300/50 dark:border-slate-600/50';

                    if (moduleId === 'preop-planning' && 'items' in data) {
                      return (
                        <motion.div
                          key={moduleId}
                          className={`bg-gradient-to-br ${colorClasses} border rounded-lg p-3 relative col-span-2`}
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0.8, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <button
                            onClick={() => toggleModule(moduleId)}
                            className="absolute top-1 right-1 p-0.5 hover:bg-slate-200/50 rounded transition-colors"
                          >
                            <X className="w-3 h-3 text-slate-600 dark:text-slate-400" />
                          </button>
                          
                          <div className="flex items-center space-x-2 mb-2">
                                                        <div className={`w-6 h-6 rounded-lg flex items-center justify-center ${iconColorMap[module.color as keyof typeof iconColorMap]}`}>
                            <Icon className={`w-3 h-3 ${textColorMap[module.color as keyof typeof textColorMap]}`} />
                          </div>
                            <h5 className="text-[10px] font-medium text-slate-900 dark:text-white">{module.name}</h5>
                          </div>
                          
                          <div className="space-y-1">
                            {('items' in data && data.items) && data.items.map((item: any, idx: number) => {
                              const ItemIcon = item.icon;
                              return (
                                <div key={idx} className="flex items-center justify-between text-[10px]">
                                  <div className="flex items-center space-x-1">
                                    <ItemIcon className={`w-3 h-3 ${item.status === 'completed' ? 'text-emerald-600' : item.name === 'DVT Prophylaxis' ? (selectedModules.includes('dvt') ? 'text-orange-600' : 'text-red-600') : 'text-orange-600'}`} />
                                    <span className="text-slate-700 dark:text-slate-300">{item.name}</span>
                                  </div>
                                  {item.note && (
                                    <span className={`text-[9px] font-medium ${item.name === 'DVT Prophylaxis' ? (selectedModules.includes('dvt') ? 'text-orange-600 dark:text-orange-400' : 'text-red-600 dark:text-red-400') : 'text-orange-600 dark:text-orange-400'}`}>{item.note}</span>
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        </motion.div>
                      );
                    }

                    return (
                      <motion.div
                        key={moduleId}
                        className={`bg-gradient-to-br ${colorClasses} border rounded-lg p-3 relative`}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <button
                          onClick={() => toggleModule(moduleId)}
                          className="absolute top-1 right-1 p-0.5 hover:bg-slate-200/50 rounded transition-colors"
                        >
                          <X className="w-3 h-3 text-slate-600 dark:text-slate-400" />
                        </button>
                        
                        <div className="flex items-center space-x-1 mb-1">
                          <div className={`w-5 h-5 rounded-lg flex items-center justify-center ${iconColorMap[module.color as keyof typeof iconColorMap]}`}>
                            <Icon className={`w-3 h-3 ${textColorMap[module.color as keyof typeof textColorMap]}`} />
                          </div>
                          <h5 className="text-[10px] font-medium text-slate-900 dark:text-white">{module.name}</h5>
                        </div>
                        
                        <div className="text-center mb-1">
                          <div className="text-sm font-bold text-slate-900 dark:text-white">{data.score}</div>
                          <div className={`text-[10px] font-medium ${
                            data.level === 'High' || data.level === 'Elevated' 
                              ? 'text-rose-700 dark:text-rose-400' 
                              : data.level === 'Moderate' || data.level === 'Pre-frail'
                                ? 'text-amber-700 dark:text-amber-400'
                                : 'text-slate-700 dark:text-slate-300'
                          }`}>{data.level} Risk</div>
                        </div>
                        <div className="text-[10px] text-slate-600 dark:text-slate-400">
                          <span className="font-medium text-slate-700 dark:text-slate-300">Action:</span> {data.recommendation}
                        </div>
                      </motion.div>
                    );
                  })}
                  
                  {/* Add Module Card */}
                  {selectedModules.length < availableModules.length && (
                    <motion.button
                      onClick={() => setShowModuleSelector(true)}
                      className="bg-slate-100/50 dark:bg-slate-700/30 hover:bg-slate-200/50 dark:hover:bg-slate-700/50 border-2 border-dashed border-slate-200/50 dark:border-slate-600/50 hover:border-violet-500/50 rounded-lg p-4 flex flex-col items-center justify-center transition-all min-h-[100px]"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Plus className="w-5 h-5 text-violet-400 mb-1" />
                      <span className="text-[10px] text-slate-600 dark:text-slate-400">Add Modules</span>
                    </motion.button>
                  )}
                </div>


              </div>
            </div>
          </div>
          
          {/* ChartrOS Integrated Summary - Horizontal Section */}
          <div className="mt-6 pt-6 border-t border-slate-300/30 dark:border-slate-600/30">
            <div className="bg-slate-50 dark:bg-slate-800/30 rounded-lg p-4 border border-slate-200 dark:border-slate-700/50">
              <h5 className="text-sm font-medium text-slate-900 dark:text-slate-100 mb-3 flex items-center">
                <Layers className="w-4 h-4 mr-2 text-indigo-600 dark:text-indigo-400" />
                ChartrOS Guideline-Directed Recommendations
              </h5>
              <div className="space-y-3">
                {(() => {
                  const { overallLevel } = calculateRiskScores();
                  const isHighRisk = overallLevel === 'High';
                  const isModerateRisk = overallLevel === 'Moderate';
                  
                  return (
                    <>
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-2 flex-1">
                          {isHighRisk ? (
                            <AlertTriangle className="w-4 h-4 text-rose-500 dark:text-rose-400 mt-0.5 flex-shrink-0" />
                          ) : (
                            <AlertTriangle className="w-4 h-4 text-amber-500 dark:text-amber-400 mt-0.5 flex-shrink-0" />
                          )}
                          <div className="flex-1">
                            <div className={`text-sm ${isHighRisk ? 'text-rose-700 dark:text-rose-300' : 'text-amber-700 dark:text-amber-300'}`}>
                              <span className="font-medium">
                                {isHighRisk 
                                  ? "High risk - consider postponing surgery" 
                                  : isModerateRisk 
                                    ? "Proceed with caution - optimize risk factors" 
                                    : "Acceptable risk - proceed with standard care"
                                }
                              </span>
                              <p className="text-xs mt-1 text-slate-600 dark:text-slate-400">
                                {isHighRisk 
                                  ? "Multiple high-risk factors requiring optimization before surgery"
                                  : isModerateRisk 
                                    ? "Several risk factors identified requiring pre-operative optimization"
                                    : "Patient appears to be at acceptable risk for surgery"
                                }
                              </p>
                            </div>
                          </div>
                        </div>
                        <button 
                          className="ml-3 px-2 py-1 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 rounded-md text-xs text-slate-700 dark:text-slate-300 font-medium transition-colors flex items-center space-x-1 group cursor-pointer"
                        >
                          <Eye className="w-3 h-3" />
                          <span>View</span>
                        </button>
                      </div>
                      {isModerateRisk && selectedModules.includes('cardiac') && (
                        <div className="flex items-start justify-between">
                          <div className="flex items-start space-x-2 flex-1">
                            <AlertTriangle className="w-4 h-4 text-amber-500 dark:text-amber-400 mt-0.5 flex-shrink-0" />
                            <div className="flex-1">
                              <div className="text-amber-700 dark:text-amber-300 text-sm">
                                <span className="font-medium">Cardiology clearance recommended</span>
                                <p className="text-xs mt-1 text-slate-600 dark:text-slate-400">
                                  Beta-blocker therapy and cardiac optimization
                                </p>
                              </div>
                            </div>
                          </div>
                          <button 
                            className="ml-3 px-2 py-1 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 rounded-md text-xs text-slate-700 dark:text-slate-300 font-medium transition-colors flex items-center space-x-1 group cursor-pointer"
                          >
                            <Eye className="w-3 h-3" />
                            <span>View</span>
                          </button>
                        </div>
                      )}
                                                      {selectedModules.includes('preop-planning') && (
                        <div className="flex items-start justify-between">
                          <div className="flex items-start space-x-2 flex-1">
                            {selectedModules.includes('dvt') ? (
                              <Flag className="w-4 h-4 mt-0.5 flex-shrink-0 text-orange-500 dark:text-orange-400" />
                            ) : (
                              <AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0 text-red-500 dark:text-red-400" />
                            )}
                            <div className="flex-1">
                              <div className={`text-sm ${selectedModules.includes('dvt') ? 'text-orange-700 dark:text-orange-300' : 'text-red-700 dark:text-red-300'}`}>
                                <span className="font-medium">
                                  {selectedModules.includes('dvt') ? 'Order DVT prophylaxis' : 'Needs DVT Prophylaxis Assessment'}
                                </span>
                                <p className="text-xs mt-1 text-slate-600 dark:text-slate-400">
                                  {selectedModules.includes('dvt') 
                                    ? 'Risk assessment complete - recommend Lovenox 40 mg SQ daily'
                                    : 'Consider adding DVT Risk Assessment module for complete evaluation'
                                  }
                                </p>
                              </div>
                            </div>
                          </div>
                          <button 
                            className="ml-3 px-2 py-1 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 rounded-md text-xs text-slate-700 dark:text-slate-300 font-medium transition-colors flex items-center space-x-1 group cursor-pointer"
                          >
                            <Eye className="w-3 h-3" />
                            <span>View</span>
                          </button>
                        </div>
                      )}
                    </>
                  );
                })()}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Build Module Modal - Rendered outside main container */}
      {showBuildModuleModal && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-black/30"
            onClick={() => setShowBuildModuleModal(false)}
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg mx-4 bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm rounded-xl border border-slate-200/50 dark:border-slate-700/50 shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 px-6 py-4 border-b border-slate-200/30 dark:border-slate-700/30">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Build Custom AI Models</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">with ChartrOS</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowBuildModuleModal(false)}
                  className="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-200/50 dark:hover:bg-slate-700/50 rounded-lg transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <p className="text-slate-700 dark:text-slate-300 mb-6">
                Use ChartrOS to create AI models unique to your patient population and practice - with built-in ML tools for no-code development. Choose from our templates or design your own:
              </p>

              <div className="space-y-3 mb-6">
                {[
                  { icon: Target, title: 'Risk Assessment Models', desc: 'Custom scoring algorithms for your specialty' },
                  { icon: Users, title: 'Clinical Triage Algorithms', desc: 'Intelligent patient prioritization systems' },
                  { icon: ClipboardCheck, title: 'Treatment Planning Tools', desc: 'Evidence-based care pathway automation' },
                  { icon: BarChart3, title: 'Quality Metrics Tracking', desc: 'Outcome monitoring and benchmarking' }
                ].map((template, idx) => (
                  <div key={idx} className="flex items-start space-x-3 p-3 rounded-lg bg-slate-50/50 dark:bg-slate-700/30 border border-slate-200/30 dark:border-slate-600/30">
                    <div className="w-8 h-8 bg-blue-500/10 dark:bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <template.icon className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-900 dark:text-slate-100 text-sm">{template.title}</h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">{template.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-200/30 dark:border-slate-700/30">
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Ready to build? Contact our team to get started.
                </p>
                <a
                  href="/contact"
                  className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-sm font-medium rounded-lg transition-all transform hover:scale-105 inline-block"
                >
                  Contact Team
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default function PreOperativeRiskPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
      {/* Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 pointer-events-none" />
      
      {/* Subtle Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-96 h-96 bg-blue-500/8 dark:bg-blue-500/3 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500/8 dark:bg-purple-500/3 rounded-full blur-3xl" />
      </div>

      {/* Main Content - Added pt-20 to account for fixed navigation header */}
      <div className="relative z-10 min-h-screen pt-20 flex items-center justify-center p-4">
        <div className="w-full max-w-7xl mx-auto">
          <PreOperativeRiskDemo />
        </div>
      </div>
    </div>
  );
} 