"use client";

import { Navbar } from "@/components/navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area
} from "recharts";
import {
  Globe,
  Twitter,
  Facebook,
  Instagram,
  Youtube,
  Hash,
  TrendingUp,
  Users,
  MessageCircle,
  Heart,
  Share2,
  BarChart3
} from "lucide-react";

const platforms = [
  {
    name: "Twitter/X",
    icon: <Twitter className="h-6 w-6" />,
    posts: "2.4M",
    engagement: "8.7M",
    color: "bg-blue-500",
  },
  {
    name: "Facebook",
    icon: <Facebook className="h-6 w-6" />,
    posts: "1.8M",
    engagement: "12.3M",
    color: "bg-blue-600",
  },
  {
    name: "Instagram",
    icon: <Instagram className="h-6 w-6" />,
    posts: "956K",
    engagement: "15.2M",
    color: "bg-purple-500",
  },
  {
    name: "YouTube",
    icon: <Youtube className="h-6 w-6" />,
    posts: "342K",
    engagement: "28.5M",
    color: "bg-red-500",
  },
];

const trendingHashtags = [
  { tag: "#DigitalIndia", count: "234K", trend: "+45%" },
  { tag: "#Healthcare", count: "189K", trend: "+32%" },
  { tag: "#Education", count: "156K", trend: "+28%" },
  { tag: "#Infrastructure", count: "142K", trend: "+15%" },
  { tag: "#GreenEnergy", count: "98K", trend: "+67%" },
  { tag: "#SmartCity", count: "87K", trend: "+41%" },
];

const metrics = [
  {
    title: "Total Mentions",
    value: "5.2M",
    change: "+23%",
    icon: <MessageCircle className="h-5 w-5" />,
  },
  {
    title: "Engagement Rate",
    value: "4.8%",
    change: "+0.6%",
    icon: <Heart className="h-5 w-5" />,
  },
  {
    title: "Share Velocity",
    value: "892/min",
    change: "+15%",
    icon: <Share2 className="h-5 w-5" />,
  },
  {
    title: "Active Users",
    value: "1.3M",
    change: "+18%",
    icon: <Users className="h-5 w-5" />,
  },
];

const engagementData = [
  { hour: "00:00", twitter: 4500, facebook: 3200, instagram: 2800, youtube: 1500 },
  { hour: "04:00", twitter: 3800, facebook: 2900, instagram: 2400, youtube: 1200 },
  { hour: "08:00", twitter: 6200, facebook: 4800, instagram: 4100, youtube: 2300 },
  { hour: "12:00", twitter: 8900, facebook: 7200, instagram: 6500, youtube: 3800 },
  { hour: "16:00", twitter: 7500, facebook: 6100, instagram: 5400, youtube: 3200 },
  { hour: "20:00", twitter: 9200, facebook: 7800, instagram: 7100, youtube: 4200 },
  { hour: "23:00", twitter: 5600, facebook: 4200, instagram: 3800, youtube: 2100 },
];

export default function SocialMediaAggregationPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-black">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto text-white">
            <Badge className="mb-4 bg-white text-black">
              FR-SM-01
            </Badge>
            <h1 className="text-5xl font-bold mb-6">
              Multi-Platform Social Media Aggregation
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Unified real-time data collection from Twitter, Facebook, Instagram, and YouTube.
              Monitor mentions, hashtags, trends, and engagement metrics across all digital channels.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="bg-white text-black hover:bg-gray-100">
                <Globe className="mr-2 h-4 w-4" />
                Start Monitoring
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                Configure Platforms
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Stats */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Platform Coverage</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Real-time data aggregation from major social media platforms
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {platforms.map((platform, index) => (
              <div key={index}>
                <Card className="hover:shadow-lg transition-all">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-3 rounded-lg text-white ${platform.color}`}>
                        {platform.icon}
                      </div>
                      <Badge variant="secondary">Active</Badge>
                    </div>
                    <CardTitle className="text-xl">{platform.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Posts Today</span>
                        <span className="font-semibold">{platform.posts}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Engagement</span>
                        <span className="font-semibold">{platform.engagement}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Metrics Dashboard */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Real-time Metrics</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Live performance indicators across all monitored platforms
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-600">{metric.icon}</span>
                      <span className={`text-sm font-medium ${
                        metric.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {metric.change}
                      </span>
                    </div>
                    <p className="text-2xl font-bold mb-1">{metric.value}</p>
                    <p className="text-sm text-gray-600">{metric.title}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Trending Hashtags */}
          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Hash className="h-5 w-5" />
                    Trending Hashtags
                  </CardTitle>
                  <CardDescription>Top performing tags in last 24 hours</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {trendingHashtags.map((hashtag, index) => (
                      <div key={index} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg transition-colors">
                        <div className="flex items-center gap-3">
                          <span className="text-gray-400">#{index + 1}</span>
                          <span className="font-medium">{hashtag.tag}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Badge variant="secondary">{hashtag.count}</Badge>
                          <span className={`text-sm ${
                            hashtag.trend.startsWith('+') ? 'text-green-600' : 'text-red-600'
                          }`}>
                            <TrendingUp className="h-3 w-3 inline mr-1" />
                            {hashtag.trend}
                          </span>
                        </div>
                      </div>
                    ))}
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
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5" />
                    Engagement Timeline
                  </CardTitle>
                  <CardDescription>Hourly engagement across platforms</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={320}>
                    <AreaChart data={engagementData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis dataKey="hour" stroke="#6b7280" />
                      <YAxis stroke="#6b7280" />
                      <Tooltip
                        contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }}
                      />
                      <Legend />
                      <Area type="monotone" dataKey="twitter" stackId="1" stroke="#1DA1F2" fill="#1DA1F2" fillOpacity={0.6} />
                      <Area type="monotone" dataKey="facebook" stackId="1" stroke="#4267B2" fill="#4267B2" fillOpacity={0.6} />
                      <Area type="monotone" dataKey="instagram" stackId="1" stroke="#E1306C" fill="#E1306C" fillOpacity={0.6} />
                      <Area type="monotone" dataKey="youtube" stackId="1" stroke="#FF0000" fill="#FF0000" fillOpacity={0.6} />
                    </AreaChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Comprehensive Monitoring Capabilities</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Advanced features for complete social media intelligence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="p-3 bg-black text-white rounded-lg w-fit mb-3">
                    <MessageCircle className="h-6 w-6" />
                  </div>
                  <CardTitle>Unified Monitoring</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Monitor mentions, comments, and discussions across all platforms
                    from a single dashboard with real-time updates.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="p-3 bg-black text-white rounded-lg w-fit mb-3">
                    <TrendingUp className="h-6 w-6" />
                  </div>
                  <CardTitle>Trend Detection</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Automatically identify emerging trends and viral content
                    before they peak, enabling proactive response strategies.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="p-3 bg-black text-white rounded-lg w-fit mb-3">
                    <Heart className="h-6 w-6" />
                  </div>
                  <CardTitle>Engagement Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Track likes, shares, comments, and overall engagement rates
                    to understand public response and sentiment patterns.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Unlock the Power of Social Media Intelligence
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Get comprehensive insights from billions of social media interactions
            across all major platforms in real-time
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
              Request Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}