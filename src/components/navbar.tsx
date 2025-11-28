"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Newspaper, TrendingUp, BarChart3, Globe, MapPin, Users, Target, Activity } from "lucide-react";

const newsMediaTools = [
  {
    title: "News Aggregation",
    href: "/news-media/aggregation",
    description: "Automated data extraction and AI-driven summarization",
    icon: <Newspaper className="h-4 w-4" />,
  },
  {
    title: "Issue Identification",
    href: "/news-media/issues",
    description: "Early identification of public concerns",
    icon: <Target className="h-4 w-4" />,
  },
  {
    title: "Topic Classification",
    href: "/news-media/classification",
    description: "AI-driven categorization and sentiment analysis",
    icon: <BarChart3 className="h-4 w-4" />,
  },
  {
    title: "Topic Cloud",
    href: "/news-media/topic-cloud",
    description: "Visual representation of trending issues",
    icon: <TrendingUp className="h-4 w-4" />,
  },
  {
    title: "Geographic Tracking",
    href: "/news-media/geographic",
    description: "Location-based monitoring and analysis",
    icon: <MapPin className="h-4 w-4" />,
  },
  {
    title: "Trend Analysis",
    href: "/news-media/trends",
    description: "Public perception and media trends",
    icon: <Activity className="h-4 w-4" />,
  },
];

const socialMediaTools = [
  {
    title: "Multi-Platform Aggregation",
    href: "/social-media/aggregation",
    description: "Unified data from Twitter, Facebook, Instagram, YouTube",
    icon: <Globe className="h-4 w-4" />,
  },
  {
    title: "Narrative Generation",
    href: "/social-media/narrative",
    description: "AI-powered summarization and trend identification",
    icon: <TrendingUp className="h-4 w-4" />,
  },
  {
    title: "Department Categorization",
    href: "/social-media/categorization",
    description: "AI-based classification into governance categories",
    icon: <BarChart3 className="h-4 w-4" />,
  },
  {
    title: "Video Comments Analysis",
    href: "/social-media/video-analysis",
    description: "NLP-driven analysis of video viewer interactions",
    icon: <Activity className="h-4 w-4" />,
  },
  {
    title: "Program Performance",
    href: "/social-media/program-analysis",
    description: "AI-driven analytics for government programs",
    icon: <Target className="h-4 w-4" />,
  },
  {
    title: "Performance Dashboard",
    href: "/social-media/dashboard",
    description: "Comprehensive visualization of social media metrics",
    icon: <Users className="h-4 w-4" />,
  },
];

export function Navbar() {
  return (
    <div className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <span className="font-semibold">Intelligence Platform</span>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>News Media</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {newsMediaTools.map((tool) => (
                    <ListItem
                      key={tool.title}
                      title={tool.title}
                      href={tool.href}
                      icon={tool.icon}
                    >
                      {tool.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Social Media</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {socialMediaTools.map((tool) => (
                    <ListItem
                      key={tool.title}
                      title={tool.title}
                      href={tool.href}
                      icon={tool.icon}
                    >
                      {tool.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/analytics" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Analytics
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  About
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <Button variant="default">Get Started</Button>
      </div>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { icon?: React.ReactNode }
>(({ className, title, children, icon, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="flex items-center gap-2">
            {icon}
            <div className="text-sm font-medium leading-none">{title}</div>
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";