"use client";

import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Newspaper,
  TrendingUp,
  BarChart3,
  Globe,
  MapPin,
  Users,
  Target,
  Activity,
  Brain,
  Shield,
  Zap,
  Eye,
  Video,
  ChevronRight,
  ArrowRight,
  Award
} from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: <Brain className="h-8 w-8" />,
    title: "AI-Powered Analytics",
    description: "Advanced machine learning algorithms for intelligent data processing"
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Real-time Monitoring",
    description: "24/7 surveillance of news and social media platforms"
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: "Instant Insights",
    description: "Get actionable intelligence in seconds, not hours"
  },
  {
    icon: <Eye className="h-8 w-8" />,
    title: "Comprehensive Coverage",
    description: "Monitor all major news outlets and social media platforms"
  }
];

const newsMediaFeatures = [
  {
    icon: <Newspaper className="h-6 w-6" />,
    title: "News Aggregation",
    description: "Automated extraction and AI summarization from major outlets",
    link: "/news-media/aggregation"
  },
  {
    icon: <Target className="h-6 w-6" />,
    title: "Issue Identification",
    description: "Early detection of critical public concerns",
    link: "/news-media/issues"
  },
  {
    icon: <MapPin className="h-6 w-6" />,
    title: "Geographic Tracking",
    description: "Location-based monitoring at district and state levels",
    link: "/news-media/geographic"
  }
];

const socialMediaFeatures = [
  {
    icon: <Globe className="h-6 w-6" />,
    title: "Multi-Platform Analysis",
    description: "Unified monitoring across Twitter, Facebook, Instagram, YouTube",
    link: "/social-media/aggregation"
  },
  {
    icon: <Video className="h-6 w-6" />,
    title: "Video Analytics",
    description: "NLP-driven analysis of video comments and engagement",
    link: "/social-media/video-analysis"
  },
  {
    icon: <Activity className="h-6 w-6" />,
    title: "Performance Dashboard",
    description: "Real-time metrics and comprehensive visualizations",
    link: "/social-media/dashboard"
  }
];

const governanceFeatures = [
  {
    icon: <Award className="h-6 w-6" />,
    title: "Impact Measurement",
    description: "Comprehensive analytics for government programs and policies",
    link: "/governance/impact-measurement"
  },
  {
    icon: <Target className="h-6 w-6" />,
    title: "Performance Tracking",
    description: "Real-time monitoring of KPIs and beneficiary metrics",
    link: "/governance/performance"
  },
  {
    icon: <BarChart3 className="h-6 w-6" />,
    title: "Resource Optimization",
    description: "AI-driven insights for budget allocation and efficiency",
    link: "/governance/optimization"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section - Clean and Simple */}
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-4" variant="outline">
              AI-Powered Intelligence Platform
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
              Transform Data Into
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Actionable Intelligence
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Harness the power of AI to monitor, analyze, and understand public discourse
              across news media and social platforms in real-time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/news-media/aggregation">
                <Button size="lg" className="bg-black hover:bg-gray-800 text-white w-full sm:w-auto">
                  Explore News Media
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/social-media/aggregation">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Explore Social Media
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Why Choose Our Platform</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              State-of-the-art technology meets government intelligence needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-gray-200 hover:shadow-lg transition-all duration-300 hover:border-gray-300">
                <CardHeader>
                  <div className="mb-4 text-black">{feature.icon}</div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* News Media Platform Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4" variant="secondary">
              News Media Intelligence
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">News Media Intelligence Platform</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Comprehensive news monitoring and analysis system that transforms media data
              into strategic insights for informed governance and policy-making.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {newsMediaFeatures.map((feature, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-gray-200">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-black text-white rounded-lg">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href={feature.link}>
                    <Button className="w-full bg-black hover:bg-gray-800 text-white">
                      Learn More
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Platform Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4" variant="secondary">
              Social Media Intelligence
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Social Media Intelligence Platform</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Real-time social media monitoring and analytics platform that captures public
              sentiment and emerging trends across all major digital channels.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {socialMediaFeatures.map((feature, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-gray-200">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-black text-white rounded-lg">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href={feature.link}>
                    <Button className="w-full bg-black hover:bg-gray-800 text-white">
                      Learn More
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Governance Analytics Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4" variant="secondary">
              Governance Analytics
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Governance Impact Measurement</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Advanced analytics platform for measuring government program effectiveness,
              tracking KPIs, and optimizing resource allocation for maximum citizen impact.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {governanceFeatures.map((feature, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-gray-200">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-black text-white rounded-lg">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href={feature.link}>
                    <Button className="w-full bg-black hover:bg-gray-800 text-white">
                      Learn More
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Intelligence Capabilities?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join government organizations already using our platform to make data-driven decisions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-black hover:bg-gray-100">
              Get Started Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-600">© 2024 Intelligence Platform. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-gray-600 hover:text-black transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-600 hover:text-black transition-colors">
                Terms of Service
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-black transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}