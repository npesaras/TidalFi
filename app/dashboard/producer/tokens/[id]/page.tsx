"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
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
} from "lucide-react"
import { DashboardHeader } from "@/components/dashboard-header"

export default function ProducerTokenDetailsPage() {
  const params = useParams()
  const tokenId = params.id as string

  // Mock data - replace with actual data fetching
  const tokenDetails = {
    id: tokenId,
    species: "Tilapia",
    quantity: "2,500 kg",
    harvestDate: "2024-03-15",
    location: "Laguna - Sector 3",
    progress: 75,
    status: "Growing",
    funded: "₱937,500",
    total: "₱1,250,000",
    investors: 12,
    avgReturn: "12.5%",
    daysRemaining: 45,
    qualityGrade: "Premium",
    feedType: "Organic Pellets",
    waterTemp: "28°C",
    oxygenLevel: "8.2 mg/L",
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader userRole="producer" />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm" asChild>
              <Link href="/dashboard/producer">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Dashboard
              </Link>
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Token {tokenDetails.id}</h1>
              <p className="text-gray-600">{tokenDetails.species} • {tokenDetails.location}</p>
            </div>
          </div>
          <div className="flex space-x-3">
            <Button variant="outline">
              <Camera className="h-4 w-4 mr-2" />
              Add Photos
            </Button>
            <Button variant="outline">
              <FileText className="h-4 w-4 mr-2" />
              Update Progress
            </Button>
            {tokenDetails.status === "Ready Soon" && (
              <Button>
                Initiate Harvest
              </Button>
            )}
          </div>
        </div>

        {/* Status Card */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Fish className="h-12 w-12 text-blue-600" />
                <div>
                  <h2 className="text-2xl font-bold">{tokenDetails.species}</h2>
                  <Badge variant={tokenDetails.status === "Ready Soon" ? "ready-soon" : "secondary"}>
                    {tokenDetails.status}
                  </Badge>
                </div>
              </div>
              <div className="grid grid-cols-4 gap-8 text-center">
                <div>
                  <p className="text-2xl font-bold text-blue-600">{tokenDetails.quantity}</p>
                  <p className="text-sm text-gray-600">Total Quantity</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-green-600">{tokenDetails.progress}%</p>
                  <p className="text-sm text-gray-600">Growth Progress</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-purple-600">{tokenDetails.investors}</p>
                  <p className="text-sm text-gray-600">Active Investors</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-orange-600">{tokenDetails.daysRemaining}</p>
                  <p className="text-sm text-gray-600">Days Remaining</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="monitoring">Monitoring</TabsTrigger>
            <TabsTrigger value="investors">Investors</TabsTrigger>
            <TabsTrigger value="updates">Updates</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Funding Progress */}
              <Card>
                <CardHeader>
                  <CardTitle>Funding Progress</CardTitle>
                  <CardDescription>Current funding status</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span>Funded</span>
                    <span className="font-medium">{tokenDetails.funded} / {tokenDetails.total}</span>
                  </div>
                  <Progress value={75} className="h-3" />
                  <p className="text-sm text-gray-600">75% funded • 12 investors</p>
                </CardContent>
              </Card>

              {/* Growth Progress */}
              <Card>
                <CardHeader>
                  <CardTitle>Growth Progress</CardTitle>
                  <CardDescription>Fish development status</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span>Growth Stage</span>
                    <span className="font-medium">{tokenDetails.progress}%</span>
                  </div>
                  <Progress value={tokenDetails.progress} className="h-3" />
                  <p className="text-sm text-gray-600">Expected harvest: {tokenDetails.harvestDate}</p>
                </CardContent>
              </Card>
            </div>

            {/* Key Metrics */}
            <Card>
              <CardHeader>
                <CardTitle>Key Metrics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center p-4 border rounded-lg">
                    <DollarSign className="h-8 w-8 mx-auto mb-2 text-green-600" />
                    <p className="text-lg font-bold">{tokenDetails.funded}</p>
                    <p className="text-sm text-gray-600">Total Raised</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <Users className="h-8 w-8 mx-auto mb-2 text-blue-600" />
                    <p className="text-lg font-bold">{tokenDetails.investors}</p>
                    <p className="text-sm text-gray-600">Investors</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <TrendingUp className="h-8 w-8 mx-auto mb-2 text-purple-600" />
                    <p className="text-lg font-bold">{tokenDetails.avgReturn}</p>
                    <p className="text-sm text-gray-600">Expected ROI</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <Calendar className="h-8 w-8 mx-auto mb-2 text-orange-600" />
                    <p className="text-lg font-bold">{tokenDetails.daysRemaining}</p>
                    <p className="text-sm text-gray-600">Days to Harvest</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="monitoring" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Water Conditions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span>Temperature</span>
                    <span className="font-medium">{tokenDetails.waterTemp}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Oxygen Level</span>
                    <span className="font-medium">{tokenDetails.oxygenLevel}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>pH Level</span>
                    <span className="font-medium">7.2</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Feed Management</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span>Feed Type</span>
                    <span className="font-medium">{tokenDetails.feedType}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Daily Amount</span>
                    <span className="font-medium">45 kg</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Last Fed</span>
                    <span className="font-medium">2 hours ago</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="investors" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Investor Information</CardTitle>
                <CardDescription>Investors supporting this token</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">Investor details and communications will be displayed here.</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="updates" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Progress Updates</CardTitle>
                <CardDescription>Share updates with your investors</CardDescription>
              </CardHeader>
              <CardContent>
                <Button>
                  <FileText className="h-4 w-4 mr-2" />
                  Post Update
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Token Settings</CardTitle>
                <CardDescription>Manage token configuration</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline">
                  <Settings className="h-4 w-4 mr-2" />
                  Edit Token Details
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}