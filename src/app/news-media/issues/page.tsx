"use client";

import { Navbar } from "@/components/navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { HeroHighlight, Highlight } from "@/components/aceternity/hero-highlight";
import { motion } from "framer-motion";
import {
  AlertTriangle,
  TrendingUp,
  Shield,
  Users,
  Bell,
  Target,
  Eye,
  Zap,
  MessageSquare,
  BarChart3,
  Activity,
  AlertCircle
} from "lucide-react";

const criticalIssues = [
  {
    title: "Healthcare Crisis in District A",
    severity: "High",
    mentions: 342,
    trend: "+45%",
    time: "2 hours ago",
    description: "Multiple reports of medical supply shortage",
  },
  {
    title: "Infrastructure Concerns in Region B",
    severity: "Medium",
    mentions: 198,
    trend: "+23%",
    time: "4 hours ago",
    description: "Road safety issues after recent flooding",
  },
  {
    title: "Education Policy Debate",
    severity: "Low",
    mentions: 156,
    trend: "+12%",
    time: "6 hours ago",
    description: "Public discussion on new examination system",
  },
  {
    title: "Water Supply Issues",
    severity: "High",
    mentions: 289,
    trend: "+67%",
    time: "3 hours ago",
    description: "Multiple districts reporting water shortage",
  },
];

const capabilities = [
  {
    icon: <AlertTriangle className="h-6 w-6" />,
    title: "Early Warning System",
    description: "Detect emerging issues before they escalate into major concerns",
  },
  {
    icon: <Target className="h-6 w-6" />,
    title: "Precision Identification",
    description: "AI algorithms identify critical public issues with high accuracy",
  },
  {
    icon: <Bell className="h-6 w-6" />,
    title: "Real-time Alerts",
    description: "Instant notifications for CMO team on emerging critical issues",
  },
  {
    icon: <BarChart3 className="h-6 w-6" />,
    title: "Trend Analysis",
    description: "Track issue evolution and predict potential escalation patterns",
  },
];

export default function IssueIdentificationPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <HeroHighlight containerClassName="py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 text-center"
        >
          <Badge className="mb-4" variant="outline">
            FR-NM-02
          </Badge>
          <h1 className="text-5xl font-bold mb-6">
            Community Issue
            <br />
            <Highlight className="text-black">
              Early Identification
            </Highlight>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Proactive detection of critical public concerns through intelligent news analysis,
            enabling decision-makers to stay ahead of emerging issues.
          </p>
          <div className="flex gap-4 justify-center">
            <Button className="bg-black hover:bg-gray-800">
              <AlertCircle className="mr-2 h-4 w-4" />
              View Critical Issues
            </Button>
            <Button variant="outline">
              <Bell className="mr-2 h-4 w-4" />
              Set Alert Preferences
            </Button>
          </div>
        </motion.div>
      </HeroHighlight>

      {/* Live Issues Dashboard */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Critical Issues Today</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Real-time monitoring of public concerns requiring immediate attention
            </p>
          </motion.div>

          <div className="space-y-4">
            {criticalIssues.map((issue, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg font-semibold">{issue.title}</h3>
                          <Badge
                            variant={
                              issue.severity === "High" ? "destructive" :
                              issue.severity === "Medium" ? "default" : "secondary"
                            }
                          >
                            {issue.severity} Priority
                          </Badge>
                        </div>
                        <p className="text-gray-600 mb-3">{issue.description}</p>
                        <div className="flex items-center gap-6 text-sm">
                          <span className="flex items-center gap-1">
                            <MessageSquare className="h-4 w-4" />
                            {issue.mentions} mentions
                          </span>
                          <span className={`flex items-center gap-1 ${
                            issue.trend.startsWith('+') ? 'text-red-600' : 'text-green-600'
                          }`}>
                            <TrendingUp className="h-4 w-4" />
                            {issue.trend}
                          </span>
                          <span className="text-gray-500">{issue.time}</span>
                        </div>
                      </div>
                      <Button size="sm" className="ml-4">
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Intelligent Issue Detection</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Advanced capabilities for comprehensive public concern monitoring
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="p-3 bg-black text-white rounded-lg w-fit mb-3">
                      {capability.icon}
                    </div>
                    <CardTitle className="text-lg">{capability.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{capability.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Analytics Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Issue Detection Rate</CardTitle>
                  <CardDescription>Last 30 days performance</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Issues Identified</span>
                      <span className="text-2xl font-bold">1,247</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Early Detections</span>
                      <span className="text-2xl font-bold">89%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Accuracy Rate</span>
                      <span className="text-2xl font-bold">94.3%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Avg Response Time</span>
                      <span className="text-2xl font-bold">2.4 hrs</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Issue Categories</CardTitle>
                  <CardDescription>Distribution by department</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center bg-gray-100 rounded-lg">
                    <Activity className="h-32 w-32 text-gray-400" />
                    <span className="ml-4 text-gray-500">Category Chart</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 text-center"
        >
          <Card className="bg-gradient-to-r from-gray-900 to-black text-white max-w-4xl mx-auto">
            <CardContent className="p-12">
              <Shield className="h-16 w-16 mx-auto mb-6 opacity-80" />
              <h2 className="text-3xl font-bold mb-4">
                Stay Ahead of Public Concerns
              </h2>
              <p className="text-lg mb-8 opacity-90">
                Enable proactive governance with early issue detection and intelligent alerts
              </p>
              <Button size="lg" className="bg-white text-black hover:bg-gray-100">
                Activate Early Warning System
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </section>
    </div>
  );
}