"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Fish,
  Waves,
  Activity,
  Thermometer,
  AlertTriangle,
  CheckCircle,
  ArrowLeft,
  Settings,
  MapPin,
  Calendar,
  TrendingUp,
  BarChart3,
  Grid,
  List,
  Droplets,
  Plus,
} from "lucide-react"
import { DashboardHeader } from "@/components/dashboard-header"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

// Import shared data
import { getPondById } from "@/lib/data/ponds"
import { getTokensByPond } from "@/lib/data/tokens"

export default function PondDetailsPage() {
  const params = useParams()
  const pondId = params.id as string
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  // Get data from shared sources
  const pond = getPondById(pondId)
  const pondTokens = getTokensByPond(pondId)

  const getStatusColor = (status: string) => {
    switch (status) {
      case "optimal":
        return "bg-green-100 text-green-800"
      case "good":
        return "bg-blue-100 text-blue-800"
      case "attention":
        return "bg-yellow-100 text-yellow-800"
      case "critical":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "optimal":
        return <CheckCircle className="h-4 w-4" />
      case "good":
        return <CheckCircle className="h-4 w-4" />
      case "attention":
        return <AlertTriangle className="h-4 w-4" />
      case "critical":
        return <AlertTriangle className="h-4 w-4" />
      default:
        return <Activity className="h-4 w-4" />
    }
  }

  if (!pond) {
    return (
      <div className="min-h-screen bg-gray-50">
        <DashboardHeader userRole="producer" />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Pond Not Found</h1>
            <p className="text-gray-600 mb-8">The pond you're looking for doesn't exist.</p>
            <Button asChild>
              <Link href="/dashboard/producer/pond">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Ponds
              </Link>
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader userRole="producer" />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm" asChild>
              <Link href="/dashboard/producer/pond">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Ponds
              </Link>
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{pond.name} Details</h1>
              <p className="text-gray-600 flex items-center">
                <MapPin className="h-4 w-4 mr-1" />
                {pond.location}
              </p>
            </div>
          </div>
          <div className="flex space-x-3">
            <Button variant="outline">
              <Settings className="h-4 w-4 mr-2" />
              Pond Settings
            </Button>            <Button asChild>
              <Link href="/createNewToken">
                <Plus className="h-4 w-4 mr-2" />
                Create Token
              </Link>
            </Button>
          </div>
        </div>

        {/* Pond Overview Card */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Waves className="h-10 w-10 text-blue-600" />
                <div>
                  <CardTitle className="text-2xl">{pond.name}</CardTitle>
                  <CardDescription className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {pond.location} • {pond.size}
                  </CardDescription>
                </div>
              </div>
              <Badge className={getStatusColor(pond.status)} variant="secondary">
                {getStatusIcon(pond.status)}
                <span className="ml-2 capitalize">{pond.status}</span>
              </Badge>            </div>
          </CardHeader>
          
          {/* Pond Image */}
          <div className="px-6 pb-4">
            <div className="relative w-full h-64 rounded-lg overflow-hidden bg-gray-200">
              <Image
                src={pond.image}
                alt={`${pond.name} - Aquaculture pond in ${pond.location}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                priority
              />
            </div>
          </div>
          
          <CardContent>
            <div className="grid md:grid-cols-4 gap-6">
              <div>
                <p className="text-sm text-gray-600 mb-1">Capacity</p>
                <p className="text-2xl font-bold text-gray-900">{pond.capacity}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Current Stock</p>
                <p className="text-2xl font-bold text-blue-600">{pond.currentStock}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Utilization</p>
                <p className="text-2xl font-bold text-green-600">{pond.utilization}%</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Active Tokens</p>
                <p className="text-2xl font-bold text-purple-600">{pondTokens.length}</p>
              </div>
            </div>

            <div className="mt-6">
              <div className="flex justify-between text-sm mb-2">
                <span>Pond Utilization</span>
                <span>{pond.utilization}%</span>
              </div>
              <Progress value={pond.utilization} className="h-3" />
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="monitoring" className="space-y-6">
          <TabsList>
            <TabsTrigger value="monitoring">Live Monitoring</TabsTrigger>
            <TabsTrigger value="tokens">Active Tokens ({pondTokens.length})</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="monitoring" className="space-y-6">
            {/* Environmental Stats */}
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center">
                    <Thermometer className="h-5 w-5 mr-2 text-blue-600" />
                    Water Temperature
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-blue-600">{pond.waterTemp}</div>
                  <p className="text-sm text-gray-600">Optimal range: 16-20°C</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center">
                    <Activity className="h-5 w-5 mr-2 text-green-600" />
                    Oxygen Level
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-green-600">{pond.oxygenLevel}</div>
                  <p className="text-sm text-gray-600">Optimal range: 7-9 mg/L</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center">
                    <Droplets className="h-5 w-5 mr-2 text-purple-600" />
                    pH Level
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-purple-600">{pond.phLevel}</div>
                  <p className="text-sm text-gray-600">Optimal range: 6.5-8.5</p>
                </CardContent>
              </Card>
            </div>

            {/* Feeding Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Fish className="h-5 w-5 mr-2" />
                  Feeding Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Last Fed</p>
                    <p className="font-medium">{pond.lastFed}</p>
                  </div>
                  <Button variant="outline">
                    Record Feeding
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="tokens" className="space-y-6">
            {/* Tokens List */}
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Active Tokens in {pond.name}</h3>
              <ToggleGroup type="single" value={viewMode} onValueChange={(value: "grid" | "list") => value && setViewMode(value)}>
                <ToggleGroupItem value="grid">
                  <Grid className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="list">
                  <List className="h-4 w-4" />
                </ToggleGroupItem>
              </ToggleGroup>
            </div>

            {pondTokens.length === 0 ? (
              <Card>
                <CardContent className="text-center py-12">
                  <Fish className="h-16 w-16 mx-auto text-gray-400 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">No Active Tokens</h3>
                  <p className="text-gray-600 mb-6">This pond doesn't have any active tokens yet.</p>                  <Button asChild>
                    <Link href="/createNewToken">
                      <Plus className="h-4 w-4 mr-2" />
                      Create First Token
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <div className={viewMode === "grid" ? "grid md:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-4"}>
                {pondTokens.map((token) => (
                  <Card key={token.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">{token.species}</CardTitle>
                        <Badge variant="outline">{token.id}</Badge>
                      </div>
                      <CardDescription>
                        {token.quantity} • Harvest: {token.harvestDate}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Progress</span>
                          <span>{token.progress}%</span>
                        </div>
                        <Progress value={token.progress} className="h-2" />
                      </div>

                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-gray-600">Status</p>
                          <p className="font-medium">{token.status}</p>
                        </div>
                        <div>
                          <p className="text-gray-600">Days Remaining</p>
                          <p className="font-medium">{token.daysRemaining} days</p>
                        </div>
                        <div>
                          <p className="text-gray-600">Funded</p>
                          <p className="font-medium">{token.funded}</p>
                        </div>
                        <div>
                          <p className="text-gray-600">Total Value</p>
                          <p className="font-medium">{token.total}</p>
                        </div>
                      </div>

                      <Button variant="outline" size="sm" className="w-full">
                        View Token Details
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="history">
            <Card>
              <CardHeader>
                <CardTitle>Pond History</CardTitle>
                <CardDescription>Historical data and events for this pond</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">History data will be implemented here...</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics">
            <Card>
              <CardHeader>
                <CardTitle>Analytics & Reports</CardTitle>
                <CardDescription>Performance analytics and detailed reports</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Analytics will be implemented here...</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}