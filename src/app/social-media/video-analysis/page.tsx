"use client";

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  RadialBarChart,
  RadialBar
} from "recharts";
import {
  Video,
  Search,
  MessageSquare,
  TrendingUp,
  ThumbsUp,
  Eye,
  Youtube,
  Loader2,
  AlertCircle,
  CheckCircle,
  XCircle,
  MinusCircle,
  Hash,
  Users,
  BarChart3
} from "lucide-react";

interface VideoAnalysis {
  video_id: string;
  title: string;
  channel: string;
  view_count: number;
  like_count: number;
  comment_count: number;
  comments_analyzed: number;
  sentiment_summary: {
    positive_percentage: number;
    negative_percentage: number;
    neutral_percentage: number;
    overall_sentiment: string;
    key_themes: string[];
  };
}

interface VCAResponse {
  topic: string;
  videos_analyzed: number;
  overall_sentiment: string;
  overall_positive_percentage: number;
  overall_negative_percentage: number;
  overall_neutral_percentage: number;
  key_insights: string[];
  videos: VideoAnalysis[];
}

export default function VideoAnalysisPage() {
  const [topic, setTopic] = useState("");
  const [maxVideos, setMaxVideos] = useState(10);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [analysisData, setAnalysisData] = useState<VCAResponse | null>(null);

  const handleAnalyze = async () => {
    if (!topic.trim()) {
      setError("Please enter a topic to analyze");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}${process.env.NEXT_PUBLIC_VCA_ENDPOINT}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "ngrok-skip-browser-warning": "true"
          },
          body: JSON.stringify({
            topic: topic,
            max_videos: maxVideos
          })
        }
      );

      if (!response.ok) {
        throw new Error(`Failed to analyze: ${response.statusText}`);
      }

      const data: VCAResponse = await response.json();
      setAnalysisData(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const getSentimentIcon = (sentiment: string) => {
    switch (sentiment.toLowerCase()) {
      case "positive":
        return <CheckCircle className="h-5 w-5 text-green-600" />;
      case "negative":
        return <XCircle className="h-5 w-5 text-red-600" />;
      case "neutral":
        return <MinusCircle className="h-5 w-5 text-gray-600" />;
      default:
        return <AlertCircle className="h-5 w-5 text-gray-600" />;
    }
  };

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment.toLowerCase()) {
      case "positive":
        return "text-green-600";
      case "negative":
        return "text-red-600";
      case "neutral":
        return "text-gray-600";
      default:
        return "text-gray-600";
    }
  };

  const pieData = analysisData ? [
    { name: "Positive", value: analysisData.overall_positive_percentage, color: "#10b981" },
    { name: "Negative", value: analysisData.overall_negative_percentage, color: "#ef4444" },
    { name: "Neutral", value: analysisData.overall_neutral_percentage, color: "#6b7280" }
  ] : [];

  const formatNumber = (num: number) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
    return num.toString();
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-4" variant="outline">
              FR-SM-04
            </Badge>
            <h1 className="text-5xl font-bold mb-6">
              Video Comments Analysis (VCA)
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              NLP-driven analysis of YouTube video viewer interactions, comments, and engagement
              to extract valuable insights and sentiment patterns.
            </p>

            {/* Search Section */}
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 text-left">
                    Enter Topic to Analyze
                  </label>
                  <input
                    type="text"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    placeholder="e.g., Digital India, Healthcare, Education"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                    onKeyDown={(e) => e.key === "Enter" && handleAnalyze()}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 text-left">
                    Number of Videos to Analyze
                  </label>
                  <select
                    value={maxVideos}
                    onChange={(e) => setMaxVideos(Number(e.target.value))}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                  >
                    <option value={5}>5 Videos</option>
                    <option value={10}>10 Videos</option>
                    <option value={15}>15 Videos</option>
                    <option value={20}>20 Videos</option>
                    <option value={30}>30 Videos</option>
                  </select>
                </div>
                <Button
                  onClick={handleAnalyze}
                  disabled={loading}
                  className="w-full bg-black hover:bg-gray-800 text-white"
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Analyzing YouTube Videos...
                    </>
                  ) : (
                    <>
                      <Search className="mr-2 h-4 w-4" />
                      Analyze Videos
                    </>
                  )}
                </Button>
              </div>

              {error && (
                <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-600 text-sm">{error}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Analysis Results */}
      {analysisData && (
        <>
          {/* Overview Section */}
          <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-2">Analysis Results</h2>
                <p className="text-gray-600">Topic: "{analysisData.topic}"</p>
              </div>

              <div className="grid md:grid-cols-4 gap-6 mb-8">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <Youtube className="h-5 w-5 text-red-600" />
                      <span className="text-2xl font-bold">{analysisData.videos_analyzed}</span>
                    </div>
                    <p className="text-sm text-gray-600">Videos Analyzed</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <MessageSquare className="h-5 w-5 text-blue-600" />
                      <span className="text-2xl font-bold">
                        {formatNumber(analysisData.videos.reduce((sum, v) => sum + v.comments_analyzed, 0))}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">Comments Analyzed</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <Eye className="h-5 w-5 text-purple-600" />
                      <span className="text-2xl font-bold">
                        {formatNumber(analysisData.videos.reduce((sum, v) => sum + v.view_count, 0))}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">Total Views</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      {getSentimentIcon(analysisData.overall_sentiment)}
                      <span className={`text-2xl font-bold ${getSentimentColor(analysisData.overall_sentiment)}`}>
                        {analysisData.overall_sentiment}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">Overall Sentiment</p>
                  </CardContent>
                </Card>
              </div>

              {/* Sentiment Charts */}
              <div className="grid lg:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Overall Sentiment Distribution</CardTitle>
                    <CardDescription>Aggregated sentiment across all analyzed videos</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <PieChart>
                        <Pie
                          data={pieData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({ name, value }) => `${name}: ${value.toFixed(1)}%`}
                          outerRadius={100}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {pieData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Key Insights</CardTitle>
                    <CardDescription>AI-generated insights from video comments</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {analysisData.key_insights.map((insight, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="p-1 bg-black text-white rounded">
                            <Hash className="h-3 w-3" />
                          </div>
                          <p className="text-sm text-gray-700">{insight}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Individual Video Analysis */}
          <section className="py-12">
            <div className="container mx-auto px-4">
              <h3 className="text-2xl font-bold mb-6">Video-by-Video Analysis</h3>
              <div className="space-y-6">
                {analysisData.videos.map((video, index) => (
                  <Card key={video.video_id} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="grid lg:grid-cols-3 gap-6">
                        {/* Video Info */}
                        <div className="lg:col-span-2">
                          <div className="mb-4">
                            <h4 className="text-lg font-semibold mb-2 line-clamp-2">{video.title}</h4>
                            <div className="flex items-center gap-4 text-sm text-gray-600">
                              <span className="flex items-center gap-1">
                                <Users className="h-4 w-4" />
                                {video.channel}
                              </span>
                              <span className="flex items-center gap-1">
                                <Eye className="h-4 w-4" />
                                {formatNumber(video.view_count)} views
                              </span>
                              <span className="flex items-center gap-1">
                                <ThumbsUp className="h-4 w-4" />
                                {formatNumber(video.like_count)} likes
                              </span>
                              <span className="flex items-center gap-1">
                                <MessageSquare className="h-4 w-4" />
                                {formatNumber(video.comment_count)} comments
                              </span>
                            </div>
                          </div>

                          {/* Key Themes */}
                          <div>
                            <p className="text-sm font-medium text-gray-700 mb-2">Key Themes:</p>
                            <div className="flex flex-wrap gap-2">
                              {video.sentiment_summary.key_themes.map((theme, i) => (
                                <Badge key={i} variant="secondary">{theme}</Badge>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Sentiment Bars */}
                        <div>
                          <div className="space-y-3">
                            <div>
                              <div className="flex justify-between text-sm mb-1">
                                <span>Positive</span>
                                <span className="font-medium">{video.sentiment_summary.positive_percentage.toFixed(1)}%</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2">
                                <div
                                  className="bg-green-600 h-2 rounded-full"
                                  style={{ width: `${video.sentiment_summary.positive_percentage}%` }}
                                />
                              </div>
                            </div>
                            <div>
                              <div className="flex justify-between text-sm mb-1">
                                <span>Negative</span>
                                <span className="font-medium">{video.sentiment_summary.negative_percentage.toFixed(1)}%</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2">
                                <div
                                  className="bg-red-600 h-2 rounded-full"
                                  style={{ width: `${video.sentiment_summary.negative_percentage}%` }}
                                />
                              </div>
                            </div>
                            <div>
                              <div className="flex justify-between text-sm mb-1">
                                <span>Neutral</span>
                                <span className="font-medium">{video.sentiment_summary.neutral_percentage.toFixed(1)}%</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2">
                                <div
                                  className="bg-gray-600 h-2 rounded-full"
                                  style={{ width: `${video.sentiment_summary.neutral_percentage}%` }}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="mt-4 text-center">
                            <Badge className={`${
                              video.sentiment_summary.overall_sentiment.toLowerCase() === "positive"
                                ? "bg-green-100 text-green-800"
                                : video.sentiment_summary.overall_sentiment.toLowerCase() === "negative"
                                ? "bg-red-100 text-red-800"
                                : "bg-gray-100 text-gray-800"
                            }`}>
                              {video.sentiment_summary.overall_sentiment} Sentiment
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* Features Section */}
      {!analysisData && (
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">VCA Capabilities</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Advanced NLP-powered analysis of YouTube video comments and engagement
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="p-3 bg-black text-white rounded-lg w-fit mb-3">
                    <MessageSquare className="h-6 w-6" />
                  </div>
                  <CardTitle>Comment Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Process thousands of comments to understand viewer sentiment
                    and extract key discussion topics.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="p-3 bg-black text-white rounded-lg w-fit mb-3">
                    <TrendingUp className="h-6 w-6" />
                  </div>
                  <CardTitle>Sentiment Detection</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Classify comments as positive, negative, or neutral using
                    advanced sentiment analysis algorithms.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="p-3 bg-black text-white rounded-lg w-fit mb-3">
                    <BarChart3 className="h-6 w-6" />
                  </div>
                  <CardTitle>Insight Generation</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Generate actionable insights from video engagement patterns
                    and comment themes.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}