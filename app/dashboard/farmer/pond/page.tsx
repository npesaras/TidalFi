"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Fish,
  Waves,
  Activity,
  Thermometer,
  AlertTriangle,
  CheckCircle,
  Eye,
  Plus,
  MapPin,
  Calendar,
  TrendingUp,
  BarChart3,
  Droplets,
  Wind,
  Zap,
  Scale,
  Heart,
  Beaker,
  Gauge,
  WifiOff,
  Wifi,
  Camera,
  Settings,
} from "lucide-react"
import { DashboardHeader } from "@/components/dashboard-header"

export default function MyPondPage() {
  const [selectedPond, setSelectedPond] = useState<string>("all")

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
      waterTemp: 18.5,
      oxygenLevel: 8.2,
      phLevel: 7.1,
      salinity: 34.2,
      turbidity: 2.1,
      ammonia: 0.02,
      nitrite: 0.01,
      nitrate: 5.2,
      alkalinity: 120,
      hardness: 180,
      lastFed: "2 hours ago",
      feedingSchedule: "Every 4 hours",
      nextFeeding: "In 2 hours",
      waterChange: "3 days ago",
      nextWaterChange: "In 4 days",
      activeTokens: 3,
      totalValue: "$45,000",
      avgFishWeight: "4.2 kg",
      mortalityRate: 0.5,
      feedConversionRatio: 1.2,
      growthRate: 12.5,
      waterFlow: 850,
      powerConsumption: 24.5,
      oxygenSaturation: 95,
      sensors: {
        temperature: { status: "online", lastUpdate: "2 min ago", battery: 85 },
        oxygen: { status: "online", lastUpdate: "1 min ago", battery: 92 },
        ph: { status: "online", lastUpdate: "3 min ago", battery: 78 },
        salinity: { status: "online", lastUpdate: "2 min ago", battery: 88 },
        turbidity: { status: "online", lastUpdate: "4 min ago", battery: 95 },
        ammonia: { status: "online", lastUpdate: "5 min ago", battery: 82 },
        flow: { status: "online", lastUpdate: "1 min ago", battery: 90 },
        camera: { status: "online", lastUpdate: "30 sec ago", battery: 75 },
      },
      alerts: [],
      recentEvents: [
        { time: "10:30 AM", event: "Automatic feeding completed", type: "feeding" },
        { time: "09:15 AM", event: "Water quality check - All normal", type: "monitoring" },
        { time: "08:00 AM", event: "Daily health inspection", type: "inspection" },
      ],
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
      waterTemp: 17.8,
      oxygenLevel: 7.9,
      phLevel: 7.3,
      salinity: 33.8,
      turbidity: 2.3,
      ammonia: 0.03,
      nitrite: 0.02,
      nitrate: 6.1,
      alkalinity: 115,
      hardness: 175,
      lastFed: "1 hour ago",
      feedingSchedule: "Every 4 hours",
      nextFeeding: "In 3 hours",
      waterChange: "2 days ago",
      nextWaterChange: "In 5 days",
      activeTokens: 2,
      totalValue: "$28,000",
      avgFishWeight: "3.8 kg",
      mortalityRate: 0.8,
      feedConversionRatio: 1.3,
      growthRate: 11.2,
      waterFlow: 720,
      powerConsumption: 18.2,
      oxygenSaturation: 92,
      sensors: {
        temperature: { status: "online", lastUpdate: "1 min ago", battery: 90 },
        oxygen: { status: "online", lastUpdate: "2 min ago", battery: 85 },
        ph: { status: "online", lastUpdate: "1 min ago", battery: 88 },
        salinity: { status: "online", lastUpdate: "3 min ago", battery: 92 },
        turbidity: { status: "online", lastUpdate: "2 min ago", battery: 87 },
        ammonia: { status: "online", lastUpdate: "4 min ago", battery: 79 },
        flow: { status: "online", lastUpdate: "1 min ago", battery: 94 },
        camera: { status: "offline", lastUpdate: "15 min ago", battery: 12 },
      },
      alerts: [
        { type: "warning", message: "Camera sensor battery low (12%)", time: "15 min ago" },
      ],
      recentEvents: [
        { time: "11:00 AM", event: "Automatic feeding completed", type: "feeding" },
        { time: "10:30 AM", event: "Camera sensor battery warning", type: "alert" },
        { time: "09:00 AM", event: "Water quality check - Normal", type: "monitoring" },
      ],
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
      waterTemp: 19.2,
      oxygenLevel: 7.5,
      phLevel: 6.9,
      salinity: 35.1,
      turbidity: 2.8,
      ammonia: 0.05,
      nitrite: 0.03,
      nitrate: 7.8,
      alkalinity: 108,
      hardness: 195,
      lastFed: "30 minutes ago",
      feedingSchedule: "Every 4 hours",
      nextFeeding: "In 3.5 hours",
      waterChange: "1 day ago",
      nextWaterChange: "In 6 days",
      activeTokens: 4,
      totalValue: "$62,000",
      avgFishWeight: "4.5 kg",
      mortalityRate: 1.2,
      feedConversionRatio: 1.4,
      growthRate: 10.8,
      waterFlow: 920,
      powerConsumption: 32.1,
      oxygenSaturation: 88,
      sensors: {
        temperature: { status: "online", lastUpdate: "1 min ago", battery: 88 },
        oxygen: { status: "online", lastUpdate: "2 min ago", battery: 91 },
        ph: { status: "online", lastUpdate: "1 min ago", battery: 85 },
        salinity: { status: "online", lastUpdate: "2 min ago", battery: 89 },
        turbidity: { status: "online", lastUpdate: "3 min ago", battery: 92 },
        ammonia: { status: "online", lastUpdate: "2 min ago", battery: 86 },
        flow: { status: "online", lastUpdate: "1 min ago", battery: 93 },
        camera: { status: "online", lastUpdate: "45 sec ago", battery: 81 },
      },
      alerts: [
        { type: "warning", message: "pH level slightly below optimal range", time: "5 min ago" },
        { type: "info", message: "Ammonia levels elevated - monitor closely", time: "10 min ago" },
      ],
      recentEvents: [
        { time: "11:30 AM", event: "Automatic feeding completed", type: "feeding" },
        { time: "11:25 AM", event: "pH alert triggered", type: "alert" },
        { time: "11:20 AM", event: "Ammonia levels elevated", type: "alert" },
        { time: "10:00 AM", event: "Water quality check - Attention needed", type: "monitoring" },
      ],
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
      avgWeight: "4.2 kg",
      healthScore: 98,
      feedingEfficiency: 92,
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
      avgWeight: "3.8 kg",
      healthScore: 95,
      feedingEfficiency: 89,
    },
    {
      id: "TF-006",
      species: "Sea Bass",
      pond: "pond-a",
      quantity: "1,200 kg",
      harvestDate: "2024-04-05",
      progress: 85,
      status: "Ready Soon",
      funded: "$9,600",
      total: "$12,000",
      daysRemaining: 8,
      avgWeight: "4.5 kg",
      healthScore: 97,
      feedingEfficiency: 94,
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
      avgWeight: "3.9 kg",
      healthScore: 96,
      feedingEfficiency: 91,
    },
    {
      id: "TF-007",
      species: "Cod",
      pond: "pond-b",
      quantity: "1,100 kg",
      harvestDate: "2024-03-20",
      progress: 70,
      status: "Growing",
      funded: "$8,800",
      total: "$11,000",
      daysRemaining: 15,
      avgWeight: "3.5 kg",
      healthScore: 94,
      feedingEfficiency: 87,
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
      avgWeight: "4.1 kg",
      healthScore: 92,
      feedingEfficiency: 85,
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
      avgWeight: "4.3 kg",
      healthScore: 89,
      feedingEfficiency: 83,
    },
    {
      id: "TF-008",
      species: "Halibut",
      pond: "pond-c",
      quantity: "2,800 kg",
      harvestDate: "2024-05-01",
      progress: 35,
      status: "Growing",
      funded: "$22,400",
      total: "$28,000",
      daysRemaining: 35,
      avgWeight: "3.2 kg",
      healthScore: 91,
      feedingEfficiency: 86,
    },
    {
      id: "TF-009",
      species: "Turbot",
      pond: "pond-c",
      quantity: "1,600 kg",
      harvestDate: "2024-04-15",
      progress: 60,
      status: "Growing",
      funded: "$12,800",
      total: "$16,000",
      daysRemaining: 22,
      avgWeight: "3.9 kg",
      healthScore: 93,
      feedingEfficiency: 88,
    },
  ]

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

  const getSensorIcon = (sensorType: string) => {
    switch (sensorType) {
      case "temperature":
        return <Thermometer className="h-4 w-4" />
      case "oxygen":
        return <Activity className="h-4 w-4" />
      case "ph":
        return <Beaker className="h-4 w-4" />
      case "salinity":
        return <Droplets className="h-4 w-4" />
      case "turbidity":
        return <Eye className="h-4 w-4" />
      case "ammonia":
        return <Gauge className="h-4 w-4" />
      case "flow":
        return <Wind className="h-4 w-4" />
      case "camera":
        return <Eye className="h-4 w-4" />
      default:
        return <Activity className="h-4 w-4" />
    }
  }

  const filteredPonds = selectedPond === "all" ? ponds : ponds.filter((pond) => pond.id === selectedPond)
  const getTokensForPond = (pondId: string) => tokens.filter((token) => token.pond === pondId)

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />

      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">My Pond</h1>
            <p className="text-gray-600">Monitor and manage your fish ponds with comprehensive metrics</p>
          </div>
          <div className="flex space-x-3">
            <Button variant="outline" asChild>
              <Link href="/dashboard">
                <BarChart3 className="h-4 w-4 mr-2" />
                Dashboard
              </Link>
            </Button>
            <Button asChild>
              <Link href="/tokenize">
                <Plus className="h-4 w-4 mr-2" />
                Create Token
              </Link>
            </Button>
          </div>
        </div>

        {/* Pond Filter */}
        <div className="mb-6">
          <Select value={selectedPond} onValueChange={setSelectedPond}>
            <SelectTrigger className="w-64">
              <SelectValue placeholder="Select a pond" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Ponds</SelectItem>
              {ponds.map((pond) => (
                <SelectItem key={pond.id} value={pond.id}>
                  {pond.name} - {pond.location}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Pond Cards with Grouped Tokens */}
        <div className="space-y-8">
          {filteredPonds.map((pond) => {
            const pondTokens = getTokensForPond(pond.id)
            return (
              <Card key={pond.id} className="overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-green-50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <Waves className="h-10 w-10 text-blue-600" />
                      <div>
                        <CardTitle className="text-2xl">{pond.name}</CardTitle>
                        <CardDescription className="flex items-center text-lg">
                          <MapPin className="h-4 w-4 mr-1" />
                          {pond.location} • {pond.size}
                        </CardDescription>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Badge className={getStatusColor(pond.status)} size="lg">
                        {getStatusIcon(pond.status)}
                        <span className="ml-2 capitalize">{pond.status}</span>
                      </Badge>
                      <div className="text-right">
                        <p className="text-2xl font-bold">{pondTokens.length}</p>
                        <p className="text-sm text-gray-600">Active Tokens</p>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="p-6">
                  <Tabs defaultValue="overview" className="space-y-6">
                    <TabsList className="grid w-full grid-cols-5">
                      <TabsTrigger value="overview">Overview</TabsTrigger>
                      <TabsTrigger value="sensors">Water Sensors</TabsTrigger>
                      <TabsTrigger value="tokens">Fish Tokens</TabsTrigger>
                      <TabsTrigger value="feeding">Feeding & Care</TabsTrigger>
                      <TabsTrigger value="analytics">Analytics</TabsTrigger>
                    </TabsList>

                    <TabsContent value="overview" className="space-y-6">
                      {/* Key Metrics Grid */}
                      <div className="grid md:grid-cols-4 gap-6">
                        <Card>
                          <CardContent className="p-4">
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="text-sm text-gray-600">Utilization</p>
                                <p className="text-2xl font-bold">{pond.utilization}%</p>
                              </div>
                              <Scale className="h-8 w-8 text-blue-600" />
                            </div>
                            <Progress value={pond.utilization} className="mt-2 h-2" />
                          </CardContent>
                        </Card>

                        <Card>
                          <CardContent className="p-4">
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="text-sm text-gray-600">Avg Fish Weight</p>
                                <p className="text-2xl font-bold">{pond.avgFishWeight}</p>
                              </div>
                              <Fish className="h-8 w-8 text-green-600" />
                            </div>
                            <p className="text-xs text-green-600 mt-1">+{pond.growthRate}% growth rate</p>
                          </CardContent>
                        </Card>

                        <Card>
                          <CardContent className="p-4">
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="text-sm text-gray-600">Mortality Rate</p>
                                <p className="text-2xl font-bold">{pond.mortalityRate}%</p>
                              </div>
                              <Heart className="h-8 w-8 text-red-600" />
                            </div>
                            <p className="text-xs text-gray-600 mt-1">Below 2% target</p>
                          </CardContent>
                        </Card>

                        <Card>
                          <CardContent className="p-4">
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="text-sm text-gray-600">FCR</p>
                                <p className="text-2xl font-bold">{pond.feedConversionRatio}</p>
                              </div>
                              <TrendingUp className="h-8 w-8 text-purple-600" />
                            </div>
                            <p className="text-xs text-gray-600 mt-1">Feed Conversion Ratio</p>
                          </CardContent>
                        </Card>
                      </div>

                      {/* Water Quality Summary */}
                      <Card>
                        <CardHeader>
                          <CardTitle>Water Quality Summary</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="grid md:grid-cols-3 gap-6">
                            <div className="space-y-4">
                              <div className="flex items-center justify-between p-3 border rounded-lg">
                                <div className="flex items-center space-x-3">
                                  <Thermometer className="h-5 w-5 text-blue-600" />
                                  <span>Temperature</span>
                                </div>
                                <span className="font-bold">{pond.waterTemp}°C</span>
                              </div>
                              <div className="flex items-center justify-between p-3 border rounded-lg">
                                <div className="flex items-center space-x-3">
                                  <Activity className="h-5 w-5 text-green-600" />
                                  <span>Oxygen</span>
                                </div>
                                <span className="font-bold">{pond.oxygenLevel} mg/L</span>
                              </div>
                              <div className="flex items-center justify-between p-3 border rounded-lg">
                                <div className="flex items-center space-x-3">
                                  <Beaker className="h-5 w-5 text-purple-600" />
                                  <span>pH Level</span>
                                </div>
                                <span className="font-bold">{pond.phLevel}</span>
                              </div>
                            </div>
                            <div className="space-y-4">
                              <div className="flex items-center justify-between p-3 border rounded-lg">
                                <div className="flex items-center space-x-3">
                                  <Droplets className="h-5 w-5 text-cyan-600" />
                                  <span>Salinity</span>
                                </div>
                                <span className="font-bold">{pond.salinity}‰</span>
                              </div>
                              <div className="flex items-center justify-between p-3 border rounded-lg">
                                <div className="flex items-center space-x-3">
                                  <Eye className="h-5 w-5 text-orange-600" />
                                  <span>Turbidity</span>
                                </div>
                                <span className="font-bold">{pond.turbidity} NTU</span>
                              </div>
                              <div className="flex items-center justify-between p-3 border rounded-lg">
                                <div className="flex items-center space-x-3">
                                  <Gauge className="h-5 w-5 text-red-600" />
                                  <span>Ammonia</span>
                                </div>
                                <span className="font-bold">{pond.ammonia} mg/L</span>
                              </div>
                            </div>
                            <div className="space-y-4">
                              <div className="flex items-center justify-between p-3 border rounded-lg">
                                <div className="flex items-center space-x-3">
                                  <Wind className="h-5 w-5 text-indigo-600" />
                                  <span>Water Flow</span>
                                </div>
                                <span className="font-bold">{pond.waterFlow} L/min</span>
                              </div>
                              <div className="flex items-center justify-between p-3 border rounded-lg">
                                <div className="flex items-center space-x-3">
                                  <Zap className="h-5 w-5 text-yellow-600" />
                                  <span>Power Usage</span>
                                </div>
                                <span className="font-bold">{pond.powerConsumption} kW</span>
                              </div>
                              <div className="flex items-center justify-between p-3 border rounded-lg">
                                <div className="flex items-center space-x-3">
                                  <Activity className="h-5 w-5 text-green-600" />
                                  <span>O₂ Saturation</span>
                                </div>
                                <span className="font-bold">{pond.oxygenSaturation}%</span>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      {/* Quick Actions */}
                      <Card>
                        <CardHeader>
                          <CardTitle>Quick Actions</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="grid md:grid-cols-4 gap-4">
                            <Button className="h-20 flex-col space-y-2" variant="outline">
                              <Fish className="h-6 w-6" />
                              <span>Manual Feed</span>
                            </Button>
                            <Button className="h-20 flex-col space-y-2" variant="outline">
                              <Droplets className="h-6 w-6" />
                              <span>Water Change</span>
                            </Button>
                            <Button className="h-20 flex-col space-y-2" variant="outline">
                              <Heart className="h-6 w-6" />
                              <span>Health Check</span>
                            </Button>
                            <Button className="h-20 flex-col space-y-2" variant="outline">
                              <AlertTriangle className="h-6 w-6" />
                              <span>Report Issue</span>
                            </Button>
                          </div>
                        </CardContent>
                      </Card>

                      {/* Alerts and Recent Events */}
                      <div className="grid md:grid-cols-2 gap-6">
                        <Card>
                          <CardHeader>
                            <CardTitle>Active Alerts</CardTitle>
                          </CardHeader>
                          <CardContent>
                            {pond.alerts.length === 0 ? (
                              <div className="flex items-center justify-center p-8 text-gray-500">
                                <div className="text-center">
                                  <CheckCircle className="h-12 w-12 mx-auto mb-2 text-green-600" />
                                  <p>No active alerts</p>
                                  <p className="text-sm">All systems operating normally</p>
                                </div>
                              </div>
                            ) : (
                              <div className="space-y-3">
                                {pond.alerts.map((alert, index) => (
                                  <div
                                    key={index}
                                    className={`p-3 rounded-lg border-l-4 ${
                                      alert.type === "warning"
                                        ? "bg-yellow-50 border-yellow-400"
                                        : "bg-blue-50 border-blue-400"
                                    }`}
                                  >
                                    <div className="flex items-start justify-between">
                                      <div>
                                        <p className="font-medium">{alert.message}</p>
                                        <p className="text-sm text-gray-600">{alert.time}</p>
                                      </div>
                                      <AlertTriangle
                                        className={`h-5 w-5 ${
                                          alert.type === "warning" ? "text-yellow-600" : "text-blue-600"
                                        }`}
                                      />
                                    </div>
                                  </div>
                                ))}
                              </div>
                            )}
                          </CardContent>
                        </Card>

                        <Card>
                          <CardHeader>
                            <CardTitle>Recent Events</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-3">
                              {pond.recentEvents.map((event, index) => (
                                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                                  <div>
                                    <p className="font-medium">{event.event}</p>
                                    <p className="text-sm text-gray-600">{event.time}</p>
                                  </div>
                                  <Badge variant="outline" className="text-xs">
                                    {event.type}
                                  </Badge>
                                </div>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </TabsContent>

                    <TabsContent value="sensors" className="space-y-6">
                      <Card>
                        <CardHeader>
                          <CardTitle>Sensor Network Status</CardTitle>
                          <CardDescription>Real-time monitoring of all pond sensors</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {Object.entries(pond.sensors).map(([sensorType, sensor]) => (
                              <Card key={sensorType} className="p-4">
                                <div className="flex items-center justify-between mb-3">
                                  <div className="flex items-center space-x-2">
                                    {getSensorIcon(sensorType)}
                                    <span className="font-medium capitalize">{sensorType}</span>
                                  </div>
                                  {sensor.status === "online" ? (
                                    <Wifi className="h-4 w-4 text-green-600" />
                                  ) : (
                                    <WifiOff className="h-4 w-4 text-red-600" />
                                  )}
                                </div>
                                <div className="space-y-2">
                                  <div className="flex justify-between text-sm">
                                    <span>Status:</span>
                                    <Badge
                                      variant={sensor.status === "online" ? "default" : "destructive"}
                                      className="text-xs"
                                    >
                                      {sensor.status}
                                    </Badge>
                                  </div>
                                  <div className="flex justify-between text-sm">
                                    <span>Last Update:</span>
                                    <span className="text-gray-600">{sensor.lastUpdate}</span>
                                  </div>
                                  <div className="space-y-1">
                                    <div className="flex justify-between text-sm">
                                      <span>Battery:</span>
                                      <span className="font-medium">{sensor.battery}%</span>
                                    </div>
                                    <Progress value={sensor.battery} className="h-1" />
                                  </div>
                                </div>
                              </Card>
                            ))}
                          </div>
                        </CardContent>
                      </Card>

                      {/* Live Camera Feed */}
                      <Card>
                        <CardHeader>
                          <CardTitle>Live Camera Feed</CardTitle>
                          <CardDescription>Real-time visual monitoring of your pond</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-4">
                              <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center relative">
                                <div className="text-center">
                                  <Eye className="h-12 w-12 text-blue-600 mx-auto mb-2" />
                                  <p className="font-medium">Main Camera</p>
                                  <p className="text-sm text-gray-600">Pond Overview</p>
                                </div>
                                <Badge className="absolute top-2 right-2 bg-red-600">LIVE</Badge>
                              </div>
                              <div className="flex space-x-2">
                                <Button size="sm" variant="outline" className="flex-1">
                                  <Camera className="h-4 w-4 mr-2" />
                                  Capture
                                </Button>
                                <Button size="sm" variant="outline" className="flex-1">
                                  <Eye className="h-4 w-4 mr-2" />
                                  Fullscreen
                                </Button>
                              </div>
                            </div>
                            <div className="space-y-4">
                              <div className="aspect-video bg-gradient-to-br from-green-100 to-green-200 rounded-lg flex items-center justify-center relative">
                                <div className="text-center">
                                  <Fish className="h-12 w-12 text-green-600 mx-auto mb-2" />
                                  <p className="font-medium">Feeding Area</p>
                                  <p className="text-sm text-gray-600">Close-up View</p>
                                </div>
                                <Badge className="absolute top-2 right-2 bg-red-600">LIVE</Badge>
                              </div>
                              <div className="flex space-x-2">
                                <Button size="sm" variant="outline" className="flex-1">
                                  <Camera className="h-4 w-4 mr-2" />
                                  Capture
                                </Button>
                                <Button size="sm" variant="outline" className="flex-1">
                                  <Eye className="h-4 w-4 mr-2" />
                                  Fullscreen
                                </Button>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      {/* Detailed Water Chemistry */}
                      <Card>
                        <CardHeader>
                          <CardTitle>Detailed Water Chemistry</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="grid md:grid-cols-3 gap-6">
                            <div className="space-y-4">
                              <h4 className="font-semibold">Primary Parameters</h4>
                              <div className="space-y-3">
                                <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                                  <span>Temperature</span>
                                  <span className="font-bold">{pond.waterTemp}°C</span>
                                </div>
                                <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                                  <span>Dissolved Oxygen</span>
                                  <span className="font-bold">{pond.oxygenLevel} mg/L</span>
                                </div>
                                <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                                  <span>pH Level</span>
                                  <span className="font-bold">{pond.phLevel}</span>
                                </div>
                              </div>
                            </div>
                            <div className="space-y-4">
                              <h4 className="font-semibold">Chemical Composition</h4>
                              <div className="space-y-3">
                                <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                                  <span>Ammonia (NH₃)</span>
                                  <span className="font-bold">{pond.ammonia} mg/L</span>
                                </div>
                                <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                                  <span>Nitrite (NO₂)</span>
                                  <span className="font-bold">{pond.nitrite} mg/L</span>
                                </div>
                                <div className="flex justify-between items-center p-3 bg-yellow-50 rounded-lg">
                                  <span>Nitrate (NO₃)</span>
                                  <span className="font-bold">{pond.nitrate} mg/L</span>
                                </div>
                              </div>
                            </div>
                            <div className="space-y-4">
                              <h4 className="font-semibold">Water Properties</h4>
                              <div className="space-y-3">
                                <div className="flex justify-between items-center p-3 bg-cyan-50 rounded-lg">
                                  <span>Salinity</span>
                                  <span className="font-bold">{pond.salinity}‰</span>
                                </div>
                                <div className="flex justify-between items-center p-3 bg-indigo-50 rounded-lg">
                                  <span>Alkalinity</span>
                                  <span className="font-bold">{pond.alkalinity} mg/L</span>
                                </div>
                                <div className="flex justify-between items-center p-3 bg-pink-50 rounded-lg">
                                  <span>Hardness</span>
                                  <span className="font-bold">{pond.hardness} mg/L</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </TabsContent>

                    <TabsContent value="tokens" className="space-y-6">
                      <Card>
                        <CardHeader>
                          <CardTitle>Fish Tokens in {pond.name}</CardTitle>
                          <CardDescription>
                            {pondTokens.length} active tokens • Total value: {pond.totalValue}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          {pondTokens.length === 0 ? (
                            <div className="flex items-center justify-center p-8 text-gray-500">
                              <div className="text-center">
                                <Fish className="h-12 w-12 mx-auto mb-2 opacity-50" />
                                <p>No tokens in this pond</p>
                                <Button className="mt-4" asChild>
                                  <Link href="/tokenize">Create New Token</Link>
                                </Button>
                              </div>
                            </div>
                          ) : (
                            <div className="grid md:grid-cols-2 gap-4">
                              {pondTokens.map((token) => (
                                <Card key={token.id} className="hover:shadow-md transition-shadow">
                                  <CardHeader className="pb-3">
                                    <div className="flex items-center justify-between">
                                      <div className="flex items-center space-x-3">
                                        <Fish className="h-6 w-6 text-blue-600" />
                                        <div>
                                          <h4 className="font-semibold">{token.species}</h4>
                                          <p className="text-sm text-gray-600">Token {token.id}</p>
                                        </div>
                                      </div>
                                      <Badge variant={token.status === "Ready Soon" ? "default" : "secondary"}>
                                        {token.status}
                                      </Badge>
                                    </div>
                                  </CardHeader>
                                  <CardContent className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4 text-sm">
                                      <div>
                                        <p className="text-gray-600">Quantity</p>
                                        <p className="font-medium">{token.quantity}</p>
                                      </div>
                                      <div>
                                        <p className="text-gray-600">Avg Weight</p>
                                        <p className="font-medium">{token.avgWeight}</p>
                                      </div>
                                      <div>
                                        <p className="text-gray-600">Health Score</p>
                                        <p className="font-medium text-green-600">{token.healthScore}%</p>
                                      </div>
                                      <div>
                                        <p className="text-gray-600">Feed Efficiency</p>
                                        <p className="font-medium">{token.feedingEfficiency}%</p>
                                      </div>
                                    </div>

                                    <div className="space-y-2">
                                      <div className="flex justify-between text-sm">
                                        <span>Growth Progress</span>
                                        <span>{token.progress}%</span>
                                      </div>
                                      <Progress value={token.progress} className="h-2" />
                                    </div>

                                    <div className="flex items-center justify-between text-sm">
                                      <span className="text-gray-600">Harvest Date:</span>
                                      <span className="font-medium flex items-center">
                                        <Calendar className="h-3 w-3 mr-1" />
                                        {token.harvestDate}
                                      </span>
                                    </div>

                                    <Button variant="outline" size="sm" className="w-full" asChild>
                                      <Link href={`/token/${token.id}`}>View Details</Link>
                                    </Button>
                                  </CardContent>
                                </Card>
                              ))}
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    </TabsContent>

                    <TabsContent value="feeding" className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <Card>
                          <CardHeader>
                            <CardTitle>Feeding Schedule</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-4">
                              <div className="flex items-center justify-between p-4 bg-green-50 border rounded-lg">
                                <div>
                                  <p className="font-medium">Last Feeding</p>
                                  <p className="text-sm text-gray-600">{pond.lastFed}</p>
                                </div>
                                <Badge variant="default">Completed</Badge>
                              </div>
                              <div className="flex items-center justify-between p-4 bg-blue-50 border rounded-lg">
                                <div>
                                  <p className="font-medium">Next Feeding</p>
                                  <p className="text-sm text-gray-600">{pond.nextFeeding}</p>
                                </div>
                                <Badge variant="secondary">Scheduled</Badge>
                              </div>
                              <div className="flex items-center justify-between p-4 bg-purple-50 border rounded-lg">
                                <div>
                                  <p className="font-medium">Feeding Frequency</p>
                                  <p className="text-sm text-gray-600">{pond.feedingSchedule}</p>
                                </div>
                                <Badge variant="outline">Automated</Badge>
                              </div>
                            </div>
                          </CardContent>
                        </Card>

                        <Card>
                          <CardHeader>
                            <CardTitle>Maintenance Schedule</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-4">
                              <div className="flex items-center justify-between p-4 bg-cyan-50 border rounded-lg">
                                <div>
                                  <p className="font-medium">Last Water Change</p>
                                  <p className="text-sm text-gray-600">{pond.waterChange}</p>
                                </div>
                                <Badge variant="default">Completed</Badge>
                              </div>
                              <div className="flex items-center justify-between p-4 bg-orange-50 border rounded-lg">
                                <div>
                                  <p className="font-medium">Next Water Change</p>
                                  <p className="text-sm text-gray-600">{pond.nextWaterChange}</p>
                                </div>
                                <Badge variant="secondary">Scheduled</Badge>
                              </div>
                              <div className="flex items-center justify-between p-4 bg-yellow-50 border rounded-lg">
                                <div>
                                  <p className="font-medium">Equipment Check</p>
                                  <p className="text-sm text-gray-600">Weekly inspection</p>
                                </div>
                                <Badge variant="outline">Routine</Badge>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>

                      {/* Performance Metrics */}
                      <Card>
                        <CardHeader>
                          <CardTitle>Performance Metrics</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="grid md:grid-cols-4 gap-6">
                            <div className="text-center p-4 border rounded-lg">
                              <div className="text-2xl font-bold text-green-600">{pond.feedConversionRatio}</div>
                              <p className="text-sm text-gray-600">Feed Conversion Ratio</p>
                              <p className="text-xs text-green-600">Excellent efficiency</p>
                            </div>
                            <div className="text-center p-4 border rounded-lg">
                              <div className="text-2xl font-bold text-blue-600">{pond.growthRate}%</div>
                              <p className="text-sm text-gray-600">Growth Rate</p>
                              <p className="text-xs text-blue-600">Above target</p>
                            </div>
                            <div className="text-center p-4 border rounded-lg">
                              <div className="text-2xl font-bold text-red-600">{pond.mortalityRate}%</div>
                              <p className="text-sm text-gray-600">Mortality Rate</p>
                              <p className="text-xs text-green-600">Below 2% target</p>
                            </div>
                            <div className="text-center p-4 border rounded-lg">
                              <div className="text-2xl font-bold text-purple-600">{pond.oxygenSaturation}%</div>
                              <p className="text-sm text-gray-600">O₂ Saturation</p>
                              <p className="text-xs text-purple-600">Optimal range</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      {/* Automated Systems */}
                      <Card>
                        <CardHeader>
                          <CardTitle>Automated Systems</CardTitle>
                          <CardDescription>Control and monitor automated pond operations</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-4">
                              <h4 className="font-semibold">Feeding System</h4>
                              <div className="space-y-3">
                                <div className="flex items-center justify-between p-3 border rounded-lg">
                                  <span>Auto-Feeder Status</span>
                                  <Badge variant="default">Active</Badge>
                                </div>
                                <div className="flex items-center justify-between p-3 border rounded-lg">
                                  <span>Feed Level</span>
                                  <span className="font-medium">78%</span>
                                </div>
                                <div className="flex items-center justify-between p-3 border rounded-lg">
                                  <span>Next Refill</span>
                                  <span className="font-medium">In 3 days</span>
                                </div>
                                <Button className="w-full" variant="outline">
                                  <Settings className="h-4 w-4 mr-2" />
                                  Configure Feeding
                                </Button>
                              </div>
                            </div>
                            <div className="space-y-4">
                              <h4 className="font-semibold">Water Management</h4>
                              <div className="space-y-3">
                                <div className="flex items-center justify-between p-3 border rounded-lg">
                                  <span>Filtration System</span>
                                  <Badge variant="default">Running</Badge>
                                </div>
                                <div className="flex items-center justify-between p-3 border rounded-lg">
                                  <span>Oxygenation</span>
                                  <Badge variant="default">Optimal</Badge>
                                </div>
                                <div className="flex items-center justify-between p-3 border rounded-lg">
                                  <span>Temperature Control</span>
                                  <Badge variant="default">Auto</Badge>
                                </div>
                                <Button className="w-full" variant="outline">
                                  <Settings className="h-4 w-4 mr-2" />
                                  Water Settings
                                </Button>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </TabsContent>

                    <TabsContent value="analytics" className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <Card>
                          <CardHeader>
                            <CardTitle>Water Quality Trends</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="h-64 flex items-center justify-center text-gray-500 border rounded-lg bg-gradient-to-br from-blue-50 to-green-50">
                              <div className="text-center">
                                <BarChart3 className="h-12 w-12 mx-auto mb-4 text-blue-600" />
                                <p className="font-medium">Water Quality Chart</p>
                                <p className="text-sm text-gray-600">7-day trend analysis</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>

                        <Card>
                          <CardHeader>
                            <CardTitle>Fish Growth Analytics</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="h-64 flex items-center justify-center text-gray-500 border rounded-lg bg-gradient-to-br from-green-50 to-blue-50">
                              <div className="text-center">
                                <TrendingUp className="h-12 w-12 mx-auto mb-4 text-green-600" />
                                <p className="font-medium">Growth Rate Chart</p>
                                <p className="text-sm text-gray-600">Weight progression over time</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>

                      {/* Efficiency Metrics */}
                      <Card>
                        <CardHeader>
                          <CardTitle>Efficiency Metrics</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="grid md:grid-cols-3 gap-6">
                            <div className="space-y-4">
                              <h4 className="font-semibold">Feed Efficiency</h4>
                              <div className="space-y-3">
                                <div>
                                  <div className="flex justify-between mb-2">
                                    <span>Feed Conversion Ratio</span>
                                    <span className="font-medium">{pond.feedConversionRatio}</span>
                                  </div>
                                  <Progress value={85} className="h-2" />
                                  <p className="text-xs text-green-600">Excellent (Target: <1.5)</p>\
                                </div>
                              </div>
                            </div>
                            <div className="space-y-4">
                              <h4 className="font-semibold">Growth Performance</h4>
                              <div className="space-y-3">
                                <div>
                                  <div className="flex justify-between mb-2">
                                    <span>Growth Rate</span>
                                    <span className="font-medium">{pond.growthRate}%</span>
                                  </div>
                                  <Progress value={pond.growthRate * 8} className="h-2" />
                                  <p className="text-xs text-blue-600">Above target (10%)</p>
                                </div>
                              </div>
                            </div>
                            <div className="space-y-4">
                              <h4 className="font-semibold">Health Metrics</h4>
                              <div className="space-y-3">
                                <div>
                                  <div className="flex justify-between mb-2">
                                    <span>Survival Rate</span>
                                    <span className="font-medium">{100 - pond.mortalityRate}%</span>
                                  </div>
                                  <Progress value={100 - pond.mortalityRate} className="h-2" />
                                  <p className="text-xs text-green-600">Excellent health</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            )
          })}
        {selectedPond === "all" && (
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Farm Summary</CardTitle>
              <CardDescription>Overview of all pond operations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center p-4 border rounded-lg">
                  <div className="text-3xl font-bold text-blue-600">{ponds.length}</div>
                  <p className="text-sm text-gray-600">Total Ponds</p>
                  <p className="text-xs text-blue-600">All operational</p>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <div className="text-3xl font-bold text-green-600">{tokens.length}</div>
                  <p className="text-sm text-gray-600">Active Tokens</p>
                  <p className="text-xs text-green-600">Across all ponds</p>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <div className="text-3xl font-bold text-purple-600">
                    {Math.round(ponds.reduce((sum, pond) => sum + Number.parseInt(pond.currentStock.replace(/[^\d]/g, '') || '0'), 0) / 1000)}k kg
                  </div>
                  <p className="text-sm text-gray-600">Total Fish Stock</p>
                  <p className="text-xs text-purple-600">Current biomass</p>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <div className="text-3xl font-bold text-orange-600">
                    ${ponds.reduce((sum, pond) => sum + Number.parseInt(pond.totalValue.replace(/[$,]/g, '') || '0'), 0).toLocaleString()}
                  </div>
                  <p className="text-sm text-gray-600">Total Value</p>
                  <p className="text-xs text-orange-600">All tokens combined</p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
