"use client";

import { useState, useEffect } from "react";
import { Navbar } from "@/components/navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  AreaChart,
  Area,
} from "recharts";
import {
  TrendingUp,
  Users,
  Target,
  DollarSign,
  Activity,
  BarChart3,
  PieChart as PieChartIcon,
  Download,
  Filter,
  Calendar,
  Award,
  CheckCircle2,
  AlertCircle,
  MapPin,
  Briefcase,
  Loader2,
  Search,
  Plus,
  X,
} from "lucide-react";

const stats = [
  {
    label: "Total Policies",
    value: "156",
    change: "+12",
    icon: <Briefcase className="h-5 w-5" />,
    color: "text-blue-600",
  },
  {
    label: "Active Programs",
    value: "89",
    change: "+8",
    icon: <Activity className="h-5 w-5" />,
    color: "text-green-600",
  },
  {
    label: "Beneficiaries",
    value: "12.5M",
    change: "+1.2M",
    icon: <Users className="h-5 w-5" />,
    color: "text-purple-600",
  },
  {
    label: "Budget Utilization",
    value: "87.3%",
    change: "+5.2%",
    icon: <DollarSign className="h-5 w-5" />,
    color: "text-orange-600",
  },
];

const sectorData = [
  {
    name: "Healthcare",
    impact: 92,
    beneficiaries: "3.2M",
    budget: "₹2,450 Cr",
    trend: "+15%",
    color: "#3b82f6",
  },
  {
    name: "Education",
    impact: 88,
    beneficiaries: "4.8M",
    budget: "₹3,100 Cr",
    trend: "+12%",
    color: "#10b981",
  },
  {
    name: "Infrastructure",
    impact: 85,
    beneficiaries: "2.1M",
    budget: "₹5,600 Cr",
    trend: "+8%",
    color: "#f59e0b",
  },
  {
    name: "Agriculture",
    impact: 79,
    beneficiaries: "1.9M",
    budget: "₹1,800 Cr",
    trend: "+5%",
    color: "#ef4444",
  },
];

const performanceMetrics = [
  { subject: "Citizen Satisfaction", A: 78.5, fullMark: 100 },
  { subject: "Service Delivery", A: 82.3, fullMark: 100 },
  { subject: "Transparency", A: 85.7, fullMark: 100 },
  { subject: "Digital Adoption", A: 71.2, fullMark: 100 },
  { subject: "Implementation Speed", A: 76.8, fullMark: 100 },
  { subject: "Cost Efficiency", A: 80.4, fullMark: 100 },
];

const timeSeriesData = [
  { month: "Jan", impact: 72, budget: 85, satisfaction: 68 },
  { month: "Feb", impact: 75, budget: 82, satisfaction: 71 },
  { month: "Mar", impact: 78, budget: 87, satisfaction: 74 },
  { month: "Apr", impact: 81, budget: 88, satisfaction: 76 },
  { month: "May", impact: 83, budget: 86, satisfaction: 78 },
  { month: "Jun", impact: 85, budget: 89, satisfaction: 79 },
];

const recentInitiatives = [
  {
    name: "Digital Health Mission",
    sector: "Healthcare",
    status: "Active",
    impact: 91,
    beneficiaries: "850K",
    date: "Jan 2024",
  },
  {
    name: "Smart City Phase 3",
    sector: "Infrastructure",
    status: "Active",
    impact: 87,
    beneficiaries: "1.2M",
    date: "Feb 2024",
  },
  {
    name: "Skill India 2.0",
    sector: "Education",
    status: "Active",
    impact: 83,
    beneficiaries: "650K",
    date: "Mar 2024",
  },
  {
    name: "Farmer Connect",
    sector: "Agriculture",
    status: "Planning",
    impact: 0,
    beneficiaries: "500K (Est)",
    date: "Apr 2024",
  },
];

const geographicImpact = [
  { state: "Maharashtra", score: 88, programs: 45 },
  { state: "Karnataka", score: 85, programs: 42 },
  { state: "Tamil Nadu", score: 83, programs: 39 },
  { state: "Gujarat", score: 82, programs: 38 },
  { state: "Uttar Pradesh", score: 76, programs: 52 },
];

interface AnalysisResult {
  policy_name: string;
  analysis_summary?: string;
  overall_sentiment?: {
    positive_percentage: number;
    negative_percentage: number;
    neutral_percentage: number;
    overall_sentiment: string;
  };
  policy_effectiveness?: {
    score: number;
    rating: string;
    strengths?: string[];
    weaknesses?: string[];
    recommendations?: string[];
  };
  public_perception?: {
    awareness_level: string;
    trust_level: string;
    key_concerns?: string[];
    positive_aspects?: string[];
    sentiment_trend: string;
  };
  news_analysis?: {
    total_articles: number;
    sentiment?: any;
    key_themes?: string[];
    top_positive_headlines?: string[];
    top_negative_headlines?: string[];
    sources?: string[];
  };
  key_insights?: string[];
  data_driven_recommendations?: string[];
  error?: string;
}

export default function GovernanceImpactPage() {
  const [loading, setLoading] = useState(false);
  const [selectedSector, setSelectedSector] = useState<string | null>(null);

  // Form state
  const [policyName, setPolicyName] = useState("");
  const [keywords, setKeywords] = useState<string[]>([]);
  const [maxNews, setMaxNews] = useState(30);
  const [keywordInput, setKeywordInput] = useState("");
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleAddKeyword = () => {
    if (keywordInput.trim() && !keywords.includes(keywordInput.trim())) {
      setKeywords([...keywords, keywordInput.trim()]);
      setKeywordInput("");
    }
  };

  const handleRemoveKeyword = (keyword: string) => {
    setKeywords(keywords.filter(k => k !== keyword));
  };

  const handleAnalyze = async () => {
    setIsAnalyzing(true);
    setAnalysisResult(null);

    try {
      const response = await fetch('https://suffixal-unbiliously-simona.ngrok-free.dev/api/v1/gim/analyze', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          policy_name: policyName,
          keywords: keywords,
          max_news: maxNews,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setAnalysisResult(data);
    } catch (error: any) {
      setAnalysisResult({
        policy_name: policyName,
        error: error.message || 'Failed to analyze policy. Please try again.',
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden bg-black">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto text-white"
          >
            <Badge className="mb-4 bg-white text-black">
              FR-GOV-01
            </Badge>
            <h1 className="text-5xl font-bold mb-6">
              Governance Impact Measurement
            </h1>
            <p className="text-xl mb-6 opacity-90">
              Comprehensive analytics and real-time monitoring of government programs,
              policies, and initiatives. Measure impact, track performance, and optimize
              resource allocation for maximum citizen benefit.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Policy Analysis Form */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="shadow-lg border-0">
              <CardHeader className="pb-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-black text-white rounded-xl shadow-md">
                    <Search className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-3xl font-bold mb-2">Analyze Policy Impact</CardTitle>
                    <CardDescription className="text-base">
                      Enter policy details to generate comprehensive impact analysis using AI-powered sentiment analysis
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6 pt-2">
                {/* Policy Name Input */}
                <div className="space-y-3">
                  <label className="text-sm font-semibold text-gray-700">Policy Name <span className="text-red-500">*</span></label>
                  <Input
                    placeholder="e.g., h1b visa, education reform, healthcare initiative"
                    value={policyName}
                    onChange={(e) => setPolicyName(e.target.value)}
                    className="w-full h-11 text-base"
                  />
                </div>

                {/* Keywords Input */}
                <div className="space-y-3">
                  <label className="text-sm font-semibold text-gray-700">Keywords <span className="text-red-500">*</span></label>
                  <div className="flex gap-2">
                    <Input
                      placeholder="Add keyword and press Enter or click +"
                      value={keywordInput}
                      onChange={(e) => setKeywordInput(e.target.value)}
                      onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                          e.preventDefault();
                          handleAddKeyword();
                        }
                      }}
                      className="flex-1 h-11 text-base"
                    />
                    <Button
                      type="button"
                      onClick={handleAddKeyword}
                      disabled={!keywordInput.trim()}
                      className="bg-black hover:bg-gray-800 text-white h-11 px-4"
                    >
                      <Plus className="h-5 w-5" />
                    </Button>
                  </div>
                  {keywords.length > 0 && (
                    <div className="flex flex-wrap gap-2 p-3 bg-gray-50 rounded-lg border border-gray-200">
                      {keywords.map((keyword, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="text-sm py-1.5 px-3 flex items-center gap-2 bg-white border border-gray-300 hover:border-gray-400 transition-colors"
                        >
                          {keyword}
                          <button
                            onClick={() => handleRemoveKeyword(keyword)}
                            className="ml-1 hover:text-red-600 transition-colors"
                          >
                            <X className="h-3.5 w-3.5" />
                          </button>
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>

                {/* Max News Input */}
                <div className="space-y-3">
                  <label className="text-sm font-semibold text-gray-700">Maximum News Articles</label>
                  <Input
                    type="number"
                    min="1"
                    max="100"
                    value={maxNews}
                    onChange={(e) => setMaxNews(parseInt(e.target.value) || 30)}
                    className="w-full h-11 text-base"
                  />
                  <p className="text-sm text-gray-500">
                    Number of news articles to analyze (1-100)
                  </p>
                </div>

                {/* Analyze Button */}
                <div className="pt-4 border-t border-gray-200">
                  <Button
                    onClick={handleAnalyze}
                    disabled={isAnalyzing || !policyName || keywords.length === 0}
                    className="w-full bg-black hover:bg-gray-800 text-white h-14 text-base font-semibold shadow-lg hover:shadow-xl transition-all"
                  >
                    {isAnalyzing ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Analyzing Policy Impact...
                      </>
                    ) : (
                      <>
                        <Search className="mr-2 h-5 w-5" />
                        Analyze Impact
                      </>
                    )}
                  </Button>
                </div>

                {/* Analysis Results */}
                {analysisResult && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-8 pt-8 border-t-2 border-gray-200"
                  >
                    {analysisResult.error ? (
                      <div className="p-6 bg-red-50 rounded-xl border-2 border-red-200 shadow-sm">
                        <div className="flex items-start gap-3">
                          <AlertCircle className="h-6 w-6 text-red-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <h4 className="font-bold text-red-900 mb-2 text-lg">Analysis Failed</h4>
                            <p className="text-sm text-red-700">{analysisResult.error}</p>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-6">
                        <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border-2 border-green-200 shadow-md">
                          <div className="flex items-start gap-4">
                            <CheckCircle2 className="h-7 w-7 text-green-600 mt-0.5 flex-shrink-0" />
                            <div className="flex-1">
                              <h4 className="text-xl font-bold text-green-900 mb-2">
                                Analysis Complete
                              </h4>
                              <p className="text-base text-green-700">
                                Policy: <span className="font-bold">{analysisResult.policy_name}</span>
                              </p>
                            </div>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => {
                                const blob = new Blob([JSON.stringify(analysisResult, null, 2)], {
                                  type: 'application/json',
                                });
                                const url = URL.createObjectURL(blob);
                                const a = document.createElement('a');
                                a.href = url;
                                a.download = `analysis-${policyName.replace(/\s+/g, '-')}.json`;
                                a.click();
                              }}
                              className="flex-shrink-0 border-green-300 hover:bg-green-100 hover:border-green-400"
                            >
                              <Download className="mr-2 h-4 w-4" />
                              Download JSON
                            </Button>
                          </div>
                        </div>

                        {/* Render Analysis Results */}
                        <div className="space-y-6">
                          {/* Analysis Summary */}
                          {analysisResult.analysis_summary && (
                            <Card className="shadow-md border-l-4 border-l-blue-500">
                              <CardHeader className="pb-3">
                                <CardTitle className="text-xl font-bold flex items-center gap-2">
                                  <Activity className="h-5 w-5 text-blue-600" />
                                  Analysis Summary
                                </CardTitle>
                              </CardHeader>
                              <CardContent>
                                <p className="text-gray-700 leading-relaxed text-base">
                                  {analysisResult.analysis_summary}
                                </p>
                              </CardContent>
                            </Card>
                          )}

                          {/* Overall Sentiment */}
                          {analysisResult.overall_sentiment && (
                            <Card className="shadow-md border-l-4 border-l-purple-500">
                              <CardHeader className="pb-3">
                                <CardTitle className="text-xl font-bold flex items-center gap-2">
                                  <PieChartIcon className="h-5 w-5 text-purple-600" />
                                  Overall Sentiment
                                </CardTitle>
                              </CardHeader>
                              <CardContent>
                                <div className="grid md:grid-cols-2 gap-6">
                                  <div>
                                    <div className="space-y-4">
                                      <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                                        <span className="text-sm font-semibold text-gray-700">Positive</span>
                                        <span className="font-bold text-green-600 text-lg">
                                          {analysisResult.overall_sentiment.positive_percentage}%
                                        </span>
                                      </div>
                                      <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                                        <span className="text-sm font-semibold text-gray-700">Negative</span>
                                        <span className="font-bold text-red-600 text-lg">
                                          {analysisResult.overall_sentiment.negative_percentage}%
                                        </span>
                                      </div>
                                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                                        <span className="text-sm font-semibold text-gray-700">Neutral</span>
                                        <span className="font-bold text-gray-600 text-lg">
                                          {analysisResult.overall_sentiment.neutral_percentage}%
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex items-center justify-center">
                                    <Badge
                                      className={`text-xl px-6 py-3 font-bold ${
                                        analysisResult.overall_sentiment.overall_sentiment === 'positive'
                                          ? 'bg-green-600'
                                          : analysisResult.overall_sentiment.overall_sentiment === 'negative'
                                          ? 'bg-red-600'
                                          : 'bg-gray-600'
                                      } text-white shadow-lg`}
                                    >
                                      {analysisResult.overall_sentiment.overall_sentiment.toUpperCase()}
                                    </Badge>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          )}

                          {/* Policy Effectiveness */}
                          {analysisResult.policy_effectiveness && (
                            <Card className="shadow-md border-l-4 border-l-orange-500">
                              <CardHeader className="pb-3">
                                <CardTitle className="text-xl font-bold flex items-center gap-2">
                                  <Target className="h-5 w-5 text-orange-600" />
                                  Policy Effectiveness
                                </CardTitle>
                              </CardHeader>
                              <CardContent className="space-y-6">
                                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl">
                                  <div>
                                    <p className="text-sm text-gray-600 font-semibold mb-1">Score</p>
                                    <p className="text-4xl font-bold text-orange-600">{analysisResult.policy_effectiveness.score}<span className="text-2xl text-gray-500">/100</span></p>
                                  </div>
                                  <Badge variant="secondary" className="text-lg px-5 py-2 font-bold bg-white shadow-md">
                                    {analysisResult.policy_effectiveness.rating}
                                  </Badge>
                                </div>

                                {analysisResult.policy_effectiveness.strengths?.length > 0 && (
                                  <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                    <h4 className="font-bold text-green-900 mb-3 flex items-center gap-2">
                                      <CheckCircle2 className="h-5 w-5" />
                                      Strengths
                                    </h4>
                                    <ul className="space-y-2 text-sm text-gray-700">
                                      {analysisResult.policy_effectiveness.strengths.map((item: string, idx: number) => (
                                        <li key={idx} className="flex gap-2">
                                          <span className="text-green-600 font-bold">•</span>
                                          <span>{item}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                )}

                                {analysisResult.policy_effectiveness.weaknesses?.length > 0 && (
                                  <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                                    <h4 className="font-bold text-red-900 mb-3 flex items-center gap-2">
                                      <AlertCircle className="h-5 w-5" />
                                      Weaknesses
                                    </h4>
                                    <ul className="space-y-2 text-sm text-gray-700">
                                      {analysisResult.policy_effectiveness.weaknesses.map((item: string, idx: number) => (
                                        <li key={idx} className="flex gap-2">
                                          <span className="text-red-600 font-bold">•</span>
                                          <span>{item}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                )}

                                {analysisResult.policy_effectiveness.recommendations?.length > 0 && (
                                  <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                                    <h4 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                                      <Award className="h-5 w-5" />
                                      Recommendations
                                    </h4>
                                    <ul className="space-y-2 text-sm text-gray-700">
                                      {analysisResult.policy_effectiveness.recommendations.map((item: string, idx: number) => (
                                        <li key={idx} className="flex gap-2">
                                          <span className="text-blue-600 font-bold">•</span>
                                          <span>{item}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                )}
                              </CardContent>
                            </Card>
                          )}

                          {/* Public Perception */}
                          {analysisResult.public_perception && (
                            <Card className="shadow-md border-l-4 border-l-indigo-500">
                              <CardHeader className="pb-3">
                                <CardTitle className="text-xl font-bold flex items-center gap-2">
                                  <Users className="h-5 w-5 text-indigo-600" />
                                  Public Perception
                                </CardTitle>
                              </CardHeader>
                              <CardContent className="space-y-6">
                                <div className="grid md:grid-cols-3 gap-4">
                                  <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                                    <p className="text-xs text-gray-600 font-semibold mb-2">Awareness Level</p>
                                    <p className="font-bold text-lg text-blue-900">{analysisResult.public_perception.awareness_level}</p>
                                  </div>
                                  <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                                    <p className="text-xs text-gray-600 font-semibold mb-2">Trust Level</p>
                                    <p className="font-bold text-lg text-purple-900">{analysisResult.public_perception.trust_level}</p>
                                  </div>
                                  <div className="p-4 bg-pink-50 rounded-lg border border-pink-200">
                                    <p className="text-xs text-gray-600 font-semibold mb-2">Sentiment Trend</p>
                                    <p className="font-bold text-lg text-pink-900">{analysisResult.public_perception.sentiment_trend}</p>
                                  </div>
                                </div>

                                {analysisResult.public_perception.key_concerns?.length > 0 && (
                                  <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                                    <h4 className="font-bold text-orange-900 mb-3 flex items-center gap-2">
                                      <AlertCircle className="h-5 w-5" />
                                      Key Concerns
                                    </h4>
                                    <ul className="space-y-2 text-sm text-gray-700">
                                      {analysisResult.public_perception.key_concerns.map((item: string, idx: number) => (
                                        <li key={idx} className="flex gap-2">
                                          <span className="text-orange-600 font-bold">•</span>
                                          <span>{item}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                )}

                                {analysisResult.public_perception.positive_aspects?.length > 0 && (
                                  <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-200">
                                    <h4 className="font-bold text-emerald-900 mb-3 flex items-center gap-2">
                                      <CheckCircle2 className="h-5 w-5" />
                                      Positive Aspects
                                    </h4>
                                    <ul className="space-y-2 text-sm text-gray-700">
                                      {analysisResult.public_perception.positive_aspects.map((item: string, idx: number) => (
                                        <li key={idx} className="flex gap-2">
                                          <span className="text-emerald-600 font-bold">•</span>
                                          <span>{item}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                )}
                              </CardContent>
                            </Card>
                          )}

                          {/* News Analysis */}
                          {analysisResult.news_analysis && (
                            <Card className="shadow-md border-l-4 border-l-cyan-500">
                              <CardHeader className="pb-3">
                                <CardTitle className="text-xl font-bold flex items-center gap-2">
                                  <BarChart3 className="h-5 w-5 text-cyan-600" />
                                  News Analysis
                                </CardTitle>
                                <CardDescription className="text-base font-semibold">
                                  Based on {analysisResult.news_analysis.total_articles} articles
                                </CardDescription>
                              </CardHeader>
                              <CardContent className="space-y-6">
                                {analysisResult.news_analysis.key_themes?.length > 0 && (
                                  <div>
                                    <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                                      <TrendingUp className="h-5 w-5 text-cyan-600" />
                                      Key Themes
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                      {analysisResult.news_analysis.key_themes.map((theme: string, idx: number) => (
                                        <Badge key={idx} variant="secondary" className="text-sm py-1.5 px-3 bg-cyan-100 text-cyan-900 border border-cyan-300">{theme}</Badge>
                                      ))}
                                    </div>
                                  </div>
                                )}

                                {analysisResult.news_analysis.top_positive_headlines?.length > 0 && (
                                  <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                    <h4 className="font-bold text-green-900 mb-3 flex items-center gap-2">
                                      <TrendingUp className="h-5 w-5" />
                                      Top Positive Headlines
                                    </h4>
                                    <ul className="space-y-3">
                                      {analysisResult.news_analysis.top_positive_headlines.map((headline: string, idx: number) => (
                                        <li key={idx} className="pl-4 border-l-4 border-green-500 text-sm text-gray-700 py-2 bg-white rounded-r">{headline}</li>
                                      ))}
                                    </ul>
                                  </div>
                                )}

                                {analysisResult.news_analysis.top_negative_headlines?.length > 0 && (
                                  <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                                    <h4 className="font-bold text-red-900 mb-3 flex items-center gap-2">
                                      <AlertCircle className="h-5 w-5" />
                                      Top Negative Headlines
                                    </h4>
                                    <ul className="space-y-3">
                                      {analysisResult.news_analysis.top_negative_headlines.map((headline: string, idx: number) => (
                                        <li key={idx} className="pl-4 border-l-4 border-red-500 text-sm text-gray-700 py-2 bg-white rounded-r">{headline}</li>
                                      ))}
                                    </ul>
                                  </div>
                                )}

                                {analysisResult.news_analysis.sources?.length > 0 && (
                                  <div>
                                    <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                                      <Briefcase className="h-5 w-5 text-gray-600" />
                                      Sources
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                      {analysisResult.news_analysis.sources.map((source: string, idx: number) => (
                                        <Badge key={idx} variant="outline" className="text-sm py-1.5 px-3">{source}</Badge>
                                      ))}
                                    </div>
                                  </div>
                                )}
                              </CardContent>
                            </Card>
                          )}

                          {/* Key Insights */}
                          {analysisResult.key_insights?.length > 0 && (
                            <Card className="shadow-md border-l-4 border-l-blue-500">
                              <CardHeader className="pb-3">
                                <CardTitle className="text-xl font-bold flex items-center gap-2">
                                  <Award className="h-5 w-5 text-blue-600" />
                                  Key Insights
                                </CardTitle>
                              </CardHeader>
                              <CardContent>
                                <ul className="space-y-4">
                                  {analysisResult.key_insights.map((insight: string, idx: number) => (
                                    <li key={idx} className="flex gap-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                                      <span className="text-blue-600 font-bold text-lg flex-shrink-0">{idx + 1}.</span>
                                      <span className="text-gray-700 text-base leading-relaxed">{insight}</span>
                                    </li>
                                  ))}
                                </ul>
                              </CardContent>
                            </Card>
                          )}

                          {/* Data-Driven Recommendations */}
                          {analysisResult.data_driven_recommendations?.length > 0 && (
                            <Card className="shadow-md border-l-4 border-l-purple-500">
                              <CardHeader className="pb-3">
                                <CardTitle className="text-xl font-bold flex items-center gap-2">
                                  <Target className="h-5 w-5 text-purple-600" />
                                  Data-Driven Recommendations
                                </CardTitle>
                              </CardHeader>
                              <CardContent>
                                <ul className="space-y-4">
                                  {analysisResult.data_driven_recommendations.map((rec: string, idx: number) => (
                                    <li key={idx} className="flex gap-4 p-4 bg-purple-50 rounded-lg border border-purple-200">
                                      <span className="text-purple-600 font-bold text-lg flex-shrink-0">{idx + 1}.</span>
                                      <span className="text-gray-700 text-base leading-relaxed">{rec}</span>
                                    </li>
                                  ))}
                                </ul>
                              </CardContent>
                            </Card>
                          )}
                        </div>
                      </div>
                    )}
                  </motion.div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
