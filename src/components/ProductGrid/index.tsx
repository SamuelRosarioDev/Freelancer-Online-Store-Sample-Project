import { Grid } from './styles'
import { ProductCard } from '../ProductCard'

interface Product {
  id: number;
  name: string;
  price: string;
  description: string;
  category: string;
}

interface ProductGridProps {
  products: Product[];
  activeFilters: string[];
}

export function ProductGrid({ products, activeFilters }: ProductGridProps) {
  return (
    <Grid>
      {products
        .filter(product => 
          activeFilters.length === 0 || activeFilters.includes(product.category)
        )
        .map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
    </Grid>
  )
} 