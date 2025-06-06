"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { 
  Truck, 
  MapPin, 
  Thermometer, 
  Droplets, 
  Activity, 
  CheckCircle, 
  Clock, 
  AlertTriangle,
  Fish,
  Package,
  Navigation,
  Signal,
  Zap,
  Eye,
  Timer,
  Route
} from "lucide-react"
import { DashboardHeader } from "@/components/dashboard-header"
import { 
  deliveries, 
  getActiveDeliveries, 
  getCompletedDeliveries, 
  getDeliveryStats,
  formatDeliveryTime,
  type Delivery 
} from "@/lib/data/deliveries"

export default function DeliveryPage() {
  const [selectedDelivery, setSelectedDelivery] = useState<Delivery>(deliveries[0])
  const [activeTab, setActiveTab] = useState("active")
  const stats = getDeliveryStats()

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      // This would normally fetch real-time data from IoT sensors
      // For demo purposes, we'll just update timestamps
    }, 30000)

    return () => clearInterval(interval)
  }, [])
  const getStepIcon = (stepId: number, status: string) => {
    const icons = {
      1: Package,
      2: Truck,
      3: CheckCircle,
      4: CheckCircle
    }
    const Icon = icons[stepId as keyof typeof icons]
    return <Icon className={`h-5 w-5 ${status === 'completed' ? 'text-green-600' : status === 'active' ? 'text-blue-600' : 'text-gray-300'}`} />
  }

  const getStepDetails = (stepId: number) => {
    const details = {
      1: {
        title: "Harvesting & Collection",
        description: "Fish being harvested from pond and collected in baskets",
        color: "blue",
        bgColor: "bg-blue-50",
        borderColor: "border-blue-200"
      },
      2: {
        title: "Packaging & Transit",
        description: "Fish packaged with ice and loaded for delivery",
        color: "orange",
        bgColor: "bg-orange-50",
        borderColor: "border-orange-200"
      },
      3: {
        title: "Arrival Confirmation",
        description: "Package arrived at destination, awaiting confirmation",
        color: "purple",
        bgColor: "bg-purple-50",
        borderColor: "border-purple-200"
      },
      4: {
        title: "Delivery Complete",
        description: "Fish successfully delivered and quality verified",
        color: "green",
        bgColor: "bg-green-50",
        borderColor: "border-green-200"
      }
    }
    return details[stepId as keyof typeof details]
  }

  const isStepAccessible = (stepId: number, currentStep: number) => {
    return stepId <= currentStep
  }

  const getSensorIcon = (sensorId: string) => {
    if (sensorId.includes('TEMP')) return <Thermometer className="h-4 w-4" />
    if (sensorId.includes('HUM')) return <Droplets className="h-4 w-4" />
    if (sensorId.includes('SHOCK')) return <Activity className="h-4 w-4" />
    if (sensorId.includes('GPS')) return <Navigation className="h-4 w-4" />
    return <Signal className="h-4 w-4" />
  }

  const getSensorColor = (status: string) => {
    switch (status) {
      case 'normal': return 'text-green-600'
      case 'warning': return 'text-yellow-600'
      case 'critical': return 'text-red-600'
      default: return 'text-gray-600'
    }
  }

  const getQualityColor = (status: string) => {
    switch (status) {
      case 'excellent': return 'bg-green-100 text-green-800'
      case 'good': return 'bg-blue-100 text-blue-800'
      case 'fair': return 'bg-yellow-100 text-yellow-800'
      case 'poor': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="space-y-8">
      <DashboardHeader />
      
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Delivery</h1>
          <p className="text-muted-foreground">
            Track your fish token deliveries with real-time IoT monitoring
          </p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Deliveries</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.total}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Deliveries</CardTitle>
            <Truck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.active}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completed</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.completed}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Quality</CardTitle>
            <Fish className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.avgQuality}%</div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Delivery List */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Deliveries</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="active">Active</TabsTrigger>
                  <TabsTrigger value="completed">Completed</TabsTrigger>
                </TabsList>
                
                <TabsContent value="active" className="space-y-3 mt-4">
                  {getActiveDeliveries().map((delivery) => (
                    <div
                      key={delivery.id}
                      className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                        selectedDelivery.id === delivery.id 
                          ? 'border-blue-500 bg-blue-50' 
                          : 'border-gray-200 hover:bg-gray-50'
                      }`}
                      onClick={() => setSelectedDelivery(delivery)}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-sm">{delivery.id}</span>
                        <Badge variant="outline">{delivery.fishType}</Badge>
                      </div>
                      <div className="text-xs text-muted-foreground mb-2">
                        {delivery.quantity} {delivery.unit} • {delivery.destination}
                      </div>
                      <div className="flex items-center gap-2">
                        <Progress 
                          value={(delivery.currentStep / 4) * 100} 
                          className="flex-1 h-1"
                        />
                        <span className="text-xs text-muted-foreground">
                          {delivery.currentStep}/4
                        </span>
                      </div>
                    </div>
                  ))}
                </TabsContent>
                
                <TabsContent value="completed" className="space-y-3 mt-4">
                  {getCompletedDeliveries().map((delivery) => (
                    <div
                      key={delivery.id}
                      className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                        selectedDelivery.id === delivery.id 
                          ? 'border-green-500 bg-green-50' 
                          : 'border-gray-200 hover:bg-gray-50'
                      }`}
                      onClick={() => setSelectedDelivery(delivery)}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-sm">{delivery.id}</span>
                        <Badge variant="outline" className="bg-green-100 text-green-800">
                          {delivery.fishType}
                        </Badge>
                      </div>
                      <div className="text-xs text-muted-foreground mb-2">
                        {delivery.quantity} {delivery.unit} • {delivery.destination}
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-3 w-3 text-green-600" />
                        <span className="text-xs text-green-600">Delivered</span>
                      </div>
                    </div>
                  ))}
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        {/* Delivery Details */}
        <div className="lg:col-span-2 space-y-6">
          {/* Progress Tracker */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Package className="h-5 w-5" />
                Delivery Progress - {selectedDelivery.id}
              </CardTitle>
              <CardDescription>
                {selectedDelivery.fishType} • {selectedDelivery.quantity} {selectedDelivery.unit}
              </CardDescription>
            </CardHeader>
            <CardContent>              {/* Desktop Progress Steps */}
              <div className="hidden md:block">
                <div className="flex items-center justify-between mb-8 relative">
                  {selectedDelivery.steps.map((step, index) => {
                    const stepDetails = getStepDetails(step.id)
                    const isAccessible = isStepAccessible(step.id, selectedDelivery.currentStep)
                    
                    return (
                      <div key={step.id} className="flex flex-col items-center z-10 bg-white px-4">
                        <div className={`
                          w-12 h-12 rounded-full flex items-center justify-center mb-3 shadow-sm transition-all duration-300 cursor-pointer
                          ${step.status === 'completed' 
                            ? 'bg-green-500 text-white shadow-green-200' 
                            : step.status === 'active'
                            ? 'bg-blue-500 text-white shadow-blue-200 ring-4 ring-blue-100'
                            : 'bg-gray-100 text-gray-400'
                          }
                          ${isAccessible ? 'hover:scale-105' : ''}
                        `}>
                          {getStepIcon(step.id, step.status)}
                        </div>
                        <div className="text-center max-w-24">
                          <div className={`text-sm font-semibold mb-1 ${
                            step.status === 'completed' 
                              ? 'text-green-600' 
                              : step.status === 'active'
                              ? 'text-blue-600'
                              : 'text-gray-400'
                          }`}>
                            {step.name}
                          </div>
                          {step.timestamp && (
                            <div className="text-xs text-muted-foreground">
                              {formatDeliveryTime(step.timestamp)}
                            </div>
                          )}
                          {step.location && (
                            <div className="text-xs text-muted-foreground font-medium">
                              {step.location}
                            </div>
                          )}
                        </div>
                      </div>
                    )
                  })}
                  
                  {/* Progress Line Background */}
                  <div className="absolute top-6 left-0 right-0 h-1 bg-gray-200 -z-10 rounded-full" />
                  
                  {/* Progress Line Active */}
                  <div 
                    className="absolute top-6 left-0 h-1 bg-gradient-to-r from-green-400 to-blue-500 -z-10 transition-all duration-1000 ease-in-out rounded-full"
                    style={{ width: `${((selectedDelivery.currentStep - 1) / (selectedDelivery.steps.length - 1)) * 100}%` }}
                  />
                </div>
              </div>              {/* Mobile Progress Steps */}
              <div className="md:hidden space-y-4">
                {selectedDelivery.steps.map((step) => {
                  const stepDetails = getStepDetails(step.id)
                  const isAccessible = isStepAccessible(step.id, selectedDelivery.currentStep)
                  
                  return (
                    <div key={step.id} className={`
                      flex items-center gap-4 p-3 rounded-lg transition-all duration-200
                      ${isAccessible ? stepDetails.bgColor + ' ' + stepDetails.borderColor + ' border-2' : 'bg-gray-50 border-2 border-gray-100'}
                      ${step.status === 'active' ? 'ring-2 ring-blue-200' : ''}
                    `}>
                      <div className={`
                        w-10 h-10 rounded-full flex items-center justify-center shadow-sm
                        ${step.status === 'completed' 
                          ? 'bg-green-500 text-white' 
                          : step.status === 'active'
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-200 text-gray-400'
                        }
                      `}>
                        {getStepIcon(step.id, step.status)}
                      </div>
                      <div className="flex-1">
                        <div className={`font-semibold ${
                          step.status === 'completed' 
                            ? 'text-green-700' 
                            : step.status === 'active'
                            ? 'text-blue-700'
                            : 'text-gray-400'
                        }`}>
                          {isAccessible ? stepDetails.title : step.name}
                        </div>
                        {isAccessible && (
                          <div className="text-sm text-muted-foreground mt-1">
                            {stepDetails.description}
                          </div>
                        )}
                        {step.timestamp && (
                          <div className="text-sm text-muted-foreground mt-1 font-medium">
                            {formatDeliveryTime(step.timestamp)} • {step.location}
                          </div>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>              {/* Current Step Details */}
              <div className="grid gap-4 md:grid-cols-2 mt-6 pt-6 border-t">
                <div>
                  <h4 className="font-medium mb-2">Delivery Details</h4>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <div>Courier: {selectedDelivery.courierName}</div>
                    <div>Contact: {selectedDelivery.courierContact}</div>
                    <div>Destination: {selectedDelivery.destination}</div>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Timeline</h4>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <div>Harvested: {new Date(selectedDelivery.harvestDate).toLocaleDateString()}</div>
                    <div>Packaged: {new Date(selectedDelivery.packagedDate).toLocaleDateString()}</div>
                    <div>ETA: {new Date(selectedDelivery.estimatedDelivery).toLocaleDateString()}</div>
                  </div>
                </div>
              </div>

              {/* Current Step Detailed Information */}
              <div className="mt-6 pt-6 border-t">
                {(() => {
                  const currentStepDetails = getStepDetails(selectedDelivery.currentStep)
                  const currentStep = selectedDelivery.steps.find(s => s.status === 'active')
                  
                  return (
                    <div className={`p-4 rounded-lg ${currentStepDetails.bgColor} ${currentStepDetails.borderColor} border-2`}>
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center bg-${currentStepDetails.color}-500 text-white`}>
                          {getStepIcon(selectedDelivery.currentStep, 'active')}
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg">{currentStepDetails.title}</h4>
                          <p className="text-sm text-muted-foreground">{currentStepDetails.description}</p>
                        </div>
                      </div>
                      
                      {/* Step-specific content */}
                      {selectedDelivery.currentStep === 1 && (
                        <div className="grid gap-3 md:grid-cols-2">
                          <div className="flex items-center gap-2">
                            <Timer className="h-4 w-4 text-blue-600" />
                            <span className="text-sm">Harvest started: {formatDeliveryTime(selectedDelivery.harvestDate)}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Fish className="h-4 w-4 text-blue-600" />
                            <span className="text-sm">{selectedDelivery.quantity} {selectedDelivery.unit} {selectedDelivery.fishType}</span>
                          </div>
                        </div>
                      )}
                      
                      {selectedDelivery.currentStep === 2 && (
                        <div className="grid gap-3 md:grid-cols-2">
                          <div className="flex items-center gap-2">
                            <Route className="h-4 w-4 text-orange-600" />
                            <span className="text-sm">En route to {selectedDelivery.destination}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Truck className="h-4 w-4 text-orange-600" />
                            <span className="text-sm">Courier: {selectedDelivery.courierName}</span>
                          </div>
                        </div>
                      )}
                      
                      {selectedDelivery.currentStep === 3 && (
                        <div className="grid gap-3 md:grid-cols-2">
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-purple-600" />
                            <span className="text-sm">Arrived at {selectedDelivery.destination}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Eye className="h-4 w-4 text-purple-600" />
                            <span className="text-sm">Awaiting quality verification</span>
                          </div>
                        </div>
                      )}
                      
                      {selectedDelivery.currentStep === 4 && (
                        <div className="grid gap-3 md:grid-cols-2">
                          <div className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            <span className="text-sm">Delivery completed successfully</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge className="bg-green-100 text-green-800">
                              Quality Score: {selectedDelivery.quality.score}%
                            </Badge>
                          </div>
                        </div>
                      )}
                    </div>
                  )
                })()}
              </div>
            </CardContent>
          </Card>          {/* IoT Monitoring - Context Aware */}
          <div className="grid gap-6 md:grid-cols-2">
            {/* Sensor Data - Only show if step 2 or higher */}
            {selectedDelivery.currentStep >= 2 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-5 w-5" />
                    IoT Sensors
                    <Badge variant="outline" className="ml-2">
                      {selectedDelivery.currentStep < 4 ? 'Live' : 'Final'}
                    </Badge>
                  </CardTitle>
                  <CardDescription>
                    {selectedDelivery.currentStep < 4 ? 'Real-time monitoring data' : 'Final delivery readings'}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {selectedDelivery.iotSensors.map((sensor) => (
                      <div key={sensor.id} className={`
                        flex items-center justify-between p-3 rounded-lg transition-all duration-200
                        ${sensor.status === 'normal' ? 'bg-green-50 border border-green-200' : 
                          sensor.status === 'warning' ? 'bg-yellow-50 border border-yellow-200' :
                          'bg-red-50 border border-red-200'}
                      `}>
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-full ${
                            sensor.status === 'normal' ? 'bg-green-100' :
                            sensor.status === 'warning' ? 'bg-yellow-100' :
                            'bg-red-100'
                          }`}>
                            <div className={getSensorColor(sensor.status)}>
                              {getSensorIcon(sensor.id)}
                            </div>
                          </div>
                          <div>
                            <div className="font-medium text-sm">{sensor.name}</div>
                            <div className="text-xs text-muted-foreground">
                              Updated {formatDeliveryTime(sensor.lastUpdate)}
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-lg">
                            {sensor.value} {sensor.unit}
                          </div>
                          <Badge 
                            variant="outline" 
                            className={`text-xs ${
                              sensor.status === 'normal' 
                                ? 'border-green-300 text-green-700 bg-green-50' 
                                : sensor.status === 'warning'
                                ? 'border-yellow-300 text-yellow-700 bg-yellow-50'
                                : 'border-red-300 text-red-700 bg-red-50'
                            }`}
                          >
                            {sensor.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Quality & Location */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  {selectedDelivery.currentStep === 1 ? 'Harvest Info' : 
                   selectedDelivery.currentStep >= 2 ? 'Quality & Location' : 'Status'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Quality Score - Only show if step 2 or higher */}
                  {selectedDelivery.currentStep >= 2 && (
                    <div className="p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-green-200">
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-semibold">Quality Score</span>
                        <Badge className={`${getQualityColor(selectedDelivery.quality.status)} text-sm`}>
                          {selectedDelivery.quality.status}
                        </Badge>
                      </div>
                      <div className="text-3xl font-bold text-green-600 mb-3">
                        {selectedDelivery.quality.score}%
                      </div>
                      <Progress value={selectedDelivery.quality.score} className="h-3" />
                    </div>
                  )}

                  {/* Current Location - Only show if step 2 or higher */}
                  {selectedDelivery.currentStep >= 2 && (
                    <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                      <div className="flex items-center gap-2 mb-2">
                        <MapPin className="h-5 w-5 text-blue-600" />
                        <span className="font-semibold">Current Location</span>
                      </div>
                      <div className="text-sm text-muted-foreground font-medium">
                        {selectedDelivery.gpsLocation.address}
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">
                        {selectedDelivery.gpsLocation.lat.toFixed(4)}, {selectedDelivery.gpsLocation.lng.toFixed(4)}
                      </div>
                    </div>
                  )}

                  {/* Step 1: Harvest Information */}
                  {selectedDelivery.currentStep === 1 && (
                    <>
                      <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                        <div className="flex items-center gap-2 mb-2">
                          <Fish className="h-5 w-5 text-blue-600" />
                          <span className="font-semibold">Harvest Details</span>
                        </div>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span>Species:</span>
                            <span className="font-medium">{selectedDelivery.fishType}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Quantity:</span>
                            <span className="font-medium">{selectedDelivery.quantity} {selectedDelivery.unit}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Harvest Date:</span>
                            <span className="font-medium">{new Date(selectedDelivery.harvestDate).toLocaleDateString()}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                        <div className="flex items-center gap-2 mb-2">
                          <Package className="h-5 w-5 text-green-600" />
                          <span className="font-semibold">Collection Status</span>
                        </div>
                        <div className="text-sm text-green-700">
                          Fish are being collected from the pond and prepared for packaging.
                        </div>
                      </div>
                    </>
                  )}

                  {/* Environmental Conditions - Only show if step 2 or higher */}
                  {selectedDelivery.currentStep >= 2 && (
                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3 bg-blue-50 rounded-lg text-center border border-blue-200">
                        <Thermometer className="h-6 w-6 text-blue-600 mx-auto mb-1" />
                        <div className="text-sm font-medium">Temperature</div>
                        <div className="text-xl font-bold text-blue-600">
                          {selectedDelivery.temperature}°C
                        </div>
                        <div className="text-xs text-muted-foreground">Optimal</div>
                      </div>
                      <div className="p-3 bg-blue-50 rounded-lg text-center border border-blue-200">
                        <Droplets className="h-6 w-6 text-blue-600 mx-auto mb-1" />
                        <div className="text-sm font-medium">Humidity</div>
                        <div className="text-xl font-bold text-blue-600">
                          {selectedDelivery.humidity}%
                        </div>
                        <div className="text-xs text-muted-foreground">Good</div>
                      </div>
                    </div>
                  )}

                  {/* Alerts */}
                  {selectedDelivery.quality.alerts.length > 0 && (
                    <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <AlertTriangle className="h-4 w-4 text-yellow-600" />
                        <span className="font-medium text-yellow-800">Alerts</span>
                      </div>
                      <div className="space-y-1">
                        {selectedDelivery.quality.alerts.map((alert, index) => (
                          <div key={index} className="text-sm text-yellow-700">
                            {alert}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}