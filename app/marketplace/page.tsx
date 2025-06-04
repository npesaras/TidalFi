"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DashboardHeader } from "@/components/dashboard-header"
import Link from "next/link"
import { 
  restaurants, 
  marketDemand, 
  qualityPremiums, 
  marketOpportunities,
  getHighDemandSpecies,
  getUrgentOpportunities,
  getAverageMarketPrice
} from "@/lib/data/markets"

import {
  Fish,
  Search,
  Filter,
  MapPin,
  TrendingUp,
  Plus,
  BarChart3,
  Eye,
  Star,
  CheckCircle,
} from "lucide-react"


export default function MarketplacePage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedSpecies, setSelectedSpecies] = useState("")
  const [priceRange, setPriceRange] = useState("")

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader userRole="producer" />

      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Marketplace Analytics</h1>
            <p className="text-gray-600">Monitor demand and pricing for your fish species</p>
          </div>
        </div>

        {/* Producer-focused Marketplace */}
        <Tabs defaultValue="restaurants" className="space-y-6">
          <TabsList>
            <TabsTrigger value="restaurants">Restaurant Partners</TabsTrigger>
            <TabsTrigger value="demand">Market Demand</TabsTrigger>
            <TabsTrigger value="pricing">Pricing Trends</TabsTrigger>
            <TabsTrigger value="opportunities">Opportunities</TabsTrigger>
          </TabsList>          <TabsContent value="restaurants" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {restaurants.map((restaurant, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{restaurant.name}</CardTitle>
                        <CardDescription className="flex items-center mt-1">
                          <MapPin className="h-3 w-3 mr-1" />
                          {restaurant.location}
                        </CardDescription>
                      </div>
                      <Badge
                        variant={
                          restaurant.status === "Premium Partner"
                            ? "default"
                            : restaurant.status === "High Volume"
                              ? "secondary"
                              : "outline"
                        }
                        className={
                          restaurant.status === "Premium Partner"
                            ? "bg-purple-600"
                            : restaurant.status === "High Volume"
                              ? "bg-blue-600"
                              : ""
                        }
                      >
                        {restaurant.status}
                      </Badge>
                    </div>                  </CardHeader>
                  
                  {/* Restaurant Image */}
                  {restaurant.image && (
                    <div className="px-6 pb-4">
                      <div className="relative h-48 w-full overflow-hidden rounded-lg">
                        <Image
                          src={restaurant.image}
                          alt={restaurant.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  )}
                  
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-600">Type</p>
                        <p className="font-medium">{restaurant.type}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Rating</p>
                        <div className="flex items-center">
                          <Star className="h-3 w-3 text-yellow-500 mr-1" />
                          <span className="font-medium">{restaurant.rating}</span>
                        </div>
                      </div>
                      <div>
                        <p className="text-gray-600">Order Frequency</p>
                        <p className="font-medium">{restaurant.orderFrequency}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Avg Order Size</p>
                        <p className="font-medium">{restaurant.avgOrderSize}</p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <p className="text-sm font-medium text-gray-700">Preferred Fish Species</p>
                      <div className="flex flex-wrap gap-1">
                        {restaurant.preferredFish.map((fish) => (
                          <Badge key={fish} variant="outline" className="text-xs">
                            {fish}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <p className="text-sm font-medium text-gray-700">Business Details</p>
                      <div className="text-xs space-y-1">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Price Range:</span>
                          <span className="font-medium text-green-600">{restaurant.priceRange}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Payment Terms:</span>
                          <span className="font-medium">{restaurant.paymentTerms}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Total Orders:</span>
                          <span className="font-medium">{restaurant.totalOrders}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Last Order:</span>
                          <span className="font-medium">{restaurant.lastOrder}</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <p className="text-sm font-medium text-gray-700">Special Requirements</p>
                      <p className="text-xs text-blue-700 bg-blue-50 p-2 rounded">
                        <CheckCircle className="h-3 w-3 inline mr-1" />
                        {restaurant.specialRequirements}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <p className="text-sm font-medium text-gray-700">Chef Recognition</p>
                      <p className="text-xs text-purple-700 bg-purple-50 p-2 rounded">
                        <Star className="h-3 w-3 inline mr-1" />
                        {restaurant.chefRating}
                      </p>
                    </div>

                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        <Eye className="h-4 w-4 mr-2" />
                        View Profile
                      </Button>                      <Button size="sm" className="flex-1" asChild>
                        <Link href={`/createNewToken?restaurant=${restaurant.name.replace(/\s+/g, "-").toLowerCase()}`}>
                          <Plus className="h-4 w-4 mr-2" />
                          Create Token
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="demand" className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <Card>                <CardHeader>
                  <CardTitle className="text-lg">High Demand Species</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {getHighDemandSpecies().map((demand) => (
                      <div key={demand.species} className="flex justify-between items-center">
                        <span>{demand.species}</span>
                        <Badge variant={demand.demandLevel === "Hot" ? "default" : "secondary"}>
                          {demand.demandLevel}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>                <CardHeader>
                  <CardTitle className="text-lg">Average Funding Time</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {marketDemand.map((demand) => (
                      <div key={demand.species} className="flex justify-between">
                        <span>{demand.species}</span>
                        <span className="font-medium">{demand.avgFundingTime}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>                <CardHeader>
                  <CardTitle className="text-lg">Quality Premiums</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {qualityPremiums.map((premium) => (
                      <div key={premium.grade} className="flex justify-between">
                        <span>{premium.grade}</span>
                        <span className="font-medium text-green-600">{premium.premiumPercentage}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Market Demand Analysis</CardTitle>
                <CardDescription>Current restaurant and consumer demand by species</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center text-gray-500 border rounded-lg">
                  <div className="text-center">
                    <BarChart3 className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>Demand analytics chart would display here</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="pricing" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Pricing Trends</CardTitle>
                <CardDescription>Historical and current pricing data by species</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center text-gray-500 border rounded-lg bg-gradient-to-br from-green-50 to-blue-50">
                  <div className="text-center">
                    <TrendingUp className="h-12 w-12 mx-auto mb-4 text-green-600" />
                    <p className="font-medium">Pricing Trends Chart</p>
                    <p className="text-sm text-gray-600">Average price: {getAverageMarketPrice()} (+8.2% YoY)</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Price by Species</CardTitle>
                </CardHeader>                <CardContent>
                  <div className="space-y-4">
                    {marketDemand.map((demand) => (
                      <div key={demand.species} className="flex justify-between items-center">
                        <span>{demand.species}</span>
                        <div className="text-right">
                          <span className="font-semibold">{demand.currentPrice}</span>
                          <p className="text-xs text-green-600">{demand.priceChange}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Market Trends</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-3 bg-green-50 border border-green-200 rounded">
                      <p className="font-medium text-green-800">Premium demand rising</p>
                      <p className="text-sm text-green-700">+25% increase in premium grade requests</p>
                    </div>
                    <div className="p-3 bg-blue-50 border border-blue-200 rounded">
                      <p className="font-medium text-blue-800">Organic certification premium</p>
                      <p className="text-sm text-blue-700">30% price premium for organic certified fish</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="opportunities" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Restaurant Opportunities</CardTitle>
                </CardHeader>                <CardContent>
                  <div className="space-y-4">
                    {getUrgentOpportunities().map((opportunity) => (
                      <div 
                        key={opportunity.id} 
                        className={`p-4 border rounded-lg ${
                          opportunity.urgency === "high" 
                            ? "border-green-200 bg-green-50" 
                            : "border-blue-200 bg-blue-50"
                        }`}
                      >
                        <h4 className={`font-semibold ${
                          opportunity.urgency === "high" ? "text-green-800" : "text-blue-800"
                        }`}>
                          {opportunity.restaurant} - {opportunity.type === "urgent" ? "Urgent Need" : "Contract"}
                        </h4>
                        <p className={`text-sm mt-1 ${
                          opportunity.urgency === "high" ? "text-green-700" : "text-blue-700"
                        }`}>
                          {opportunity.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recommended Actions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">                    <Button className="w-full justify-start" variant="outline" asChild>
                      <Link href="/createNewToken?restaurant=oceans-table&species=salmon&grade=premium">
                        <Plus className="h-4 w-4 mr-2" />
                        Create Token for Ocean's Table
                      </Link>
                    </Button>
                    <Button className="w-full justify-start" variant="outline" asChild>
                      <Link href="/createNewToken?restaurant=sakura-sushi&species=tuna&grade=sashimi">
                        <Plus className="h-4 w-4 mr-2" />
                        Create Sashimi-Grade Token
                      </Link>
                    </Button>
                    <Button className="w-full justify-start" variant="outline">
                      <Eye className="h-4 w-4 mr-2" />
                      View All Restaurant Requests
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}