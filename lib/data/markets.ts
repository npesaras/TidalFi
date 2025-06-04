// Market data for TidalFi platform

export interface Restaurant {
  id: string
  name: string
  type: string
  location: string
  rating: number
  preferredFish: string[]
  orderFrequency: string
  avgOrderSize: string
  priceRange: string
  specialRequirements: string
  lastOrder: string
  totalOrders: number
  preferredDelivery: string
  chefRating: string
  paymentTerms: string
  status: "Active" | "High Volume" | "Premium Partner" | "Growing"
}

export interface MarketDemand {
  species: string
  demandLevel: "Hot" | "High" | "Medium" | "Low"
  avgFundingTime: string
  currentPrice: string
  priceChange: string
}

export interface QualityPremium {
  grade: string
  premiumPercentage: string
}

export interface MarketOpportunity {
  id: string
  restaurant: string
  type: "urgent" | "contract" | "seasonal"
  species: string
  quantity: string
  grade: string
  priceOffered: string
  description: string
  urgency: "high" | "medium" | "low"
}

export const restaurants: Restaurant[] = [
  {
    id: "oceans-table",
    name: "Ocean's Table",
    type: "Fine Dining",
    location: "New York, NY",
    rating: 4.8,
    preferredFish: ["Atlantic Salmon", "Sea Bass", "Tuna"],
    orderFrequency: "Weekly",
    avgOrderSize: "150-200 kg",
    priceRange: "₱12-18/kg",
    specialRequirements: "Super Premium grade only",
    lastOrder: "3 days ago",
    totalOrders: 24,
    preferredDelivery: "Tuesday & Friday",
    chefRating: "Michelin 2-Star",
    paymentTerms: "Net 15",
    status: "Active",
  },
  {
    id: "nordic-bistro",
    name: "Nordic Bistro",
    type: "Casual Fine Dining",
    location: "Seattle, WA",
    rating: 4.6,
    preferredFish: ["Rainbow Trout", "Atlantic Salmon", "Arctic Char"],
    orderFrequency: "Bi-weekly",
    avgOrderSize: "80-120 kg",
    priceRange: "₱10-15/kg",
    specialRequirements: "Organic certified preferred",
    lastOrder: "1 week ago",
    totalOrders: 18,
    preferredDelivery: "Monday & Thursday",
    chefRating: "James Beard Nominated",
    paymentTerms: "Net 30",
    status: "Active",
  },
  {
    id: "mediterranean-coast",
    name: "Mediterranean Coast",
    type: "Mediterranean",
    location: "Los Angeles, CA",
    rating: 4.7,
    preferredFish: ["Sea Bass", "Sea Bream", "Dorado"],
    orderFrequency: "Weekly",
    avgOrderSize: "100-150 kg",
    priceRange: "₱11-16/kg",
    specialRequirements: "Mediterranean species focus",
    lastOrder: "5 days ago",
    totalOrders: 31,
    preferredDelivery: "Wednesday & Saturday",
    chefRating: "AAA Five Diamond",
    paymentTerms: "Net 15",
    status: "High Volume",
  },
  {
    id: "coastal-kitchen",
    name: "Coastal Kitchen",
    type: "Seafood Specialist",
    location: "Boston, MA",
    rating: 4.5,
    preferredFish: ["Atlantic Salmon", "Cod", "Haddock"],
    orderFrequency: "2x per week",
    avgOrderSize: "200-300 kg",
    priceRange: "₱9-14/kg",
    specialRequirements: "Consistent supply needed",
    lastOrder: "2 days ago",
    totalOrders: 42,
    preferredDelivery: "Monday, Wednesday, Friday",
    chefRating: "Local Favorite",
    paymentTerms: "Net 30",
    status: "High Volume",
  },
  {
    id: "sakura-sushi",
    name: "Sakura Sushi",
    type: "Japanese Fine Dining",
    location: "San Francisco, CA",
    rating: 4.9,
    preferredFish: ["Tuna", "Salmon", "Sea Bass"],
    orderFrequency: "Daily",
    avgOrderSize: "50-80 kg",
    priceRange: "₱15-25/kg",
    specialRequirements: "Sashimi grade only",
    lastOrder: "Yesterday",
    totalOrders: 156,
    preferredDelivery: "Daily except Sunday",
    chefRating: "Michelin 1-Star",
    paymentTerms: "Net 7",
    status: "Premium Partner",
  },
  {
    id: "farm-and-sea",
    name: "Farm & Sea",
    type: "Farm-to-Table",
    location: "Portland, OR",
    rating: 4.4,
    preferredFish: ["Rainbow Trout", "Steelhead", "Pacific Salmon"],
    orderFrequency: "Weekly",
    avgOrderSize: "60-100 kg",
    priceRange: "₱8-13/kg",
    specialRequirements: "Sustainable practices required",
    lastOrder: "4 days ago",
    totalOrders: 28,
    preferredDelivery: "Thursday",
    chefRating: "Sustainable Dining Award",
    paymentTerms: "Net 30",
    status: "Growing",
  },
]

export const marketDemand: MarketDemand[] = [
  {
    species: "Atlantic Salmon",
    demandLevel: "Hot",
    avgFundingTime: "2.1 days",
    currentPrice: "₱11.20/kg",
    priceChange: "+12.5%",
  },
  {
    species: "Sea Bass",
    demandLevel: "High",
    avgFundingTime: "3.5 days",
    currentPrice: "₱10.80/kg",
    priceChange: "+8.9%",
  },
  {
    species: "Rainbow Trout",
    demandLevel: "Medium",
    avgFundingTime: "5.2 days",
    currentPrice: "₱8.50/kg",
    priceChange: "+5.2%",
  },
]

export const qualityPremiums: QualityPremium[] = [
  {
    grade: "Premium Grade",
    premiumPercentage: "+15%",
  },
  {
    grade: "Super Premium",
    premiumPercentage: "+25%",
  },
  {
    grade: "Organic Certified",
    premiumPercentage: "+30%",
  },
]

export const marketOpportunities: MarketOpportunity[] = [
  {
    id: "oceans-table-urgent",
    restaurant: "Ocean's Table",
    type: "urgent",
    species: "Atlantic Salmon",
    quantity: "200kg",
    grade: "Premium",
    priceOffered: "₱18/kg",
    description: "Looking for 200kg Atlantic Salmon - Premium grade. Willing to pay ₱18/kg - 20% above market",
    urgency: "high",
  },
  {
    id: "sakura-sushi-contract",
    restaurant: "Sakura Sushi",
    type: "contract",
    species: "Tuna",
    quantity: "Daily supply",
    grade: "Sashimi",
    priceOffered: "₱25/kg",
    description: "Seeking reliable supplier for daily sashimi-grade fish. Long-term contract potential - ₱25/kg premium",
    urgency: "medium",
  },
]

// Helper functions
export const getRestaurantById = (id: string): Restaurant | undefined => {
  return restaurants.find(restaurant => restaurant.id === id)
}

export const getRestaurantsByType = (type: string): Restaurant[] => {
  return restaurants.filter(restaurant => restaurant.type.toLowerCase().includes(type.toLowerCase()))
}

export const getRestaurantsBySpecies = (species: string): Restaurant[] => {
  return restaurants.filter(restaurant => 
    restaurant.preferredFish.some(fish => 
      fish.toLowerCase().includes(species.toLowerCase())
    )
  )
}

export const getHighVolumeRestaurants = (): Restaurant[] => {
  return restaurants.filter(restaurant => 
    restaurant.status === "High Volume" || restaurant.status === "Premium Partner"
  )
}

export const getMarketDemandBySpecies = (species: string): MarketDemand | undefined => {
  return marketDemand.find(demand => 
    demand.species.toLowerCase().includes(species.toLowerCase())
  )
}

export const getHighDemandSpecies = (): MarketDemand[] => {
  return marketDemand.filter(demand => 
    demand.demandLevel === "Hot" || demand.demandLevel === "High"
  )
}

export const getUrgentOpportunities = (): MarketOpportunity[] => {
  return marketOpportunities.filter(opportunity => 
    opportunity.urgency === "high" || opportunity.type === "urgent"
  )
}

export const getOpportunitiesByRestaurant = (restaurantName: string): MarketOpportunity[] => {
  return marketOpportunities.filter(opportunity => 
    opportunity.restaurant.toLowerCase().includes(restaurantName.toLowerCase())
  )
}

export const getAverageMarketPrice = (): string => {
  const totalPrice = marketDemand.reduce((sum, demand) => {
    const price = parseFloat(demand.currentPrice.replace(/[₱,]/g, ''))
    return sum + price
  }, 0)
  const avgPrice = totalPrice / marketDemand.length
  return `₱${avgPrice.toFixed(2)}/kg`
}

export const getTotalRestaurants = (): number => {
  return restaurants.length
}

export const getRestaurantsByStatus = (status: Restaurant['status']): Restaurant[] => {
  return restaurants.filter(restaurant => restaurant.status === status)
}
