'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BarChart3, Download, AlertTriangle, TrendingUp, Users, Calendar, FileText, Brain, Target, Shield, Clock, DollarSign, Activity, Building } from 'lucide-react';

type DemoStep = 'selection' | 'extraction' | 'applications' | 'outputs';

interface ActionableIntelligenceProps {
  onNavigate: (step: DemoStep, patientId?: string) => void;
}

export function ActionableIntelligence({ onNavigate }: ActionableIntelligenceProps) {
  const [activeTab, setActiveTab] = useState('dashboard');

  const dashboardMetrics = [
    {
      title: 'Annual Cost Savings',
      value: '$7.5M+',
      change: '+12%',
      trend: 'up',
      icon: DollarSign,
      description: 'Regulatory compliance automation'
    },
    {
      title: 'Patient Outcomes',
      value: '23%',
      change: '+15%',
      trend: 'up',
      icon: TrendingUp,
      description: 'Readmission reduction'
    },
    {
      title: 'Processing Speed',
      value: '80x',
      change: '+18%',
      trend: 'up',
      icon: Clock,
      description: 'Faster than manual review'
    },
    {
      title: 'Compliance Rate',
      value: '99.2%',
      change: '+2.1%',
      trend: 'up',
      icon: Shield,
      description: 'Registry reporting accuracy'
    }
  ];

  const recentAlerts = [
    {
      id: 1,
      type: 'warning',
      title: 'Quality Metric Alert',
      message: 'Surgical site infection rate above threshold (2.1% vs target 1.8%)',
      priority: 'high',
      timestamp: '2 hours ago',
      action: 'Review Cases'
    },
    {
      id: 2,
      type: 'info',
      title: 'Registry Deadline',
      message: 'Q4 STS registry submission due in 5 days',
      priority: 'medium',
      timestamp: '4 hours ago',
      action: 'Prepare Export'
    },
    {
      id: 3,
      type: 'success',
      title: 'Model Performance',
      message: 'Readmission prediction model accuracy improved to 89.2%',
      priority: 'low',
      timestamp: '1 day ago',
      action: 'View Details'
    }
  ];

  const reportTemplates = [
    {
      name: 'STS Registry Report',
      description: 'Quarterly cardiac surgery outcomes',
      status: 'ready',
      lastGenerated: '2024-01-15',
      records: 847,
      type: 'regulatory'
    },
    {
      name: 'Quality Dashboard',
      description: 'Monthly quality metrics and trends',
      status: 'ready',
      lastGenerated: '2024-01-14',
      records: 1253,
      type: 'quality'
    },
    {
      name: 'Risk Assessment Report',
      description: 'Patient risk stratification analysis',
      status: 'processing',
      lastGenerated: '2024-01-10',
      records: 423,
      type: 'analytics'
    },
    {
      name: 'Clinical Research Export',
      description: 'De-identified data for research studies',
      status: 'ready',
      lastGenerated: '2024-01-12',
      records: 678,
      type: 'research'
    }
  ];

  const insights = [
    {
      title: 'Readmission Risk Reduction',
      insight: 'Patients with diabetes and ejection fraction <40% show 35% higher readmission rates',
      recommendation: 'Implement targeted discharge planning for high-risk diabetic patients',
      impact: 'Potential 15-20% reduction in 30-day readmissions',
      confidence: 92,
      category: 'Clinical Outcomes'
    },
    {
      title: 'Operative Efficiency Opportunity',
      insight: 'OR utilization drops 18% on Fridays with 23% longer case times',
      recommendation: 'Optimize Friday scheduling with shorter, less complex cases',
      impact: 'Estimated $480K annual efficiency savings',
      confidence: 87,
      category: 'Operational Efficiency'
    },
    {
      title: 'Quality Metric Improvement',
      insight: 'Post-op antibiotic prophylaxis timing varies by surgeon (72-96% compliance)',
      recommendation: 'Standardize antibiotic protocols with automated reminders',
      impact: 'Target 99% compliance, reduce SSI by 0.8%',
      confidence: 95,
      category: 'Quality Improvement'
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'text-red-700 bg-red-50 border-red-200';
      case 'medium':
        return 'text-yellow-700 bg-yellow-50 border-yellow-200';
      case 'low':
        return 'text-green-700 bg-green-50 border-green-200';
      default:
        return 'text-slate-700 bg-slate-50 border-slate-200';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ready':
        return 'text-green-700 bg-green-50 border-green-200';
      case 'processing':
        return 'text-blue-700 bg-blue-50 border-blue-200';
      case 'error':
        return 'text-red-700 bg-red-50 border-red-200';
      default:
        return 'text-slate-700 bg-slate-50 border-slate-200';
    }
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">
          Actionable Intelligence
        </h2>
        <p className="text-slate-600">
          Transform curated data into dashboards, reports, alerts, and clinical insights
        </p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="dashboard" className="flex items-center space-x-2">
            <BarChart3 className="h-4 w-4" />
            <span>Dashboard</span>
          </TabsTrigger>
          <TabsTrigger value="reports" className="flex items-center space-x-2">
            <FileText className="h-4 w-4" />
            <span>Reports</span>
          </TabsTrigger>
          <TabsTrigger value="alerts" className="flex items-center space-x-2">
            <AlertTriangle className="h-4 w-4" />
            <span>Alerts</span>
          </TabsTrigger>
          <TabsTrigger value="insights" className="flex items-center space-x-2">
            <Brain className="h-4 w-4" />
            <span>Insights</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="dashboard" className="space-y-6">
          {/* Key Metrics */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {dashboardMetrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <Card key={index} className="shadow-sm">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <Icon className="h-5 w-5 text-slate-600" />
                      <Badge variant="outline" className={`text-xs ${
                        metric.trend === 'up' ? 'text-green-600 bg-green-50' : 'text-red-600 bg-red-50'
                      }`}>
                        {metric.change}
                      </Badge>
                    </div>
                    <div className="text-2xl font-bold text-slate-900 mb-1">
                      {metric.value}
                    </div>
                    <div className="text-sm text-slate-600">{metric.title}</div>
                    <div className="text-xs text-slate-500 mt-1">{metric.description}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Charts and Analytics */}
          <div className="grid lg:grid-cols-2 gap-6">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2 text-blue-600" />
                  Outcome Trends
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded border">
                    <span className="text-sm font-medium">30-Day Readmissions</span>
                    <span className="text-lg font-bold text-blue-600">8.2%</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded border">
                    <span className="text-sm font-medium">Mortality Rate</span>
                    <span className="text-lg font-bold text-green-600">1.4%</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-purple-50 rounded border">
                    <span className="text-sm font-medium">Length of Stay</span>
                    <span className="text-lg font-bold text-purple-600">4.8 days</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="h-5 w-5 mr-2 text-green-600" />
                  Patient Volume
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-slate-50 rounded border">
                    <span className="text-sm font-medium">This Month</span>
                    <span className="text-lg font-bold text-slate-900">247 cases</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-slate-50 rounded border">
                    <span className="text-sm font-medium">YTD Total</span>
                    <span className="text-lg font-bold text-slate-900">2,847 cases</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-slate-50 rounded border">
                    <span className="text-sm font-medium">Completion Rate</span>
                    <span className="text-lg font-bold text-slate-900">98.7%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="reports" className="space-y-6">
          <div className="grid gap-4">
            {reportTemplates.map((report, index) => (
              <Card key={index} className="shadow-sm">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="font-semibold text-slate-900">{report.name}</h3>
                        <Badge className={getStatusColor(report.status)} variant="outline">
                          {report.status}
                        </Badge>
                        <Badge variant="outline" className="text-slate-600">
                          {report.type}
                        </Badge>
                      </div>
                      <p className="text-sm text-slate-600 mb-1">{report.description}</p>
                      <div className="flex items-center space-x-4 text-xs text-slate-500">
                        <span>Last: {report.lastGenerated}</span>
                        <span>Records: {report.records.toLocaleString()}</span>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Badge variant="outline" className="text-slate-600">
                        Ready to Export
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="alerts" className="space-y-6">
          <div className="grid gap-4">
            {recentAlerts.map((alert) => (
              <Card key={alert.id} className="shadow-sm">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="font-semibold text-slate-900">{alert.title}</h3>
                        <Badge className={getPriorityColor(alert.priority)} variant="outline">
                          {alert.priority}
                        </Badge>
                      </div>
                      <p className="text-sm text-slate-600 mb-2">{alert.message}</p>
                      <div className="text-xs text-slate-500">{alert.timestamp}</div>
                    </div>
                    <Badge variant="outline" className="text-slate-600">
                      {alert.action}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="insights" className="space-y-6">
          <div className="grid gap-6">
            {insights.map((insight, index) => (
              <Card key={index} className="shadow-lg">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{insight.title}</CardTitle>
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline">{insight.category}</Badge>
                      <Badge className="bg-blue-100 text-blue-700">
                        {insight.confidence}% confidence
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium text-slate-900 mb-2">Insight</h4>
                    <p className="text-slate-600">{insight.insight}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900 mb-2">Recommendation</h4>
                    <p className="text-slate-600">{insight.recommendation}</p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                    <h4 className="font-medium text-green-900 mb-1">Projected Impact</h4>
                    <p className="text-green-700">{insight.impact}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Summary */}
      <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              Complete Clinical Intelligence Platform
            </h3>
            <p className="text-slate-600 max-w-2xl">
              From patient selection to actionable insights, ChartR transforms your clinical data 
              into a comprehensive intelligence platform that drives better outcomes and significant cost savings.
            </p>
          </div>
          <div className="flex space-x-3">
            <Button variant="outline">
              Schedule Demo
            </Button>
            <Button>
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
} 