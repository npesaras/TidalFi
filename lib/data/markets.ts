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
  image?: string
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
    id: "rai-food",
    name: "Rai-Food",
    type: "Fine Dining",
    location: "Manila, Philippines",
    rating: 4.8,
    preferredFish: ["Tilapia", "Milkfish", "Pompano"],
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
    image: "/rai-rock.JPG",
  },
  {
    id: "fish-head",
    name: "Fish-Head",
    type: "Casual Fine Dining",
    location: "Cebu, Philippines",
    rating: 4.6,
    preferredFish: ["Milkfish", "Tilapia", "Pompano"],
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
    image: "/fish-head.jpg",
  },
  {
    id: "sea-food-tail",
    name: "Sea Food Tail",
    type: "Seafood Specialist",
    location: "Davao, Philippines",
    rating: 4.7,
    preferredFish: ["Pompano", "Milkfish", "Tilapia"],
    orderFrequency: "Weekly",
    avgOrderSize: "100-150 kg",
    priceRange: "₱11-16/kg",
    specialRequirements: "Fresh daily delivery required",
    lastOrder: "5 days ago",
    totalOrders: 31,
    preferredDelivery: "Wednesday & Saturday",
    chefRating: "AAA Five Diamond",
    paymentTerms: "Net 15",
    status: "High Volume",
    image: "/seafood-tail.jpg",
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
