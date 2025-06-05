'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { CheckCircle, AlertTriangle, Info, ArrowRight, Target, Edit, Save, X, ChevronDown, ChevronRight } from 'lucide-react';
import { mockPatients, MockPatient } from './data/mockPatients';

type DemoStep = 'selection' | 'extraction' | 'applications';

interface ExtractionResultsProps {
  onNavigate: (step: DemoStep, patientId?: string) => void;
}

export function ExtractionResults({ onNavigate }: ExtractionResultsProps) {
  const patients = Object.values(mockPatients);
  const [selectedPatient, setSelectedPatient] = useState<string>(() => {
    // Try to get from sessionStorage first, fallback to first patient
    if (typeof window !== 'undefined') {
      return sessionStorage.getItem('selectedPatient') || patients[0].id;
    }
    return patients[0].id;
  });
  const [selectedVariable, setSelectedVariable] = useState<string | null>(null);
  const [viewingVariable, setViewingVariable] = useState<string | null>(null);
  const [editingVariable, setEditingVariable] = useState<string | null>(null);
  const [editedData, setEditedData] = useState<any>(patients.reduce((acc, p) => ({ ...acc, [p.id]: p.extractedVariables }), {}));
  const [editValue, setEditValue] = useState<string>('');
  const [collapsedCategories, setCollapsedCategories] = useState<Set<string>>(
    new Set(['Demographics', 'Laboratory', 'Cardiac Function', 'Risk Factors', 'Outcomes', 'Other'])
  ); // Start with all categories collapsed

  const currentPatient = patients.find(p => p.id === selectedPatient)!;
  const currentExtractedData = editedData[selectedPatient];

  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 90) return 'text-emerald-300 bg-emerald-500/20 border-emerald-400/30';
    if (confidence >= 70) return 'text-amber-300 bg-amber-500/20 border-amber-400/30';
    return 'text-red-300 bg-red-500/20 border-red-400/30';
  };

  const getConfidenceIcon = (confidence: number) => {
    if (confidence >= 90) return CheckCircle;
    if (confidence >= 70) return AlertTriangle;
    return Info;
  };

  const formatValue = (value: any) => {
    if (value === null || value === undefined) return 'Not available';
    if (typeof value === 'boolean') return value ? 'Yes' : 'No';
    if (Array.isArray(value)) return value.join(', ');
    return String(value);
  };

  const getVariableCategory = (key: string) => {
    if (['sex', 'age', 'height', 'weight', 'bmi'].includes(key)) return 'Demographics';
    if (['creatinine', 'hemoglobin', 'a1c'].includes(key)) return 'Laboratory';
    if (['ejectionFraction', 'efMethod'].includes(key)) return 'Cardiac Function';
    if (['diabetes', 'tobaccoUse', 'covid19'].includes(key)) return 'Risk Factors';
    if (['lengthOfStay', 'mortality', 'surgeryDate'].includes(key)) return 'Outcomes';
    return 'Other';
  };

  const getSourceNoteContent = (source: string | string[], variableKey?: string, includeHighlights: boolean = true) => {
    if (Array.isArray(source)) {
      // For multiple sources, combine all notes
      return source.map(s => {
        const cleanSource = s.replace(' (user verified)', '');
        const noteContent = getSingleSourceContent(cleanSource);
        const processedContent = includeHighlights && variableKey 
          ? highlightValueInText(noteContent, currentExtractedData[variableKey]?.value, variableKey)
          : noteContent;
        return `--- ${cleanSource.toUpperCase()} NOTE ---\n${processedContent}`;
      }).join('\n\n');
    } else {
      const cleanSource = source.replace(' (user verified)', '');
      const noteContent = getSingleSourceContent(cleanSource);
      return includeHighlights && variableKey 
        ? highlightValueInText(noteContent, currentExtractedData[variableKey]?.value, variableKey)
        : noteContent;
    }
  };

  const getSingleSourceContent = (source: string) => {
    const cleanSource = source.replace(' (user verified)', '');
    switch (cleanSource) {
      case 'admission':
        return currentPatient.notes.admission;
      case 'hAndP':
        return currentPatient.notes.hAndP;
      case 'echo':
        return currentPatient.notes.echo;
      case 'labs':
        return currentPatient.notes.labs;
      case 'discharge':
        return currentPatient.notes.discharge;
      default:
        return 'Note content not available';
    }
  };

  const handleEditVariable = (variableKey: string, currentValue: any) => {
    setEditingVariable(variableKey);
    setEditValue(formatValue(currentValue));
  };

  const handleSaveEdit = () => {
    if (editingVariable) {
      const updatedData = { ...editedData };
      // Parse the value appropriately based on the original type
      let parsedValue: any = editValue;
      
      if (currentExtractedData[editingVariable].value === true || currentExtractedData[editingVariable].value === false) {
        parsedValue = editValue.toLowerCase() === 'true' || editValue.toLowerCase() === 'yes';
      } else if (!isNaN(Number(editValue)) && editValue.trim() !== '') {
        parsedValue = Number(editValue);
      }
      
      updatedData[selectedPatient] = {
        ...currentExtractedData,
        [editingVariable]: {
          ...currentExtractedData[editingVariable],
          value: parsedValue,
          confidence: 100, // User-verified data gets 100% confidence
          source: Array.isArray(currentExtractedData[editingVariable].source)
            ? currentExtractedData[editingVariable].source.map((src: string) => 
                src.includes(' (user verified)') ? src : src + ' (user verified)'
              )
            : (currentExtractedData[editingVariable].source.includes(' (user verified)') 
               ? currentExtractedData[editingVariable].source 
               : currentExtractedData[editingVariable].source + ' (user verified)')
        }
      };
      
      setEditedData(updatedData);
      setEditingVariable(null);
      setEditValue('');
    }
  };

  const handleCancelEdit = () => {
    setEditingVariable(null);
    setEditValue('');
  };

  const toggleCategory = (category: string) => {
    const newCollapsed = new Set(collapsedCategories);
    if (newCollapsed.has(category)) {
      newCollapsed.delete(category);
    } else {
      newCollapsed.add(category);
    }
    setCollapsedCategories(newCollapsed);
  };

  const getCategoryReviewCount = (variables: Array<[string, any]>) => {
    return variables.filter(([_, data]) => data.confidence < 90).length;
  };

  const highlightValueInText = (text: string, value: any, variableKey: string) => {
    if (!text || !value) return text;
    
    const patterns: string[] = [];
    
    // Add specific patterns based on variable type and structured values
    switch (variableKey) {
      case 'height':
        patterns.push(`${value} cm`, `Height: ${value}`, `${value}cm`);
        break;
      case 'weight':
        patterns.push(`${value} kg`, `Weight: ${value}`, `${value}kg`);
        break;
      case 'ejectionFraction':
        if (value === 'Unable to assess') {
          patterns.push('Unable to accurately assess', 'Unable to assess due to severe MR');
        } else if (value === 'Moderately reduced') {
          // For moderately reduced EF, look for the actual numeric values in the text
          patterns.push('ejection fraction: 35%', 'EF 35%', '35%', 'Left ventricular ejection fraction: 35%', 
                       'Estimated EF 45-50%', '45-50%', 'EF 45-50%');
        } else if (value === 'Severely reduced') {
          // For severely reduced EF, look for the actual numeric value in the text
          patterns.push('ejection fraction: 35%', 'EF 35%', '35%', 'Left ventricular ejection fraction: 35%');
        } else if (typeof value === 'number') {
          patterns.push(`${value}%`, `EF ${value}%`, `ejection fraction: ${value}%`);
        } else {
          patterns.push(String(value), `${value}%`, `EF ${value}%`, `ejection fraction: ${value}%`);
        }
        break;
      case 'creatinine':
        patterns.push(`${value} mg/dL`, `Creatinine: ${value}`);
        break;
      case 'hemoglobin':
        patterns.push(`${value} g/dL`, `Hemoglobin: ${value}`);
        break;
      case 'a1c':
        patterns.push(`${value}%`, `HbA1c: ${value}%`);
        break;
      case 'lengthOfStay':
        patterns.push(`${value} days`);
        break;
      case 'tobaccoUse':
        if (value === 'Current') {
          patterns.push('Current smoker', 'current every day smoker', '1 pack per day');
        } else if (value === 'Former') {
          patterns.push('Former smoker', 'quit 10 years ago', '30 pack-year history');
        } else if (value === 'Never') {
          patterns.push('Never smoker', 'never used tobacco');
        }
        break;
      case 'covid19':
      case 'covid19History':
        if (typeof value === 'string' && value.includes('No known')) {
          patterns.push('No known COVID-19 exposure', 'no known exposure');
        } else if (typeof value === 'string' && value.includes('Previous')) {
          patterns.push('History of COVID-19', 'COVID-19 infection', 'no ARDS');
        }
        break;
      case 'diabetes':
        if (value === 'Yes') {
          patterns.push('diabetes mellitus', 'insulin-dependent', 'insulin therapy');
        } else if (value === 'No') {
          patterns.push('No diabetes', 'no diabetes mellitus');
        }
        break;
      case 'efMethod':
        if (value === 'Transthoracic') {
          patterns.push('Transthoracic echocardiogram', 'TECHNIQUE: Transthoracic');
        }
        break;
      case 'walkTest':
        patterns.push('5-METER WALK TEST', '8.2 seconds', '8.5 seconds', '8.1 seconds');
        break;
      case 'mortality':
        if (value === 'No') {
          patterns.push('alive', 'recovering well', 'Alive and well');
        }
        break;
      default:
        patterns.push(String(value));
    }
    
    let highlightedText = text;
    patterns.forEach(pattern => {
      try {
        const escapedPattern = pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const regex = new RegExp(`(${escapedPattern})`, 'gi');
        highlightedText = highlightedText.replace(regex, '<span style="background-color: #fef08a; padding: 2px 4px; border-radius: 3px; font-weight: 600; color: #92400e;">$1</span>');
      } catch (e) {
        console.warn('Regex error for pattern:', pattern, e);
      }
    });
    
    return highlightedText;
  };

  const categorizedVariables = Object.entries(currentExtractedData).reduce((acc, [key, data]) => {
    const category = getVariableCategory(key);
    if (!acc[category]) acc[category] = [];
    acc[category].push([key, data]);
    return acc;
  }, {} as Record<string, Array<[string, any]>>);

  const totalVariables = Object.keys(currentExtractedData).length;
  const highConfidenceCount = Object.values(currentExtractedData).filter(
    (data: any) => data.confidence >= 90
  ).length;

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
            <h2 className="text-2xl font-bold text-white">
              ChartR AI Data Extraction Results
            </h2>
            <p className="text-slate-200 mt-1">
              {currentPatient.demographics.name} • {totalVariables} variables extracted from clinical notes
            </p>
            <div className="mt-2 text-sm text-slate-300">
              <strong className="text-white">Interactive Demo:</strong> Click view/edit buttons to see source highlighting and human validation workflow
            </div>
          </div>
        </div>

        {/* Summary Stats */}
        <div className="mt-4 grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="bg-slate-800/40 backdrop-blur-xl border border-white/10">
            <CardContent className="p-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-500/20 rounded-lg">
                  <Target className="h-5 w-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Total Variables</p>
                  <p className="text-2xl font-bold text-white">{totalVariables}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/40 backdrop-blur-xl border border-white/10">
            <CardContent className="p-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-emerald-500/20 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-emerald-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-400">High Confidence</p>
                  <p className="text-2xl font-bold text-white">{highConfidenceCount}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/40 backdrop-blur-xl border border-white/10">
            <CardContent className="p-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-amber-500/20 rounded-lg">
                  <AlertTriangle className="h-5 w-5 text-amber-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Review Needed</p>
                  <p className="text-2xl font-bold text-white">
                    {Object.values(currentExtractedData).filter((data: any) => data.confidence < 90).length}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/40 backdrop-blur-xl border border-white/10">
            <CardContent className="p-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-purple-500/20 rounded-lg">
                  <Info className="h-5 w-5 text-purple-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Avg Confidence</p>
                  <p className="text-2xl font-bold text-white">
                    {Math.round(
                      Object.values(currentExtractedData).reduce((sum: number, data: any) => sum + data.confidence, 0) / 
                      totalVariables
                    )}%
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {Object.values(currentExtractedData).some((data: any) => data.confidence < 90) && (
          <div className="mt-4 p-4 bg-amber-500/10 rounded-lg border border-amber-400/20 backdrop-blur-sm">
            <div className="flex items-center space-x-2">
              <AlertTriangle className="h-5 w-5 text-amber-400" />
              <p className="text-sm text-amber-200">
                <strong className="text-amber-100">Review Recommended:</strong> Some variables have confidence scores below 90%. 
                Click on any variable marked for review to see the source note and make corrections if needed.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Extracted Variables by Category */}
      <div className="space-y-4">
        {Object.entries(categorizedVariables).map(([category, variables]) => {
          const reviewCount = getCategoryReviewCount(variables);
          const isCollapsed = collapsedCategories.has(category);
          
          return (
            <Card key={category} className="bg-slate-800/40 backdrop-blur-xl border border-white/10">
              <CardHeader 
                className="cursor-pointer hover:bg-slate-700/30 transition-colors" 
                onClick={() => toggleCategory(category)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    {isCollapsed ? (
                      <ChevronRight className="h-5 w-5 text-slate-400" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-slate-400" />
                    )}
                    <CardTitle className="text-lg text-white">{category}</CardTitle>
                    <span className="text-sm text-slate-400">({variables.length} variables)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    {reviewCount > 0 && (
                      <Badge variant="outline" className="text-amber-300 border-amber-400/30 bg-amber-500/20">
                        <AlertTriangle className="h-3 w-3 mr-1" />
                        {reviewCount} need review
                      </Badge>
                    )}
                  </div>
                </div>
              </CardHeader>
              
              {!isCollapsed && (
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow className="border-slate-700/50">
                        <TableHead className="text-slate-300 font-medium">Variable</TableHead>
                        <TableHead className="text-slate-300 font-medium">Extracted Value</TableHead>
                        <TableHead className="text-slate-300 font-medium">Source Note</TableHead>
                        <TableHead className="text-slate-300 font-medium">Confidence</TableHead>
                        <TableHead className="text-slate-300 font-medium">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {variables.map(([key, data]) => {
                        const ConfidenceIcon = getConfidenceIcon(data.confidence);
                        const needsReview = data.confidence < 90;
                        
                        return (
                          <TableRow 
                            key={key}
                            className={`${selectedVariable === key ? 'bg-blue-500/20' : 'hover:bg-slate-700/30'} ${needsReview ? 'border-l-4 border-amber-400' : ''} transition-colors`}
                          >
                            <TableCell className="font-medium">
                              <div className="flex items-center space-x-2">
                                {needsReview && <AlertTriangle className="h-4 w-4 text-amber-400" />}
                                <span className="text-slate-200">{key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}</span>
                              </div>
                            </TableCell>
                            <TableCell>
                              <span className="font-mono text-sm text-slate-300">
                                {formatValue(data.value)}
                              </span>
                            </TableCell>
                            <TableCell>
                              <div className="flex flex-wrap gap-1">
                                {Array.isArray(data.source) ? (
                                  data.source.map((src: string, idx: number) => (
                                    <Badge key={idx} variant="outline" className="text-xs">
                                      {src}
                                    </Badge>
                                  ))
                                ) : (
                                  <Badge variant="outline" className="text-xs">
                                    {data.source}
                                  </Badge>
                                )}
                              </div>
                            </TableCell>
                            <TableCell>
                              <div className="flex items-center space-x-2">
                                <ConfidenceIcon className={`h-4 w-4 ${getConfidenceColor(data.confidence).split(' ')[0]}`} />
                                <span className={`text-sm font-medium px-2 py-1 rounded ${getConfidenceColor(data.confidence)}`}>
                                  {data.confidence}%
                                </span>
                              </div>
                            </TableCell>
                            <TableCell>
                              <div className="flex items-center space-x-2">
                                {data.dataType === 'structured' ? (
                                  <Badge variant="outline" className="text-xs text-blue-300 border-blue-400/30 bg-blue-500/20">
                                    EMR Structured Data
                                  </Badge>
                                ) : needsReview ? (
                                  <>
                                    <Button
                                      variant="outline"
                                      size="sm"
                                      onClick={() => handleEditVariable(key, data.value)}
                                      className="text-amber-300 border-amber-400/30 bg-amber-500/20 hover:bg-amber-500/30"
                                    >
                                      <Edit className="h-4 w-4 mr-1" />
                                      Review
                                    </Button>
                                    <Button
                                      variant="outline"
                                      size="sm"
                                      onClick={() => {
                                        // Confirm button functionality
                                        const updatedData = { ...editedData };
                                        updatedData[selectedPatient] = {
                                          ...currentExtractedData,
                                          [key]: {
                                            ...data,
                                            confidence: 95,
                                            source: data.source + ' (human confirmed)'
                                          }
                                        };
                                        setEditedData(updatedData);
                                      }}
                                      className="text-emerald-300 border-emerald-400/30 bg-emerald-500/20 hover:bg-emerald-500/30"
                                    >
                                      <CheckCircle className="h-4 w-4 mr-1" />
                                      Confirm
                                    </Button>
                                  </>
                                ) : (
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => setViewingVariable(key)}
                                    className="text-slate-300 hover:bg-slate-700/50"
                                  >
                                    <Info className="h-4 w-4 mr-1" />
                                    View Source
                                  </Button>
                                )}
                              </div>
                            </TableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                </CardContent>
              )}
            </Card>
          );
        })}
      </div>

      {/* Variable Detail Panel */}
      {selectedVariable && currentExtractedData[selectedVariable] && (
        <Card className="mt-6 border-2 border-blue-300 shadow-lg">
          <CardHeader className="bg-blue-50">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg text-blue-900">
                Variable Detail: {selectedVariable.charAt(0).toUpperCase() + selectedVariable.slice(1).replace(/([A-Z])/g, ' $1')}
              </CardTitle>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSelectedVariable(null)}
                className="text-blue-600 hover:text-blue-800"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <p className="text-sm font-medium text-slate-600">Extracted Value</p>
                <p className="text-lg font-mono mt-1 p-2 bg-slate-100 rounded border">
                  {formatValue(currentExtractedData[selectedVariable]?.value)}
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-slate-600">Source Document(s)</p>
                <div className="mt-1 flex flex-wrap gap-1">
                  {Array.isArray(currentExtractedData[selectedVariable]?.source) ? (
                    currentExtractedData[selectedVariable]?.source.map((src: string, idx: number) => (
                      <Badge key={idx} variant="outline" className="text-sm p-2">
                        {src.replace(' (user verified)', '')}
                      </Badge>
                    ))
                  ) : (
                    <Badge variant="outline" className="text-sm p-2">
                      {String(currentExtractedData[selectedVariable]?.source).replace(' (user verified)', '')}
                    </Badge>
                  )}
                </div>
              </div>
              <div>
                <p className="text-sm font-medium text-slate-600">Confidence Score</p>
                <div className="mt-1">
                  <Progress value={currentExtractedData[selectedVariable]?.confidence || 0} className="h-3" />
                  <p className="text-sm text-slate-500 mt-1 font-medium">
                    {currentExtractedData[selectedVariable]?.confidence}% confidence
                  </p>
                </div>
              </div>
            </div>

            {/* Source Note Content */}
            <div className="border-t pt-4">
              <p className="text-sm font-medium text-slate-600 mb-3">Complete Source Note (with highlighted extracted values):</p>
              <div className="bg-slate-50 p-4 rounded-lg border max-h-80 overflow-y-auto">
                <div 
                  className="whitespace-pre-wrap text-sm font-mono text-slate-700 leading-relaxed"
                  dangerouslySetInnerHTML={{
                    __html: highlightValueInText(
                      getSourceNoteContent(
                        Array.isArray(currentExtractedData[selectedVariable]?.source) 
                          ? currentExtractedData[selectedVariable]?.source.map((src: string) => src.replace(' (user verified)', ''))
                          : String(currentExtractedData[selectedVariable]?.source).replace(' (user verified)', '')
                      ),
                      currentExtractedData[selectedVariable]?.value,
                      selectedVariable
                    )
                  }}
                />
              </div>
            </div>

            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-sm text-blue-600 mb-2 font-medium">
                <strong>Extraction Analysis:</strong>
              </p>
              <p className="text-sm text-blue-700">
                This variable was extracted from the <strong>{currentExtractedData[selectedVariable]?.source}</strong> note
                {(currentExtractedData[selectedVariable]?.confidence || 0) >= 90 
                  ? ' with high confidence based on clear documentation.'
                  : (currentExtractedData[selectedVariable]?.confidence || 0) >= 70
                    ? ' with moderate confidence. Manual review may be beneficial.'
                    : ' with lower confidence. Manual review is recommended.'}
              </p>
              {(currentExtractedData[selectedVariable]?.confidence || 0) < 90 && (
                <div className="mt-3">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleEditVariable(selectedVariable, currentExtractedData[selectedVariable]?.value)}
                    className="text-amber-600 border-amber-200 hover:bg-amber-50"
                  >
                    <Edit className="h-4 w-4 mr-1" />
                    Review and Edit
                  </Button>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      )}

      {/* View Details Dialog */}
      <Dialog open={!!viewingVariable} onOpenChange={() => setViewingVariable(null)}>
        <DialogContent className="max-w-4xl max-h-[80vh]">
          <DialogHeader>
            <DialogTitle>
              Variable Details: {viewingVariable ? viewingVariable.charAt(0).toUpperCase() + viewingVariable.slice(1).replace(/([A-Z])/g, ' $1') : ''}
            </DialogTitle>
          </DialogHeader>
          
          {viewingVariable && currentExtractedData[viewingVariable] && (
            <div className="space-y-4 overflow-y-auto max-h-[60vh] pr-2">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-slate-50 rounded-lg">
                <div>
                  <Label className="text-sm font-medium text-slate-600">
                    {currentExtractedData[viewingVariable]?.dataType === 'structured' ? 'Structured Value' : 'Extracted Value'}
                  </Label>
                  <p className="font-mono text-lg bg-white p-2 rounded border mt-1">
                    {formatValue(currentExtractedData[viewingVariable]?.value)}
                  </p>
                </div>
                <div>
                  <Label className="text-sm font-medium text-slate-600">Source</Label>
                  <div className="mt-1 flex flex-wrap gap-1">
                    {Array.isArray(currentExtractedData[viewingVariable]?.source) ? (
                      currentExtractedData[viewingVariable]?.source.map((src: string, idx: number) => (
                        <Badge key={idx} variant="outline" className="text-sm p-2">
                          {src}
                        </Badge>
                      ))
                    ) : (
                      <Badge variant="outline" className="text-sm p-2">
                        {currentExtractedData[viewingVariable]?.source}
                      </Badge>
                    )}
                  </div>
                </div>
                <div>
                  <Label className="text-sm font-medium text-slate-600">
                    {currentExtractedData[viewingVariable]?.dataType === 'structured' ? 'Data Type' : 'Confidence Score'}
                  </Label>
                  <div className="mt-1">
                    {currentExtractedData[viewingVariable]?.dataType === 'structured' ? (
                      <Badge className="bg-blue-100 text-blue-700 border-blue-200">
                        EMR Structured Field
                      </Badge>
                    ) : (
                      <>
                        <Progress value={currentExtractedData[viewingVariable]?.confidence || 0} className="h-3" />
                        <p className="text-sm text-slate-500 mt-1 font-medium">
                          {currentExtractedData[viewingVariable]?.confidence}% confidence
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {currentExtractedData[viewingVariable]?.dataType === 'structured' ? (
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="text-sm text-blue-600 mb-2 font-medium">
                    <strong>EMR Structured Data:</strong>
                  </p>
                  <p className="text-sm text-blue-700">
                    This value comes directly from structured EMR fields such as demographics, laboratory results, or vital signs. 
                    These are discrete database fields that don't require AI extraction from clinical notes.
                  </p>
                </div>
              ) : (
                <>
                  <div>
                    <Label className="text-sm font-medium text-slate-600">Source Note(s) with Highlights</Label>
                    <div className="bg-slate-50 p-4 rounded-lg border mt-2 max-h-96 overflow-y-auto">
                      <div 
                        className="whitespace-pre-wrap text-sm font-mono text-slate-700 leading-relaxed"
                        dangerouslySetInnerHTML={{
                          __html: getSourceNoteContent(
                            currentExtractedData[viewingVariable]?.source,
                            viewingVariable,
                            true
                          )
                        }}
                      />
                    </div>
                  </div>

                  <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                    <p className="text-sm text-green-600 mb-2 font-medium">
                      <strong>AI Extraction Analysis:</strong>
                    </p>
                    <p className="text-sm text-green-700">
                      ChartR AI extracted this variable from clinical note(s) 
                      {(currentExtractedData[viewingVariable]?.confidence || 0) >= 90 
                        ? ' with high confidence based on clear documentation.'
                        : (currentExtractedData[viewingVariable]?.confidence || 0) >= 70
                          ? ' with moderate confidence. Manual review may be beneficial.'
                          : ' with lower confidence. Manual review is recommended.'}
                    </p>
                  </div>
                </>
              )}
            </div>
          )}

          <DialogFooter>
            <Button variant="outline" onClick={() => setViewingVariable(null)}>
              Close
            </Button>
            {viewingVariable && currentExtractedData[viewingVariable] && (currentExtractedData[viewingVariable]?.confidence || 0) < 90 && (
              <Button
                onClick={() => {
                  handleEditVariable(viewingVariable, currentExtractedData[viewingVariable]?.value);
                  setViewingVariable(null);
                }}
                className="text-amber-600 border-amber-200 hover:bg-amber-50"
                variant="outline"
              >
                <Edit className="mr-2 h-4 w-4" />
                Review and Edit
              </Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit Variable Dialog */}
      <Dialog open={!!editingVariable} onOpenChange={() => handleCancelEdit()}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>
              Review and Edit Variable: {editingVariable ? editingVariable.charAt(0).toUpperCase() + editingVariable.slice(1).replace(/([A-Z])/g, ' $1') : ''}
            </DialogTitle>
          </DialogHeader>
          
          {editingVariable && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-sm font-medium text-slate-600">Current Value</Label>
                  <p className="font-mono text-sm bg-slate-100 p-2 rounded border">
                    {formatValue(currentExtractedData[editingVariable]?.value)}
                  </p>
                </div>
                <div>
                  <Label className="text-sm font-medium text-slate-600">Confidence</Label>
                  <p className="text-sm bg-slate-100 p-2 rounded border">
                    {currentExtractedData[editingVariable]?.confidence}%
                  </p>
                </div>
              </div>

              <div>
                <Label htmlFor="edit-value">Corrected Value</Label>
                <Input
                  id="edit-value"
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                  placeholder="Enter the correct value"
                  className="mt-1"
                />
              </div>

              <div>
                <Label className="text-sm font-medium text-slate-600">Source Note Excerpt</Label>
                <div className="bg-slate-50 p-3 rounded border max-h-40 overflow-y-auto">
                  <div 
                    className="whitespace-pre-wrap text-xs font-mono text-slate-700 leading-relaxed"
                    dangerouslySetInnerHTML={{
                      __html: getSourceNoteContent(
                        currentExtractedData[editingVariable]?.source,
                        editingVariable,
                        true
                      )
                    }}
                  />
                </div>
              </div>
            </div>
          )}

          <DialogFooter>
            <Button variant="outline" onClick={handleCancelEdit}>
              <X className="mr-2 h-4 w-4" />
              Cancel
            </Button>
            <Button onClick={handleSaveEdit}>
              <Save className="mr-2 h-4 w-4" />
              Save Correction
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Continue Section with ROI Messaging */}
      <div className="mt-8 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-green-200">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-medium text-slate-900">
              Ready for Actionable Intelligence
            </h3>
            <p className="text-sm text-slate-700 mt-1">
              {highConfidenceCount} of {totalVariables} variables extracted with high confidence. 
              This process typically saves 45+ minutes per patient vs manual review.
            </p>
            <div className="mt-2 text-xs text-slate-600">
              <strong>ROI Impact:</strong> ChartR saves hospitals $7.5M+ annually through automated registry reporting
            </div>
          </div>
          <Button onClick={() => onNavigate('applications', selectedPatient)} className="bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700">
            Explore Clinical Applications
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
} 