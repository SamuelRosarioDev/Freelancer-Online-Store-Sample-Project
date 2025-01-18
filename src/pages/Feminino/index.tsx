import { PageContainer } from '../../styles/styles'
import { CategoryHeader } from '../../components/CategoryHeader'
import { Filters } from '../../components/Filters'
import { ProductGrid } from '../../components/ProductGrid'
import { useState } from 'react'

const womensProducts = [
  { id: 1, name: 'Vestido Floral', price: 'R$ 129,90', description: 'Vestido leve e elegante', category: 'Vestidos' },
  { id: 2, name: 'Saia Midi', price: 'R$ 89,90', description: 'Saia versátil', category: 'Saias' },
  { id: 3, name: 'Blusa de Seda', price: 'R$ 99,90', description: 'Blusa elegante', category: 'Blusas' },
  { id: 4, name: 'Calça Social', price: 'R$ 149,90', description: 'Calça de alfaiataria', category: 'Calças' },
]

export function Feminino() {
  const [activeFilters, setActiveFilters] = useState<string[]>([])
  const [showFilters, setShowFilters] = useState(false)

  const categories = ['Vestidos', 'Saias', 'Blusas', 'Calças']

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
        description="Descubra nossa coleção exclusiva com peças modernas e sofisticadas para todos os momentos"
        bgColor="linear-gradient(135deg, #fff5f7 0%, #ffd1dc 100%)"
      />

      <Filters
        categories={categories}
        activeFilters={activeFilters}
        showFilters={showFilters}
        onToggleFilters={() => setShowFilters(!showFilters)}
        onToggleFilter={toggleFilter}
      />

      <ProductGrid 
        products={womensProducts}
        activeFilters={activeFilters}
      />
    </PageContainer>
  )
} 