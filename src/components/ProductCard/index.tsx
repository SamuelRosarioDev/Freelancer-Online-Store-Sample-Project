import { Card, ImagePlaceholder, ProductInfo } from './styles'

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    price: string;
    description: string;
    category: string;
  }
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card>
      <ImagePlaceholder />
      <ProductInfo>
        <span className="category">{product.category}</span>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p className="price"><strong>{product.price}</strong></p>
        <button className="add-to-cart">Adicionar ao Carrinho</button>
      </ProductInfo>
    </Card>
  )
} 