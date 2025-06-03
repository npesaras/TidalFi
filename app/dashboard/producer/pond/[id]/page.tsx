"use client"

import { useState } from "react"
import Link from "next/link"
import { useParams, useRouter } from "next/navigation"
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
import Image from "next/image"

export default function PondDetailsPage() {
  const params = useParams()
  const router = useRouter()
  const pondId = params.id as string
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  // Mock data - in real app, fetch based on pondId
  const ponds = [
    {
      id: "pond-a",
      name: "Pond A",
      location: "North Sector",
      size: "2,500 m²",
      capacity: "15,000 kg",
      currentStock: "12,500 kg",
      utilization: 83,
      status: "optimal",
      waterTemp: "18.5°C",
      oxygenLevel: "8.2 mg/L",
      phLevel: "7.1",
      lastFed: "2 hours ago",
      activeTokens: 3,
      totalValue: "$45,000",
      image: "/images/pond-a.jpg",
    },
    {
      id: "pond-b",
      name: "Pond B",
      location: "East Sector",
      size: "1,800 m²",
      capacity: "10,000 kg",
      currentStock: "8,200 kg",
      utilization: 82,
      status: "good",
      waterTemp: "17.8°C",
      oxygenLevel: "7.9 mg/L",
      phLevel: "7.3",
      lastFed: "1 hour ago",
      activeTokens: 2,
      totalValue: "$28,000",
      image: "/images/pond-b.jpg",
    },
    {
      id: "pond-c",
      name: "Pond C",
      location: "South Sector",
      size: "3,200 m²",
      capacity: "20,000 kg",
      currentStock: "16,800 kg",
      utilization: 84,
      status: "attention",
      waterTemp: "19.2°C",
      oxygenLevel: "7.5 mg/L",
      phLevel: "6.9",
      lastFed: "30 minutes ago",
      activeTokens: 4,
      totalValue: "$62,000",
      image: "/images/pond-c.jpg",
    },
  ]

  const tokens = [
    {
      id: "TF-001",
      species: "Atlantic Salmon",
      pond: "pond-a",
      quantity: "2,500 kg",
      harvestDate: "2024-03-15",
      progress: 75,
      status: "Growing",
      funded: "$18,750",
      total: "$25,000",
      daysRemaining: 12,
    },
    {
      id: "TF-002",
      species: "Rainbow Trout",
      pond: "pond-b",
      quantity: "1,800 kg",
      harvestDate: "2024-02-28",
      progress: 90,
      status: "Ready Soon",
      funded: "$13,500",
      total: "$15,000",
      daysRemaining: 5,
    },
    {
      id: "TF-003",
      species: "Sea Bass",
      pond: "pond-c",
      quantity: "3,200 kg",
      harvestDate: "2024-04-20",
      progress: 45,
      status: "Growing",
      funded: "$28,800",
      total: "$32,000",
      daysRemaining: 28,
    },
    {
      id: "TF-004",
      species: "Arctic Char",
      pond: "pond-a",
      quantity: "1,500 kg",
      harvestDate: "2024-04-10",
      progress: 65,
      status: "Growing",
      funded: "$11,700",
      total: "$18,000",
      daysRemaining: 18,
    },
    {
      id: "TF-005",
      species: "Sea Bream",
      pond: "pond-c",
      quantity: "2,100 kg",
      harvestDate: "2024-03-25",
      progress: 80,
      status: "Growing",
      funded: "$16,800",
      total: "$21,000",
      daysRemaining: 8,
    },
  ]

  const pond = ponds.find(p => p.id === pondId)
  const pondTokens = tokens.filter(token => token.pond === pondId)

  if (!pond) {
    return (
      <div className="min-h-screen bg-gray-50">
        <DashboardHeader userRole="producer" />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Pond Not Found</h1>
            <Button asChild>
              <Link href="/dashboard/producer/pond">Back to Ponds</Link>
            </Button>
          </div>
        </div>
      </div>
    )
  }

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
            </Button>
            <Button asChild>
              <Link href="/tokenize">
                <Plus className="h-4 w-4 mr-2" />
                Create Token
              </Link>
            </Button>
          </div>
        </div>

        {/* Pond Overview Card */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="grid md:grid-cols-3 gap-6">
              {/* Pond Image */}
              <div className="relative h-48 rounded-lg overflow-hidden bg-gray-200">
                <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                  <div className="text-center">
                    <Waves className="h-16 w-16 mx-auto text-blue-400 mb-2" />
                    <p className="text-sm text-gray-600">Pond Image</p>
                    <p className="text-xs text-gray-500">{pond.image}</p>
                  </div>
                </div>
                {/* Replace with actual image when available:
                <Image
                  src={pond.image}
                  alt={`${pond.name} - ${pond.location}`}
                  fill
                  className="object-cover"
                />
                */}
              </div>

              {/* Pond Info */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold">{pond.name}</h2>
                  <Badge className={getStatusColor(pond.status)}>
                    {getStatusIcon(pond.status)}
                    <span className="ml-1 capitalize">{pond.status}</span>
                  </Badge>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-600">Size</p>
                    <p className="font-medium">{pond.size}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Capacity</p>
                    <p className="font-medium">{pond.capacity}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Current Stock</p>
                    <p className="font-medium">{pond.currentStock}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Active Tokens</p>
                    <p className="font-medium">{pond.activeTokens}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Utilization</span>
                    <span>{pond.utilization}%</span>
                  </div>
                  <Progress value={pond.utilization} className="h-2" />
                </div>
              </div>

              {/* IoT Parameters */}
              <div className="space-y-4">
                <h3 className="font-semibold">Live Parameters</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex flex-col items-center p-3 border rounded-lg">
                    <Thermometer className="h-5 w-5 text-blue-600 mb-1" />
                    <p className="text-sm font-bold">{pond.waterTemp}</p>
                    <p className="text-xs text-gray-600">Temperature</p>
                  </div>
                  <div className="flex flex-col items-center p-3 border rounded-lg">
                    <Activity className="h-5 w-5 text-green-600 mb-1" />
                    <p className="text-sm font-bold">{pond.oxygenLevel}</p>
                    <p className="text-xs text-gray-600">Oxygen</p>
                  </div>
                  <div className="flex flex-col items-center p-3 border rounded-lg">
                    <Droplets className="h-5 w-5 text-cyan-600 mb-1" />
                    <p className="text-sm font-bold">pH {pond.phLevel}</p>
                    <p className="text-xs text-gray-600">pH Level</p>
                  </div>
                  <div className="flex flex-col items-center p-3 border rounded-lg">
                    <Fish className="h-5 w-5 text-purple-600 mb-1" />
                    <p className="text-sm font-bold">{pond.totalValue}</p>
                    <p className="text-xs text-gray-600">Total Value</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tabs */}
        <Tabs defaultValue="tokens" className="space-y-6">
          <TabsList>
            <TabsTrigger value="tokens">Active Tokens ({pondTokens.length})</TabsTrigger>
            <TabsTrigger value="monitoring">Live Monitoring</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="tokens" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Active Tokens in {pond.name}</CardTitle>
                    <CardDescription>
                      {pondTokens.length} active tokens with total value of {pond.totalValue}
                    </CardDescription>
                  </div>
                  <ToggleGroup
                    type="single"
                    value={viewMode}
                    onValueChange={(value) => value && setViewMode(value as "grid" | "list")}
                  >
                    <ToggleGroupItem value="grid" aria-label="Grid view">
                      <Grid className="h-4 w-4" />
                    </ToggleGroupItem>
                    <ToggleGroupItem value="list" aria-label="List view">
                      <List className="h-4 w-4" />
                    </ToggleGroupItem>
                  </ToggleGroup>
                </div>
              </CardHeader>
              <CardContent>
                {viewMode === "grid" ? (
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {pondTokens.map((token) => (
                      <Card key={token.id} className="hover:shadow-md transition-shadow">
                        <CardHeader className="pb-3">
                          <div className="flex items-center justify-between">
                            <Fish className="h-6 w-6 text-blue-600" />
                            <Badge variant={token.status === "Ready Soon" ? "ready-soon" : "secondary"}>
                              {token.status}
                            </Badge>
                          </div>
                          <div>
                            <h4 className="font-semibold">{token.species}</h4>
                            <p className="text-sm text-gray-600">Token {token.id}</p>
                          </div>
                        </CardHeader>
                        <CardContent className="space-y-3">
                          <div className="grid grid-cols-2 gap-2 text-sm">
                            <div>
                              <p className="text-gray-600">Quantity</p>
                              <p className="font-medium">{token.quantity}</p>
                            </div>
                            <div>
                              <p className="text-gray-600">Progress</p>
                              <p className="font-medium">{token.progress}%</p>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span>Growth Progress</span>
                              <span>{token.progress}%</span>
                            </div>
                            <Progress value={token.progress} className="h-2" />
                          </div>

                          <div className="text-sm">
                            <p className="text-gray-600">Harvest Date</p>
                            <p className="font-medium flex items-center">
                              <Calendar className="h-3 w-3 mr-1" />
                              {token.harvestDate}
                            </p>
                          </div>

                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm" className="flex-1" asChild>
                              <Link href={`/token/${token.id}?role=producer`}>View Details</Link>
                            </Button>
                            {token.status === "Ready Soon" && (
                              <Button size="sm" className="flex-1">
                                Harvest
                              </Button>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-4">
                    {pondTokens.map((token) => (
                      <div key={token.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center space-x-4">
                            <Fish className="h-8 w-8 text-blue-600" />
                            <div>
                              <h4 className="font-semibold text-lg">{token.species}</h4>
                              <p className="text-sm text-gray-600">Token {token.id}</p>
                            </div>
                          </div>
                          <Badge variant={token.status === "Ready Soon" ? "ready-soon" : "secondary"}>
                            {token.status}
                          </Badge>
                        </div>

                        <div className="grid md:grid-cols-5 gap-4 mb-4">
                          <div>
                            <p className="text-sm text-gray-600">Quantity</p>
                            <p className="font-medium">{token.quantity}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600">Progress</p>
                            <p className="font-medium">{token.progress}%</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600">Funding</p>
                            <p className="font-medium">{token.funded}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600">Harvest Date</p>
                            <p className="font-medium flex items-center">
                              <Calendar className="h-3 w-3 mr-1" />
                              {token.harvestDate}
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600">Days Remaining</p>
                            <p className="font-medium">{token.daysRemaining} days</p>
                          </div>
                        </div>

                        <div className="space-y-2 mb-4">
                          <div className="flex justify-between text-sm">
                            <span>Growth Progress</span>
                            <span>{token.progress}%</span>
                          </div>
                          <Progress value={token.progress} className="h-2" />
                        </div>

                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm" asChild>
                            <Link href={`/token/${token.id}?role=producer`}>View Details</Link>
                          </Button>
                          {token.status === "Ready Soon" && <Button size="sm">Initiate Harvest</Button>}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="monitoring" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Environmental Parameters</CardTitle>
                  <CardDescription>Real-time monitoring data for {pond.name}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Thermometer className="h-6 w-6 text-blue-600" />
                        <div>
                          <p className="font-medium">Water Temperature</p>
                          <p className="text-sm text-gray-600">Optimal: 16-20°C</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-2xl font-bold text-blue-600">{pond.waterTemp}</span>
                        <Badge variant="default" className="ml-2">Normal</Badge>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Activity className="h-6 w-6 text-green-600" />
                        <div>
                          <p className="font-medium">Dissolved Oxygen</p>
                          <p className="text-sm text-gray-600">Optimal: 7-9 mg/L</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-2xl font-bold text-green-600">{pond.oxygenLevel}</span>
                        <Badge variant="default" className="ml-2">Good</Badge>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Droplets className="h-6 w-6 text-cyan-600" />
                        <div>
                          <p className="font-medium">pH Level</p>
                          <p className="text-sm text-gray-600">Optimal: 6.5-7.5</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-2xl font-bold text-cyan-600">{pond.phLevel}</span>
                        <Badge
                          variant={pond.status === "attention" ? "secondary" : "default"}
                          className="ml-2"
                        >
                          {pond.status === "attention" ? "Monitor" : "Normal"}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Feeding & Maintenance</CardTitle>
                  <CardDescription>Recent activities and schedules</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 border rounded">
                      <div>
                        <p className="font-medium">Last Feeding</p>
                        <p className="text-sm text-gray-600">{pond.lastFed}</p>
                      </div>
                      <Badge variant="default">Completed</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded">
                      <div>
                        <p className="font-medium">Next Feeding</p>
                        <p className="text-sm text-gray-600">In 2 hours</p>
                      </div>
                      <Badge variant="secondary">Scheduled</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded">
                      <div>
                        <p className="font-medium">Water Quality Check</p>
                        <p className="text-sm text-gray-600">Daily at 06:00</p>
                      </div>
                      <Badge variant="default">Automated</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded">
                      <div>
                        <p className="font-medium">Maintenance</p>
                        <p className="text-sm text-gray-600">Next: March 15</p>
                      </div>
                      <Badge variant="outline">Scheduled</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Historical Data Chart */}
            <Card>
              <CardHeader>
                <CardTitle>Historical Parameter Trends</CardTitle>
                <CardDescription>Water quality trends over the past 7 days</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center text-gray-500 border rounded-lg bg-gradient-to-br from-blue-50 to-green-50">
                  <div className="text-center">
                    <Activity className="h-12 w-12 mx-auto mb-4 text-blue-600" />
                    <p className="font-medium">Historical Trends Chart</p>
                    <p className="text-sm text-gray-600">Temperature, pH, and oxygen levels over time</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Pond Performance Metrics</CardTitle>
                  <CardDescription>Key performance indicators for {pond.name}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <p className="font-medium">Utilization Rate</p>
                        <p className="text-sm text-gray-600">Current capacity usage</p>
                      </div>
                      <div className="text-right">
                        <span className="text-2xl font-bold text-blue-600">{pond.utilization}%</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <p className="font-medium">Active Tokens</p>
                        <p className="text-sm text-gray-600">Currently running investments</p>
                      </div>
                      <div className="text-right">
                        <span className="text-2xl font-bold text-green-600">{pond.activeTokens}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <p className="font-medium">Total Value</p>
                        <p className="text-sm text-gray-600">Combined token value</p>
                      </div>
                      <div className="text-right">
                        <span className="text-2xl font-bold text-purple-600">{pond.totalValue}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Growth Performance</CardTitle>
                  <CardDescription>Fish growth and harvest efficiency</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center text-gray-500 border rounded-lg bg-gradient-to-br from-green-50 to-blue-50">
                    <div className="text-center">
                      <TrendingUp className="h-12 w-12 mx-auto mb-4 text-green-600" />
                      <p className="font-medium">Growth Analytics Chart</p>
                      <p className="text-sm text-gray-600">Fish growth rates and harvest predictions</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Financial Analytics</CardTitle>
                <CardDescription>Revenue and investment performance for {pond.name}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-2xl font-bold text-green-600">{pond.totalValue}</div>
                    <p className="text-sm text-gray-600">Total Token Value</p>
                    <p className="text-xs text-green-600">+12% vs last month</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">{pond.utilization}%</div>
                    <p className="text-sm text-gray-600">Capacity Utilization</p>
                    <p className="text-xs text-blue-600">+5% vs last month</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">{pond.activeTokens}</div>
                    <p className="text-sm text-gray-600">Active Investments</p>
                    <p className="text-xs text-purple-600">+1 vs last month</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">15.2%</div>
                    <p className="text-sm text-gray-600">Avg ROI</p>
                    <p className="text-xs text-orange-600">+2.1% vs target</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}