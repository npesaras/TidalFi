"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DashboardHeader } from "@/components/dashboard-header"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Fish,
  Waves,
  Activity,
  Thermometer,
  AlertTriangle,
  CheckCircle,
  Eye,
  Settings,
  Plus,
  MapPin,
  Calendar,
  TrendingUp,
  BarChart3,
  Grid,
  List,
  Droplets,
} from "lucide-react"


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
      waterTemp: "18.5°C",
      oxygenLevel: "8.2 mg/L",
      phLevel: "7.1",
      lastFed: "2 hours ago",
      activeTokens: 3,
      totalValue: "$45,000",
      image: "/images/pond-a.jpg", // Placeholder image path
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
      image: "/images/pond-b.jpg", // Placeholder image path
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
      image: "/images/pond-c.jpg", // Placeholder image path
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

  const filteredTokens = selectedPond === "all" ? tokens : tokens.filter((token) => token.pond === selectedPond)
  const selectedPondData = ponds.find((pond) => pond.id === selectedPond)

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader userRole="producer" />

      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">My Pond</h1>
            <p className="text-gray-600">Monitor and manage your fish ponds and tokens</p>
          </div>
          <div className="flex space-x-3">
            <Button variant="outline" asChild>
              <Link href="/dashboard/producer">
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
        
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsContent value="overview" className="space-y-6">
            {/* Summary Stats */}
            {selectedPond === "all" && (
              <div className="grid md:grid-cols-4 gap-6">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Ponds</CardTitle>
                    <Waves className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{ponds.length}</div>
                    <p className="text-xs text-muted-foreground">3 active ponds</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Capacity</CardTitle>
                    <Fish className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">45,000 kg</div>
                    <p className="text-xs text-muted-foreground">37,500 kg current stock</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Active Tokens</CardTitle>
                    <TrendingUp className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">9</div>
                    <p className="text-xs text-muted-foreground">Across all ponds</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Value</CardTitle>
                    <BarChart3 className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">$135,000</div>
                    <p className="text-xs text-muted-foreground">Token value across ponds</p>
                  </CardContent>
                </Card>
              </div>
            )}
            
            {/* Pond Status Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {(selectedPond === "all" ? ponds : ponds.filter((pond) => pond.id === selectedPond)).map((pond) => (
                <Card key={pond.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    {/* Pond Image */}
                    <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden bg-gray-200">
                      <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                        <div className="text-center">
                          <Waves className="h-16 w-16 mx-auto text-blue-400 mb-2" />
                          <p className="text-sm text-gray-600">Pond Image Placeholder</p>
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

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Waves className="h-8 w-8 text-blue-600" />
                        <div>
                          <CardTitle className="text-lg">{pond.name}</CardTitle>
                          <CardDescription className="flex items-center">
                            <MapPin className="h-3 w-3 mr-1" />
                            {pond.location}
                          </CardDescription>
                        </div>
                      </div>
                      <Badge className={getStatusColor(pond.status)}>
                        {getStatusIcon(pond.status)}
                        <span className="ml-1 capitalize">{pond.status}</span>
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
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

                    <div className="border-t pt-3">
                      <p className="text-sm text-gray-600 mb-2">Quick Stats</p>
                      <div className="grid grid-cols-3 gap-2 text-xs">
                        <div className="text-center">
                          <Thermometer className="h-3 w-3 mx-auto text-blue-600" />
                          <p className="font-medium">{pond.waterTemp}</p>
                        </div>
                        <div className="text-center">
                          <Activity className="h-3 w-3 mx-auto text-green-600" />
                          <p className="font-medium">{pond.oxygenLevel}</p>
                        </div>
                        <div className="text-center">
                          <Fish className="h-3 w-3 mx-auto text-purple-600" />
                          <p className="font-medium">pH {pond.phLevel}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" className="flex-1" asChild>
                        <Link href={`/dashboard/producer/pond/${pond.id}`}>
                          <Eye className="h-4 w-4 mr-2" />
                          View Details
                        </Link>
                      </Button>
                      <Button variant="outline" size="sm">
                        <Settings className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}