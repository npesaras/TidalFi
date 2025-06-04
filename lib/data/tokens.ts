export interface Token {
  id: string
  species: string
  pond: string
  quantity: string
  harvestDate: string
  progress: number
  status: string
  funded: string
  total: string
  daysRemaining: number
}

export const tokens: Token[] = [
  {
    id: "TF-001",
    species: "Atlantic Salmon",
    pond: "pond-a",
    quantity: "2,500 kg",
    harvestDate: "2024-03-15",
    progress: 75,
    status: "Growing",    funded: "₱18,750",
    total: "₱25,000",
    daysRemaining: 12,
  },
  {
    id: "TF-002",
    species: "Rainbow Trout",
    pond: "pond-b",
    quantity: "1,800 kg",
    harvestDate: "2024-02-28",
    progress: 90,
    status: "Ready Soon",    funded: "₱13,500",
    total: "₱15,000",
    daysRemaining: 5,
  },
  {
    id: "TF-003",
    species: "Sea Bass",
    pond: "pond-c",
    quantity: "3,200 kg",
    harvestDate: "2024-04-20",
    progress: 45,
    status: "Growing",    funded: "₱28,800",
    total: "₱32,000",
    daysRemaining: 28,
  },
  {
    id: "TF-004",
    species: "Arctic Char",
    pond: "pond-a",
    quantity: "1,500 kg",
    harvestDate: "2024-04-10",
    progress: 65,
    status: "Growing",    funded: "₱11,700",
    total: "₱18,000",
    daysRemaining: 18,
  },
  {
    id: "TF-005",
    species: "Sea Bream",
    pond: "pond-c",
    quantity: "2,100 kg",
    harvestDate: "2024-03-25",
    progress: 80,
    status: "Growing",    funded: "₱16,800",
    total: "₱21,000",
    daysRemaining: 8,
  },
]

// Helper functions
export const getTokenById = (id: string): Token | undefined => {
  return tokens.find(token => token.id === id)
}

export const getTokensByPond = (pondId: string): Token[] => {
  return tokens.filter(token => token.pond === pondId)
}

export const getTotalTokensCount = (): number => {
  return tokens.length
}

export const getTotalTokenValue = (): number => {
  return tokens.reduce((sum, token) => {
    return sum + parseInt(token.total.replace(/[₱,]/g, ''))
  }, 0)
}

export const getTokensByStatus = (status: string): Token[] => {
  return tokens.filter(token => token.status.toLowerCase() === status.toLowerCase())
}

export const getActiveTokensCount = (): number => {
  return tokens.filter(token => token.status !== "Harvested").length
}