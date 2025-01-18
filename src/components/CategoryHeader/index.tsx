import { CategoryHeaderContainer, CategoryDescription } from './styles'

interface CategoryHeaderProps {
  description: string;
  bgColor?: string; // Gradiente de fundo
}

export function CategoryHeader({ description, bgColor }: CategoryHeaderProps) {
  return (
    <CategoryHeaderContainer bgColor={bgColor}>
      <CategoryDescription>
        {description}
      </CategoryDescription>
    </CategoryHeaderContainer>
  )
} 