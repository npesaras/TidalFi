"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DashboardHeader } from "@/components/dashboard-header"
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

// Import shared pond data
import { 
  ponds, 
  getPondById, 
  getTotalPonds, 
  getTotalCapacity, 
  getTotalCurrentStock, 
  getTotalActiveTokens, 
  getTotalValue 
} from "@/lib/data/ponds"

// Import shared tokens data
import { 
  tokens, 
  getTokenById, 
  getTokensByPond, 
  getTotalTokensCount, 
  getTotalTokenValue, 
  getTokensByStatus, 
  getActiveTokensCount 
} from "@/lib/data/tokens"

export default function MyPondPage() {
  const [selectedPond, setSelectedPond] = useState<string>("all")

  // Remove the hardcoded tokens array - now using shared data from /lib/data/tokens.ts

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

  // Updated to use shared tokens data
  const filteredTokens = selectedPond === "all" ? tokens : getTokensByPond(selectedPond)
  const selectedPondData = selectedPond === "all" ? null : getPondById(selectedPond)

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
            {/* Summary Stats - Updated to use shared data functions */}
            {selectedPond === "all" && (
              <div className="grid md:grid-cols-4 gap-6">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-gray-600">Total Ponds</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-gray-900">{getTotalPonds()}</div>
                    <p className="text-sm text-gray-600 mt-1">{getTotalPonds()} active ponds</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-gray-600">Total Capacity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-gray-900">{getTotalCapacity()}</div>
                    <p className="text-sm text-blue-600 mt-1">{getTotalCurrentStock()} current stock</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-gray-600">Active Tokens</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-gray-900">{getActiveTokensCount()}</div>
                    <p className="text-sm text-green-600 mt-1">+2 from last month</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-gray-600">Total Value</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-gray-900">${getTotalTokenValue().toLocaleString()}</div>
                    <p className="text-sm text-gray-600 mt-1">Token value across ponds</p>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Pond Status Cards - Now using shared pond data */}
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
                        <p className="font-medium">{getTokensByPond(pond.id).length}</p>
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