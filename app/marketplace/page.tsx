"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DashboardHeader } from "@/components/dashboard-header"
import Link from "next/link"


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
          </TabsList>

          <TabsContent value="restaurants" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "Ocean's Table",
                  type: "Fine Dining",
                  location: "New York, NY",
                  rating: 4.8,
                  preferredFish: ["Atlantic Salmon", "Sea Bass", "Tuna"],
                  orderFrequency: "Weekly",
                  avgOrderSize: "150-200 kg",
                  priceRange: "$12-18/kg",
                  specialRequirements: "Super Premium grade only",
                  lastOrder: "3 days ago",
                  totalOrders: 24,
                  preferredDelivery: "Tuesday & Friday",
                  chefRating: "Michelin 2-Star",
                  paymentTerms: "Net 15",
                  status: "Active",
                },
                {
                  name: "Nordic Bistro",
                  type: "Casual Fine Dining",
                  location: "Seattle, WA",
                  rating: 4.6,
                  preferredFish: ["Rainbow Trout", "Atlantic Salmon", "Arctic Char"],
                  orderFrequency: "Bi-weekly",
                  avgOrderSize: "80-120 kg",
                  priceRange: "$10-15/kg",
                  specialRequirements: "Organic certified preferred",
                  lastOrder: "1 week ago",
                  totalOrders: 18,
                  preferredDelivery: "Monday & Thursday",
                  chefRating: "James Beard Nominated",
                  paymentTerms: "Net 30",
                  status: "Active",
                },
                {
                  name: "Mediterranean Coast",
                  type: "Mediterranean",
                  location: "Los Angeles, CA",
                  rating: 4.7,
                  preferredFish: ["Sea Bass", "Sea Bream", "Dorado"],
                  orderFrequency: "Weekly",
                  avgOrderSize: "100-150 kg",
                  priceRange: "$11-16/kg",
                  specialRequirements: "Mediterranean species focus",
                  lastOrder: "5 days ago",
                  totalOrders: 31,
                  preferredDelivery: "Wednesday & Saturday",
                  chefRating: "AAA Five Diamond",
                  paymentTerms: "Net 15",
                  status: "High Volume",
                },
                {
                  name: "Coastal Kitchen",
                  type: "Seafood Specialist",
                  location: "Boston, MA",
                  rating: 4.5,
                  preferredFish: ["Atlantic Salmon", "Cod", "Haddock"],
                  orderFrequency: "2x per week",
                  avgOrderSize: "200-300 kg",
                  priceRange: "$9-14/kg",
                  specialRequirements: "Consistent supply needed",
                  lastOrder: "2 days ago",
                  totalOrders: 42,
                  preferredDelivery: "Monday, Wednesday, Friday",
                  chefRating: "Local Favorite",
                  paymentTerms: "Net 30",
                  status: "High Volume",
                },
                {
                  name: "Sakura Sushi",
                  type: "Japanese Fine Dining",
                  location: "San Francisco, CA",
                  rating: 4.9,
                  preferredFish: ["Tuna", "Salmon", "Sea Bass"],
                  orderFrequency: "Daily",
                  avgOrderSize: "50-80 kg",
                  priceRange: "$15-25/kg",
                  specialRequirements: "Sashimi grade only",
                  lastOrder: "Yesterday",
                  totalOrders: 156,
                  preferredDelivery: "Daily except Sunday",
                  chefRating: "Michelin 1-Star",
                  paymentTerms: "Net 7",
                  status: "Premium Partner",
                },
                {
                  name: "Farm & Sea",
                  type: "Farm-to-Table",
                  location: "Portland, OR",
                  rating: 4.4,
                  preferredFish: ["Rainbow Trout", "Steelhead", "Pacific Salmon"],
                  orderFrequency: "Weekly",
                  avgOrderSize: "60-100 kg",
                  priceRange: "$8-13/kg",
                  specialRequirements: "Sustainable practices required",
                  lastOrder: "4 days ago",
                  totalOrders: 28,
                  preferredDelivery: "Thursday",
                  chefRating: "Sustainable Dining Award",
                  paymentTerms: "Net 30",
                  status: "Growing",
                },
              ].map((restaurant, index) => (
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
                    </div>
                  </CardHeader>
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
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">High Demand Species</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span>Atlantic Salmon</span>
                      <Badge variant="default">Hot</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Sea Bass</span>
                      <Badge variant="default">High</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Rainbow Trout</span>
                      <Badge variant="secondary">Medium</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Average Funding Time</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Atlantic Salmon</span>
                      <span className="font-medium">2.1 days</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sea Bass</span>
                      <span className="font-medium">3.5 days</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Rainbow Trout</span>
                      <span className="font-medium">5.2 days</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Quality Premiums</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Premium Grade</span>
                      <span className="font-medium text-green-600">+15%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Super Premium</span>
                      <span className="font-medium text-green-600">+25%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Organic Certified</span>
                      <span className="font-medium text-green-600">+30%</span>
                    </div>
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
                    <p className="text-sm text-gray-600">Average price: $9.85/kg (+8.2% YoY)</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Price by Species</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Atlantic Salmon</span>
                      <div className="text-right">
                        <span className="font-semibold">$11.20/kg</span>
                        <p className="text-xs text-green-600">+12.5%</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Sea Bass</span>
                      <div className="text-right">
                        <span className="font-semibold">$10.80/kg</span>
                        <p className="text-xs text-green-600">+8.9%</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Rainbow Trout</span>
                      <div className="text-right">
                        <span className="font-semibold">$8.50/kg</span>
                        <p className="text-xs text-green-600">+5.2%</p>
                      </div>
                    </div>
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
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 border border-green-200 bg-green-50 rounded-lg">
                      <h4 className="font-semibold text-green-800">Ocean's Table - Urgent Need</h4>
                      <p className="text-sm text-green-700 mt-1">Looking for 200kg Atlantic Salmon - Premium grade</p>
                      <p className="text-xs text-green-600 mt-1">Willing to pay $18/kg - 20% above market</p>
                    </div>
                    <div className="p-4 border border-blue-200 bg-blue-50 rounded-lg">
                      <h4 className="font-semibold text-blue-800">Sakura Sushi - Weekly Contract</h4>
                      <p className="text-sm text-blue-700 mt-1">
                        Seeking reliable supplier for daily sashimi-grade fish
                      </p>
                      <p className="text-xs text-blue-600 mt-1">Long-term contract potential - $25/kg premium</p>
                    </div>
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