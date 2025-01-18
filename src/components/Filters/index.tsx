import { FilterSection, FilterButton, SortSelect, FilterContainer, FilterTag } from './styles'
import { FaFilter, FaTimes } from 'react-icons/fa'

interface FiltersProps {
  categories: string[];
  activeFilters: string[];
  showFilters: boolean;
  onToggleFilters: () => void;
  onToggleFilter: (category: string) => void;
}

export function Filters({ 
  categories, 
  activeFilters, 
  showFilters, 
  onToggleFilters, 
  onToggleFilter 
}: FiltersProps) {
  return (
    <>
      <FilterSection>
        <FilterButton onClick={onToggleFilters}>
          {showFilters ? <FaTimes /> : <FaFilter />}
          Filtros
        </FilterButton>
        
        <SortSelect>
          <option value="newest">Mais Recentes</option>
          <option value="price-asc">Menor Preço</option>
          <option value="price-desc">Maior Preço</option>
        </SortSelect>
      </FilterSection>

      {showFilters && (
        <FilterContainer>
          {categories.map(category => (
            <FilterTag
              key={category}
              active={activeFilters.includes(category)}
              onClick={() => onToggleFilter(category)}
            >
              {category}
            </FilterTag>
          ))}
        </FilterContainer>
      )}
    </>
  )
} 