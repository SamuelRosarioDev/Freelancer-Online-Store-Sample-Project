import { PageContainer } from '../../styles/styles'
import { CategoryHeader } from '../../components/CategoryHeader'
import { Filters } from '../../components/Filters'
import { ProductGrid } from '../../components/ProductGrid'
import { useState } from 'react'

const mensProducts = [
  { id: 1, name: 'Camiseta Básica', price: 'R$ 49,90', description: 'Camiseta 100% algodão', category: 'Camisetas' },
  { id: 2, name: 'Calça Jeans', price: 'R$ 159,90', description: 'Calça jeans moderna', category: 'Calças' },
  { id: 3, name: 'Camisa Social', price: 'R$ 129,90', description: 'Camisa slim fit', category: 'Camisas' },
  { id: 4, name: 'Blazer Masculino', price: 'R$ 299,90', description: 'Blazer elegante', category: 'Blazers' },
]

export function Masculino() {
  const [activeFilters, setActiveFilters] = useState<string[]>([])
  const [showFilters, setShowFilters] = useState(false)

  const categories = ['Camisetas', 'Calças', 'Camisas', 'Blazers']

  const toggleFilter = (category: string) => {
    setActiveFilters(prev => 
      prev.includes(category) 
        ? prev.filter(f => f !== category)
        : [...prev, category]
    )
  }

  return (
    <PageContainer>
      <CategoryHeader 
        description="Estilo e elegância em cada peça. Encontre o look perfeito para todas as ocasiões"
        bgColor="linear-gradient(135deg, #f0f8ff 0%, #b8d8ff 100%)"
      />

      <Filters
        categories={categories}
        activeFilters={activeFilters}
        showFilters={showFilters}
        onToggleFilters={() => setShowFilters(!showFilters)}
        onToggleFilter={toggleFilter}
      />

      <ProductGrid 
        products={mensProducts}
        activeFilters={activeFilters}
      />
    </PageContainer>
  )
} 