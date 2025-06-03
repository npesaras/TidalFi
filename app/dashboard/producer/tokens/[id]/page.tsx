"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import {
  Fish,
  ArrowLeft,
  Calendar,
  MapPin,
  Users,
  TrendingUp,
  DollarSign,
  Activity,
  Camera,
  FileText,
  Settings,
  Thermometer,
  Droplets,
  CheckCircle,
  AlertTriangle,
  BarChart3,
  Edit,
  Share2,
  Bell,
  MessageSquare,
} from "lucide-react"
import { DashboardHeader } from "@/components/dashboard-header"

// Mock data for producer token - replace with actual API call
const getProducerTokenData = (id: string) => {
  const tokens = {
    "TF-001": {
      id: "TF-001",
      species: "Atlantic Salmon",
      harvest: {
        quantity: "2,500 kg",
        totalValue: "$25,000",
        pricePerKg: "$10.00",
        harvestDate: "2024-03-15",
        location: "Farm A - Sector 3",
        coordinates: "63.4305° N, 10.3951° E",
        waterDepth: "25 meters",
        cageSize: "50m x 50m",
        stockingDate: "2023-05-01",
        expectedYield: "2,500 kg",
        currentWeight: "4.2 kg avg",
        growthProgress: 75,
        status: "Growing",
      },
      investment: {
        totalValue: 25000,
        funded: 18750,
        fundingProgress: 75,
        minInvestment: 500,
        maxInvestment: 5000,
        investors: 37,
        expectedROI: "12-15%",
        daysLeft: 12,
        tokenPrice: 10.0,
        availableTokens: 625,
        soldTokens: 1875,
      },
      sustainability: {
        overallScore: 95,
        waterQuality: 92,
        feedEfficiency: 98,
        carbonFootprint: 94,
        animalWelfare: 96,
        certifications: [
          { name: "ASC", status: "Active", expires: "2025-06-01" },
          { name: "BAP 4-Star", status: "Active", expires: "2024-12-15" },
          { name: "Carbon Neutral", status: "Active", expires: "2024-11-30" },
        ],
      },
      iotData: {
        temperature: 18.5,
        oxygen: 8.2,
        ph: 7.1,
        salinity: 34.2,
        turbidity: 2.1,
        lastUpdated: "2024-01-20T10:30:00Z",
        alerts: [],
      },
      timeline: [
        {
          date: "2024-01-20",
          event: "IoT sensors report optimal conditions",
          type: "monitoring",
          details: "All parameters within ideal ranges",
        },
        {
          date: "2024-01-18",
          event: "Monthly health inspection completed",
          type: "inspection",
          details: "100% fish health score, no mortality detected",
        },
        {
          date: "2024-01-15",
          event: "Feeding optimization implemented",
          type: "management",
          details: "New AI-driven feeding schedule reduces waste by 12%",
        },
        {
          date: "2024-01-10",
          event: "Investor milestone reached",
          type: "funding",
          details: "75% funding target achieved",
        },
      ],
      transactions: [
        {
          date: "2024-01-20",
          investor: "EcoInvestor.icp",
          amount: "$2,500",
          tokens: 250,
          type: "purchase",
        },
        {
          date: "2024-01-18",
          investor: "GreenFund.icp",
          amount: "$5,000",
          tokens: 500,
          type: "purchase",
        },
        {
          date: "2024-01-15",
          investor: "SustainableCapital.icp",
          amount: "$1,000",
          tokens: 100,
          type: "purchase",
        },
      ],
      documents: [
        { name: "Sustainability Report Q4 2023", type: "PDF", size: "2.4 MB" },
        { name: "Health Inspection Certificate", type: "PDF", size: "1.1 MB" },
        { name: "ASC Certification", type: "PDF", size: "856 KB" },
      ],
    },
  }

  return tokens[id as keyof typeof tokens] || tokens["TF-001"]
}

export default function ProducerTokenDetailsPage() {
  const params = useParams()
  const tokenId = params.id as string
  const token = getProducerTokenData(tokenId)

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader userRole="producer" />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <Button variant="ghost" asChild>
            <Link href="/dashboard/producer">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Link>
          </Button>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">
              <Share2 className="h-4 w-4 mr-2" />
              Share Token
            </Button>
            <Button variant="outline" size="sm">
              <Edit className="h-4 w-4 mr-2" />
              Edit Token
            </Button>
            <Button variant="outline" size="sm">
              <Bell className="h-4 w-4 mr-2" />
              Notify Investors
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Main Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Token Overview */}
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-2xl flex items-center gap-3">
                      <Fish className="h-8 w-8 text-blue-600" />
                      {token.species}
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                      Token ID: {token.id} • {token.harvest.quantity} available
                    </CardDescription>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="default" className="text-sm">
                      Active
                    </Badge>
                    <Badge variant="outline" className="text-sm">
                      Your Token
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-6 mb-6">
                  <div>
                    <p className="text-sm text-gray-600">Total Value</p>
                    <p className="text-xl font-bold">{token.harvest.totalValue}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Price per kg</p>
                    <p className="text-xl font-bold">{token.harvest.pricePerKg}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Harvest Date</p>
                    <p className="text-xl font-bold">{token.harvest.harvestDate}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Expected ROI</p>
                    <p className="text-xl font-bold text-green-600">{token.investment.expectedROI}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Funding Progress</span>
                    <span>
                      ${token.investment.funded.toLocaleString()} / ${token.investment.totalValue.toLocaleString()} (
                      {token.investment.fundingProgress}%)
                    </span>
                  </div>
                  <Progress value={token.investment.fundingProgress} className="h-3" />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>{token.investment.investors} investors</span>
                    <span>{token.investment.daysLeft} days left</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Fish Images */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Fish Images</CardTitle>
                    <CardDescription>Live photos from your farm</CardDescription>
                  </div>
                  <Button variant="outline" size="sm">
                    <Camera className="h-4 w-4 mr-2" />
                    Add Photos
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <Fish className="h-12 w-12 text-blue-600 mx-auto mb-2" />
                      <p className="text-sm text-gray-600">Live Fish Photo</p>
                    </div>
                  </div>
                  <div className="aspect-video bg-gradient-to-br from-green-100 to-green-200 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <Camera className="h-12 w-12 text-green-600 mx-auto mb-2" />
                      <p className="text-sm text-gray-600">Farm Environment</p>
                    </div>
                  </div>
                  <div className="aspect-video bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <Activity className="h-12 w-12 text-purple-600 mx-auto mb-2" />
                      <p className="text-sm text-gray-600">Feeding Activity</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Detailed Tabs */}
            <Tabs defaultValue="overview" className="space-y-6">
              <TabsList className="grid w-full grid-cols-6">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="sustainability">Sustainability</TabsTrigger>

                <TabsTrigger value="timeline">Timeline</TabsTrigger>
                <TabsTrigger value="documents">Documents</TabsTrigger>
                <TabsTrigger value="investors">Investors</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Harvest Details</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                          <MapPin className="h-5 w-5 text-gray-400" />
                          <div>
                            <p className="font-medium">{token.harvest.location}</p>
                            <p className="text-sm text-gray-600">{token.harvest.coordinates}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Calendar className="h-5 w-5 text-gray-400" />
                          <div>
                            <p className="font-medium">Stocking Date</p>
                            <p className="text-sm text-gray-600">{token.harvest.stockingDate}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Activity className="h-5 w-5 text-gray-400" />
                          <div>
                            <p className="font-medium">Current Average Weight</p>
                            <p className="text-sm text-gray-600">{token.harvest.currentWeight}</p>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <p className="font-medium">Water Depth</p>
                          <p className="text-sm text-gray-600">{token.harvest.waterDepth}</p>
                        </div>
                        <div>
                          <p className="font-medium">Cage Size</p>
                          <p className="text-sm text-gray-600">{token.harvest.cageSize}</p>
                        </div>
                        <div>
                          <p className="font-medium">Expected Yield</p>
                          <p className="text-sm text-gray-600">{token.harvest.expectedYield}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                        
                <Card>
                  <CardHeader>
                    <CardTitle>Producer Management Tools</CardTitle>
                    <CardDescription>Quick actions for token management</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-4">
                      <Button variant="outline" className="flex flex-col h-20">
                        <FileText className="h-6 w-6 mb-2" />
                        <span className="text-sm">Update Progress</span>
                      </Button>
                      <Button variant="outline" className="flex flex-col h-20">
                        <Camera className="h-6 w-6 mb-2" />
                        <span className="text-sm">Add Photos</span>
                      </Button>
                      <Button variant="outline" className="flex flex-col h-20">
                        <MessageSquare className="h-6 w-6 mb-2" />
                        <span className="text-sm">Message Investors</span>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              {/* Sustainability Metrics */}
              <TabsContent value="sustainability" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Sustainability Metrics</CardTitle>
                    <CardDescription>Environmental and social impact scores</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="text-center">
                        <div className="text-4xl font-bold text-green-600 mb-2">
                          {token.sustainability.overallScore}/100
                        </div>
                        <p className="text-gray-600">Overall Sustainability Score</p>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <div>
                            <div className="flex justify-between mb-2">
                              <span>Water Quality</span>
                              <span className="font-medium">{token.sustainability.waterQuality}/100</span>
                            </div>
                            <Progress value={token.sustainability.waterQuality} className="h-2" />
                          </div>
                          <div>
                            <div className="flex justify-between mb-2">
                              <span>Feed Efficiency</span>
                              <span className="font-medium">{token.sustainability.feedEfficiency}/100</span>
                            </div>
                            <Progress value={token.sustainability.feedEfficiency} className="h-2" />
                          </div>
                        </div>
                        <div className="space-y-4">
                          <div>
                            <div className="flex justify-between mb-2">
                              <span>Carbon Footprint</span>
                              <span className="font-medium">{token.sustainability.carbonFootprint}/100</span>
                            </div>
                            <Progress value={token.sustainability.carbonFootprint} className="h-2" />
                          </div>
                          <div>
                            <div className="flex justify-between mb-2">
                              <span>Animal Welfare</span>
                              <span className="font-medium">{token.sustainability.animalWelfare}/100</span>
                            </div>
                            <Progress value={token.sustainability.animalWelfare} className="h-2" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Certifications */}
                <Card>
                  <CardHeader>
                    <CardTitle>Certifications</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {token.sustainability.certifications.map((cert) => (
                        <div key={cert.name} className="flex items-center justify-between p-3 border rounded-lg">
                          <div className="flex items-center space-x-3">
                            <CheckCircle className="h-5 w-5 text-green-600" />
                            <div>
                              <p className="font-medium">{cert.name}</p>
                              <p className="text-sm text-gray-600">Expires: {cert.expires}</p>
                            </div>
                          </div>
                          <Badge variant="default">{cert.status}</Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Timeline and Documents Tabs */}
              <TabsContent value="timeline" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Project Timeline</CardTitle>
                    <CardDescription>Key events and milestones</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {token.timeline.map((event, index) => (
                        <div key={index} className="flex space-x-4">
                          <div className="flex-shrink-0">
                            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                              <div className="w-3 h-3 bg-white rounded-full"></div>
                            </div>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h4 className="font-medium">{event.event}</h4>
                              <span className="text-sm text-gray-500">{event.date}</span>
                            </div>
                            <p className="text-sm text-gray-600 mt-1">{event.details}</p>
                            <Badge variant="outline" className="mt-2 text-xs">
                              {event.type}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                    <Button variant="outline" className="w-full mt-4">
                      <FileText className="h-4 w-4 mr-2" />
                      Add Timeline Event
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="documents" className="space-y-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle>Documentation</CardTitle>
                        <CardDescription>Certificates, reports, and compliance documents</CardDescription>
                      </div>
                      <Button variant="outline" size="sm">
                        <FileText className="h-4 w-4 mr-2" />
                        Upload Document
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {token.documents.map((doc, index) => (
                        <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex items-center space-x-3">
                            <FileText className="h-5 w-5 text-gray-400" />
                            <div>
                              <p className="font-medium">{doc.name}</p>
                              <p className="text-sm text-gray-600">
                                {doc.type} • {doc.size}
                              </p>
                            </div>
                          </div>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">
                              Edit
                            </Button>
                            <Button variant="outline" size="sm">
                              Download
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="investors" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Investor Management</CardTitle>
                    <CardDescription>Track and communicate with your token investors</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {token.transactions.map((tx, index) => (
                        <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex items-center space-x-4">
                            <Avatar className="h-10 w-10">
                              <AvatarFallback>{tx.investor.split(".")[0].slice(0, 2).toUpperCase()}</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium">{tx.investor}</p>
                              <p className="text-sm text-gray-600">Invested on {tx.date}</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-4">
                            <div className="text-right">
                              <p className="font-semibold">{tx.amount}</p>
                              <p className="text-sm text-gray-600">{tx.tokens} tokens</p>
                            </div>
                            <Button variant="outline" size="sm">
                              <MessageSquare className="h-4 w-4 mr-2" />
                              Message
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold">Total Investment Summary</h4>
                          <p className="text-sm text-gray-600">
                            {token.investment.investors} investors • {token.investment.soldTokens} tokens sold
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-xl font-bold">${token.investment.funded.toLocaleString()}</p>
                          <p className="text-sm text-gray-600">Total raised</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Right Column - Producer Management Panel */}
          <div className="space-y-6">
            {/* Token Management */}
            <Card>
              <CardHeader>
                <CardTitle>Token Management</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-600">Token Status</p>
                    <Badge variant={token.harvest.status === "Ready Soon" ? "ready-soon" : "secondary"}>
                      {token.harvest.status}
                    </Badge>
                  </div>
                  <div>
                    <p className="text-gray-600">Progress</p>
                    <p className="font-bold text-lg">{token.investment.fundingProgress}%</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Total Investors</p>
                    <p className="font-medium">{token.investment.investors}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Days Remaining</p>
                    <p className="font-medium">{token.investment.daysLeft}</p>
                  </div>
                </div>

                <Separator />

                <div className="space-y-3">
                  <Button className="w-full" size="lg">
                    <Settings className="h-4 w-4 mr-2" />
                    Manage Token
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Users className="h-4 w-4 mr-2" />
                    Contact Investors
                  </Button>
                  <Button variant="outline" className="w-full">
                    <BarChart3 className="h-4 w-4 mr-2" />
                    View Analytics
                  </Button>
                  {token.harvest.status === "Ready Soon" && (
                    <Button className="w-full">
                      <Activity className="h-4 w-4 mr-2" />
                      Initiate Harvest
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Revenue Tracking */}
            <Card>
              <CardHeader>
                <CardTitle>Revenue Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Funds Raised</span>
                    <span className="font-bold text-green-600">${token.investment.funded.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Target Amount</span>
                    <span className="font-medium">${token.investment.totalValue.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Remaining</span>
                    <span className="font-medium">
                      ${(token.investment.totalValue - token.investment.funded).toLocaleString()}
                    </span>
                  </div>
                  <Progress value={token.investment.fundingProgress} className="h-3" />
                </div>
              </CardContent>
            </Card>

            {/* Recent Transactions */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Transactions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {token.transactions.slice(0, 3).map((tx, index) => (
                    <div key={index} className="flex items-center justify-between text-sm">
                      <div>
                        <p className="font-medium">{tx.investor.split(".")[0]}</p>
                        <p className="text-gray-600">{tx.date}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">{tx.amount}</p>
                        <p className="text-gray-600">{tx.tokens} tokens</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4" size="sm">
                  View All Transactions
                </Button>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Stats</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Investors</span>
                    <span className="font-medium">{token.investment.investors}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tokens Sold</span>
                    <span className="font-medium">{token.investment.soldTokens}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Days to Harvest</span>
                    <span className="font-medium">
                      {Math.ceil(
                        (new Date(token.harvest.harvestDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24),
                      )}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Growth Period</span>
                    <span className="font-medium">10 months</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}