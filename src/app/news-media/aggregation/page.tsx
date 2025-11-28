"use client";

import { Navbar } from "@/components/navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
  PieChart,
  Pie,
  Cell
} from "recharts";
import {
  Newspaper,
  RefreshCw,
  Clock,
  Database,
  Filter,
  Download,
  Search,
  TrendingUp,
  Activity,
  Globe
} from "lucide-react";

const stats = [
  { label: "News Sources", value: "500+", icon: <Newspaper className="h-5 w-5" /> },
  { label: "Articles/Day", value: "10,000+", icon: <Activity className="h-5 w-5" /> },
  { label: "Languages", value: "12", icon: <Globe className="h-5 w-5" /> },
  { label: "Update Frequency", value: "Real-time", icon: <Clock className="h-5 w-5" /> },
];

const features = [
  {
    title: "Automated Data Extraction",
    description: "AI-powered crawlers continuously scan and extract content from major news platforms",
    icon: <Database className="h-6 w-6" />,
  },
  {
    title: "Smart Summarization",
    description: "Advanced NLP algorithms create concise summaries of lengthy articles",
    icon: <Filter className="h-6 w-6" />,
  },
  {
    title: "Multi-Source Aggregation",
    description: "Combine and deduplicate news from regional and national media outlets",
    icon: <RefreshCw className="h-6 w-6" />,
  },
  {
    title: "Real-time Updates",
    description: "Continuous monitoring ensures you never miss critical news",
    icon: <Clock className="h-6 w-6" />,
  },
];

const newsCategories = [
  { name: "Politics", count: 234, trend: "+12%" },
  { name: "Economy", count: 189, trend: "+8%" },
  { name: "Healthcare", count: 156, trend: "+15%" },
  { name: "Education", count: 142, trend: "-3%" },
  { name: "Infrastructure", count: 128, trend: "+5%" },
  { name: "Technology", count: 98, trend: "+22%" },
];

const chartData = [
  { day: "Mon", articles: 1234, sentiment: 65 },
  { day: "Tue", articles: 1456, sentiment: 72 },
  { day: "Wed", articles: 1789, sentiment: 68 },
  { day: "Thu", articles: 2012, sentiment: 75 },
  { day: "Fri", articles: 1876, sentiment: 70 },
  { day: "Sat", articles: 1543, sentiment: 73 },
  { day: "Sun", articles: 1298, sentiment: 71 },
];

const pieData = [
  { name: "Politics", value: 234, color: "#3b82f6" },
  { name: "Economy", value: 189, color: "#10b981" },
  { name: "Healthcare", value: 156, color: "#f59e0b" },
  { name: "Education", value: 142, color: "#ef4444" },
  { name: "Infrastructure", value: 128, color: "#8b5cf6" },
  { name: "Technology", value: 98, color: "#ec4899" },
];

export default function NewsAggregationPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-4" variant="outline">
              FR-NM-01
            </Badge>
            <h1 className="text-5xl font-bold mb-6">
              News Aggregation & Summarization
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Automated data extraction and AI-driven summarization of news content
              from major platforms, delivering processed insights efficiently.
            </p>
            <div className="flex gap-4 justify-center">
              <Button className="bg-black hover:bg-gray-800 text-white">
                <Search className="mr-2 h-4 w-4" />
                Start Monitoring
              </Button>
              <Button variant="outline">
                <Download className="mr-2 h-4 w-4" />
                Export Report
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-600">{stat.icon}</span>
                    <span className="text-2xl font-bold">{stat.value}</span>
                  </div>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Key Capabilities</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive news aggregation powered by cutting-edge AI technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-black text-white rounded-lg">
                      {feature.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                      <CardDescription className="text-base">
                        {feature.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Live Dashboard Preview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Real-time News Analytics</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Monitor news trends and volumes across different categories
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>News Volume Trends</CardTitle>
                  <CardDescription>Last 7 days</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={256}>
                    <BarChart data={chartData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis dataKey="day" stroke="#6b7280" />
                      <YAxis stroke="#6b7280" />
                      <Tooltip
                        contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }}
                      />
                      <Legend />
                      <Bar dataKey="articles" fill="#000000" name="Articles" radius={[8, 8, 0, 0]} />
                      <Bar dataKey="sentiment" fill="#6b7280" name="Sentiment %" radius={[8, 8, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>Category Distribution</CardTitle>
                  <CardDescription>Today's coverage</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {newsCategories.map((category, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-sm font-medium">{category.name}</span>
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary">{category.count}</Badge>
                          <span className={`text-xs ${
                            category.trend.startsWith('+') ? 'text-green-600' : 'text-red-600'
                          }`}>
                            {category.trend}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <Card className="bg-black text-white max-w-4xl mx-auto">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Transform Your News Intelligence?
              </h2>
              <p className="text-lg mb-8 opacity-90">
                Start aggregating and analyzing news from hundreds of sources in real-time
              </p>
              <div className="flex gap-4 justify-center">
                <Button size="lg" className="bg-white text-black hover:bg-gray-100">
                  Get Started Now
                </Button>
                <Button size="lg" variant="outline" className="border-white hover:bg-white hover:text-black">
                  <span className="text-white hover:text-black">View Demo</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}