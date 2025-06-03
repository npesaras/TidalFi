"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import {
  Fish,
  Plus,
  Grid3X3,
  List,
  BarChart3,
  TrendingUp,
  Users,
} from "lucide-react"
import { DashboardHeader } from "@/components/dashboard-header"

export default function producerDashboard() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  const harvestTokens = [
    {
      id: "TF-001",
      species: "Tilapia",
      quantity: "2,500 kg",
      harvestDate: "2024-03-15",
      location: "Laguna - Sector 3",
      progress: 75,
      status: "Growing",
      funded: "₱937,500",
      total: "₱1,250,000",
    },
    {
      id: "TF-002",
      species: "Pompano",
      quantity: "1,800 kg",
      harvestDate: "2024-02-28",
      location: "Batangas - Sector 1",
      progress: 90,
      status: "Ready Soon",
      funded: "₱675,000",
      total: "₱750,000",
    },
    {
      id: "TF-003",
      species: "Milkfish",
      quantity: "3,200 kg",
      harvestDate: "2024-04-20",
      location: "Pangasinan - Sector 5",
      progress: 45,
      status: "Growing",
      funded: "₱1,440,000",
      total: "₱1,600,000",
    },
  ]

  const renderGridView = () => (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {harvestTokens.map((harvest) => (
        <Card key={harvest.id} className="hover:shadow-lg transition-shadow">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Fish className="h-8 w-8 text-blue-600" />
                <div>
                  <CardTitle className="text-lg">{harvest.species}</CardTitle>
                  <CardDescription>Token {harvest.id}</CardDescription>
                </div>
              </div>
              <Badge variant={harvest.status === "Ready Soon" ? "ready-soon" : "secondary"}>{harvest.status}</Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-600">Quantity</p>
                <p className="font-medium">{harvest.quantity}</p>
              </div>
              <div>
                <p className="text-gray-600">Harvest Date</p>
                <p className="font-medium">{harvest.harvestDate}</p>
              </div>
              <div>
                <p className="text-gray-600">Location</p>
                <p className="font-medium">{harvest.location}</p>
              </div>
              <div>
                <p className="text-gray-600">Funding</p>
                <p className="font-medium">
                  {harvest.funded} / {harvest.total}
                </p>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Growth Progress</span>
                <span>{harvest.progress}%</span>
              </div>
              <Progress value={harvest.progress} className="h-2" />
            </div>

            <div className="flex space-x-2">
              <Button variant="outline" size="sm" className="flex-1" asChild>
                <Link href={`/token/${harvest.id}`}>View Details</Link>
              </Button>
              {harvest.status === "Ready Soon" && (
                <Button size="sm" className="flex-1">
                  Initiate Harvest
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )

  const renderListView = () => (
    <div className="space-y-4">
      {harvestTokens.map((harvest) => (
        <Card key={harvest.id}>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Fish className="h-10 w-10 text-blue-600" />
                <div>
                  <h3 className="font-semibold text-lg">{harvest.species}</h3>
                  <p className="text-sm text-gray-600">
                    Token {harvest.id} • {harvest.location}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-6">
                <div className="text-center">
                  <p className="text-sm text-gray-600">Quantity</p>
                  <p className="font-medium">{harvest.quantity}</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-600">Progress</p>
                  <p className="font-medium">{harvest.progress}%</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-600">Funding</p>
                  <p className="font-medium">{harvest.funded}</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-600">Harvest Date</p>
                  <p className="font-medium">{harvest.harvestDate}</p>
                </div>
                <Badge variant={harvest.status === "Ready Soon" ? "ready-soon" : "secondary"}>{harvest.status}</Badge>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/token/${harvest.id}`}>View</Link>
                  </Button>
                  {harvest.status === "Ready Soon" && <Button size="sm">Harvest</Button>}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader userRole="producer" />

      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Producer Dashboard</h1>
            <p className="text-gray-600">Manage your fish harvests and tokens</p>
          </div>
          <Button asChild>
            <Link href="/tokenize">
              <Plus className="h-4 w-4 mr-2" />
              Create New Token
            </Link>
          </Button>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-lg font-medium">Active Tokens</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold">12</div>
              <p className="text-base text-green-600 font-medium">+2 from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-lg font-medium">Total Revenue</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold">₱500,231</div>
              <p className="text-base text-green-600 font-medium">+20.1% from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-lg font-medium">Pending Settlements</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold">3</div>
              <p className="text-base text-orange-600 font-medium">2 ready for harvest</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-lg font-medium">Average ROI</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold">14.2%</div>
              <p className="text-base text-red-600 font-medium">-1.3% from last month</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="harvests" className="space-y-6">
          <TabsList>
            <TabsTrigger value="harvests">My Harvests</TabsTrigger>
            <TabsTrigger value="revenue">Revenue</TabsTrigger>
            <TabsTrigger value="performance">Token Performance</TabsTrigger>
          </TabsList>

          <TabsContent value="harvests" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Active Harvest Tokens</CardTitle>
                    <CardDescription>Your current tokenized fish harvests</CardDescription>
                  </div>
                  <ToggleGroup
                    type="single"
                    value={viewMode}
                    onValueChange={(value) => value && setViewMode(value as "grid" | "list")}
                  >
                    <ToggleGroupItem value="grid" aria-label="Grid view">
                      <Grid3X3 className="h-4 w-4" />
                    </ToggleGroupItem>
                    <ToggleGroupItem value="list" aria-label="List view">
                      <List className="h-4 w-4" />
                    </ToggleGroupItem>
                  </ToggleGroup>
                </div>
              </CardHeader>
              <CardContent>{viewMode === "grid" ? renderGridView() : renderListView()}</CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="revenue" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Monthly Revenue</CardTitle>
                  <CardDescription>Revenue trends over the past 12 months</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64 w-full">
                    <div className="relative h-full">
                      {/* Y-axis labels */}
                      <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-500 pr-4">
                        <span>₱40000</span>
                        <span>₱30000</span>
                        <span>₱20000</span>
                        <span>₱10000</span>
                        <span>₱0</span>
                      </div>
                      
                      {/* Chart area */}
                      <div className="ml-12 h-full relative">
                        <svg className="w-full h-full" viewBox="0 0 400 200">
                          {/* Grid lines */}
                          <defs>
                            <pattern id="grid" width="66.66" height="40" patternUnits="userSpaceOnUse">
                              <path d="M 66.66 0 L 0 0 0 40" fill="none" stroke="#f0f0f0" strokeWidth="1"/>
                            </pattern>
                          </defs>
                          <rect width="100%" height="100%" fill="url(#grid)" />
                          
                          {/* Revenue line */}
                          <polyline
                            fill="none"
                            stroke="#10b981"
                            strokeWidth="2"
                            points="0,180 66,150 133,130 200,110 266,85 333,60 400,40"
                          />
                          
                          {/* Data points */}
                          {[0, 66, 133, 200, 266, 333, 400].map((x, i) => (
                            <circle key={i} cx={x} cy={[180, 150, 130, 110, 85, 60, 40][i]} r="3" fill="#10b981" />
                          ))}
                        </svg>
                        
                        {/* X-axis labels */}
                        <div className="flex justify-between text-xs text-gray-500 mt-2">
                          <span>Jan</span>
                          <span>Feb</span>
                          <span>Mar</span>
                          <span>Apr</span>
                          <span>May</span>
                          <span>Jun</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Revenue by Species</CardTitle>
                  <CardDescription>Breakdown of earnings by fish type</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-4 h-4 bg-blue-500 rounded"></div>
                        <span>Tilapia</span>
                      </div>
                      <span className="font-semibold">₱180,450 (36%)</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-4 h-4 bg-green-500 rounded"></div>
                        <span>Pompano</span>
                      </div>
                      <span className="font-semibold">₱150,230 (30%)</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-4 h-4 bg-purple-500 rounded"></div>
                        <span>Milkfish</span>
                      </div>
                      <span className="font-semibold">₱120,890 (24%)</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-4 h-4 bg-orange-500 rounded"></div>
                        <span>Bangus</span>
                      </div>
                      <span className="font-semibold">₱48,661 (10%)</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Revenue Analytics Card */}
            <Card>
              <CardHeader>
                <CardTitle>Revenue Analytics</CardTitle>
                <CardDescription>Detailed revenue performance metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">₱500,231</div>
                    <p className="text-sm text-gray-600">Total Revenue</p>
                    <p className="text-xs text-green-600">+20.1% vs last year</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">₱41,686</div>
                    <p className="text-sm text-gray-600">Avg Monthly</p>
                    <p className="text-xs text-blue-600">+15.3% vs last year</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">₱156.25</div>
                    <p className="text-sm text-gray-600">Avg Price/kg</p>
                    <p className="text-xs text-purple-600">+8.2% vs last year</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">3,201kg</div>
                    <p className="text-sm text-gray-600">Total Volume</p>
                    <p className="text-xs text-orange-600">+11.5% vs last year</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="performance" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Token Success Rate</CardTitle>
                  <CardDescription>Performance of your tokenized harvests</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64 w-full">
                    <div className="relative h-full">
                      {/* Success Rate Donut Chart */}
                      <div className="flex items-center justify-center h-full">
                        <div className="relative w-48 h-48">
                          <svg className="w-full h-full" viewBox="0 0 200 200">
                            {/* Background circle */}
                            <circle
                              cx="100"
                              cy="100"
                              r="80"
                              fill="none"
                              stroke="#f3f4f6"
                              strokeWidth="20"
                            />
                            {/* Success arc (92%) */}
                            <circle
                              cx="100"
                              cy="100"
                              r="80"
                              fill="none"
                              stroke="#10b981"
                              strokeWidth="20"
                              strokeDasharray={`${92 * 5.024} ${(100 - 92) * 5.024}`}
                              strokeDashoffset="125.6"
                              strokeLinecap="round"
                              transform="rotate(-90 100 100)"
                            />
                            {/* Center text */}
                            <text x="100" y="95" textAnchor="middle" className="text-2xl font-bold fill-gray-900">92%</text>
                            <text x="100" y="115" textAnchor="middle" className="text-sm fill-gray-600">Success Rate</text>
                          </svg>
                        </div>
                      </div>
                      {/* Legend */}
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4 text-sm">
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                          <span>Successful (24)</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-gray-300 rounded-full mr-2"></div>
                          <span>Failed (2)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Funding Speed Trends</CardTitle>
                  <CardDescription>How quickly your tokens get funded</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64 w-full">
                    <div className="relative h-full">
                      {/* Y-axis labels */}
                      <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-500 pr-4">
                        <span>5 days</span>
                        <span>4 days</span>
                        <span>3 days</span>
                        <span>2 days</span>
                        <span>1 day</span>
                      </div>
                      
                      {/* Chart area */}
                      <div className="ml-12 h-full relative">
                        <svg className="w-full h-full" viewBox="0 0 400 200">
                          {/* Grid lines */}
                          <defs>
                            <pattern id="fundingGrid" width="50" height="40" patternUnits="userSpaceOnUse">
                              <path d="M 50 0 L 0 0 0 40" fill="none" stroke="#f0f0f0" strokeWidth="1"/>
                            </pattern>
                          </defs>
                          <rect width="100%" height="100%" fill="url(#fundingGrid)" />
                          
                          {/* Funding speed bars */}
                          <rect x="25" y="120" width="30" height="80" fill="#8b5cf6" rx="2" />
                          <rect x="75" y="100" width="30" height="100" fill="#8b5cf6" rx="2" />
                          <rect x="125" y="80" width="30" height="120" fill="#8b5cf6" rx="2" />
                          <rect x="175" y="60" width="30" height="140" fill="#8b5cf6" rx="2" />
                          <rect x="225" y="40" width="30" height="160" fill="#8b5cf6" rx="2" />
                          <rect x="275" y="20" width="30" height="180" fill="#8b5cf6" rx="2" />
                          <rect x="325" y="80" width="30" height="120" fill="#8b5cf6" rx="2" />
                          
                          {/* Value labels on bars */}
                          <text x="40" y="115" textAnchor="middle" className="text-xs fill-white font-medium">4.5</text>
                          <text x="90" y="95" textAnchor="middle" className="text-xs fill-white font-medium">3.8</text>
                          <text x="140" y="75" textAnchor="middle" className="text-xs fill-white font-medium">3.2</text>
                          <text x="190" y="55" textAnchor="middle" className="text-xs fill-white font-medium">2.9</text>
                          <text x="240" y="35" textAnchor="middle" className="text-xs fill-white font-medium">2.1</text>
                          <text x="290" y="15" textAnchor="middle" className="text-xs fill-white font-medium">1.8</text>
                          <text x="340" y="75" textAnchor="middle" className="text-xs fill-white font-medium">3.2</text>
                        </svg>
                        
                        {/* X-axis labels */}
                        <div className="flex justify-between text-xs text-gray-500 mt-2 px-4">
                          <span>Q4 '23</span>
                          <span>Jan</span>
                          <span>Feb</span>
                          <span>Mar</span>
                          <span>Apr</span>
                          <span>May</span>
                          <span>Jun</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Token Performance Metrics</CardTitle>
                <CardDescription>Key performance indicators for your tokens</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-2xl font-bold text-green-600">24/26</div>
                    <p className="text-sm text-gray-600">Successful Harvests</p>
                    <p className="text-xs text-green-600">92% success rate</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">3.2 days</div>
                    <p className="text-sm text-gray-600">Avg Funding Time</p>
                    <p className="text-xs text-blue-600">-0.8 days vs last quarter</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">78%</div>
                    <p className="text-sm text-gray-600">Investor Retention</p>
                    <p className="text-xs text-purple-600">+5% vs last quarter</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">12.5%</div>
                    <p className="text-sm text-gray-600">Avg ROI Delivered</p>
                    <p className="text-xs text-orange-600">+1.2% vs target</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Investor Satisfaction</CardTitle>
                <CardDescription>Feedback and ratings from your investors</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 w-full">
                  <div className="relative h-full">
                    {/* Y-axis labels */}
                    <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-500 pr-4">
                      <span>5.0</span>
                      <span>4.0</span>
                      <span>3.0</span>
                      <span>2.0</span>
                      <span>1.0</span>
                    </div>
                    
                    {/* Chart area */}
                    <div className="ml-12 h-full relative">
                      <svg className="w-full h-full" viewBox="0 0 400 200">
                        {/* Grid lines */}
                        <defs>
                          <pattern id="satisfactionGrid" width="57.14" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 57.14 0 L 0 0 0 40" fill="none" stroke="#f0f0f0" strokeWidth="1"/>
                          </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#satisfactionGrid)" />
                        
                        {/* Rating trend line */}
                        <polyline
                          fill="none"
                          stroke="#f59e0b"
                          strokeWidth="3"
                          points="0,80 57,60 114,40 171,35 228,25 285,20 342,15 400,12"
                        />
                        
                        {/* Data points */}
                        {[0, 57, 114, 171, 228, 285, 342, 400].map((x, i) => (
                          <circle 
                            key={i} 
                            cx={x} 
                            cy={[80, 60, 40, 35, 25, 20, 15, 12][i]} 
                            r="4" 
                            fill="#f59e0b" 
                            stroke="#fff" 
                            strokeWidth="2"
                          />
                        ))}
                        
                        {/* Rating labels */}
                        <text x="0" y="75" textAnchor="middle" className="text-xs fill-gray-600">3.8</text>
                        <text x="57" y="55" textAnchor="middle" className="text-xs fill-gray-600">4.1</text>
                        <text x="114" y="35" textAnchor="middle" className="text-xs fill-gray-600">4.5</text>
                        <text x="171" y="30" textAnchor="middle" className="text-xs fill-gray-600">4.6</text>
                        <text x="228" y="20" textAnchor="middle" className="text-xs fill-gray-600">4.8</text>
                        <text x="285" y="15" textAnchor="middle" className="text-xs fill-gray-600">4.9</text>
                        <text x="342" y="10" textAnchor="middle" className="text-xs fill-gray-600">4.9</text>
                        <text x="400" y="7" textAnchor="middle" className="text-xs fill-gray-600">5.0</text>
                      </svg>
                      
                      {/* X-axis labels */}
                      <div className="flex justify-between text-xs text-gray-500 mt-2">
                        <span>Dec</span>
                        <span>Jan</span>
                        <span>Feb</span>
                        <span>Mar</span>
                        <span>Apr</span>
                        <span>May</span>
                        <span>Jun</span>
                      </div>
                    </div>
                    
                    {/* Average rating display */}
                    <div className="absolute top-4 right-4 text-center bg-yellow-50 p-3 rounded-lg border">
                      <div className="text-2xl font-bold text-yellow-600">4.8</div>
                      <p className="text-xs text-gray-600">Avg Rating</p>
                    </div>
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