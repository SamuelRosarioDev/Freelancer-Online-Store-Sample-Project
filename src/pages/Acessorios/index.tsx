import { PageContainer } from '../../styles/styles'
import { CategoryHeader } from '../../components/CategoryHeader'
import { Filters } from '../../components/Filters'
import { ProductGrid } from '../../components/ProductGrid'
import { useState } from 'react'

const accessories = [
  { id: 1, name: 'Colar Delicado', price: 'R$ 59,90', description: 'Colar banhado a ouro', category: 'Colares' },
  { id: 2, name: 'Bolsa de Couro', price: 'R$ 199,90', description: 'Bolsa de couro legítimo', category: 'Bolsas' },
  { id: 3, name: 'Cinto Social', price: 'R$ 79,90', description: 'Cinto em couro', category: 'Cintos' },
  { id: 4, name: 'Óculos de Sol', price: 'R$ 159,90', description: 'Proteção UV400', category: 'Óculos' },
]

export function Acessorios() {
  const [activeFilters, setActiveFilters] = useState<string[]>([])
  const [showFilters, setShowFilters] = useState(false)

  const categories = ['Colares', 'Bolsas', 'Cintos', 'Óculos']

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
        description="Complete seu visual com nossa seleção exclusiva de acessórios para todos os estilos"
        bgColor="linear-gradient(135deg, #f7f0ff 0%, #e0c6ff 100%)"
      />

      <Filters
        categories={categories}
        activeFilters={activeFilters}
        showFilters={showFilters}
        onToggleFilters={() => setShowFilters(!showFilters)}
        onToggleFilter={toggleFilter}
      />

      <ProductGrid 
        products={accessories}
        activeFilters={activeFilters}
      />
    </PageContainer>
  )
} 