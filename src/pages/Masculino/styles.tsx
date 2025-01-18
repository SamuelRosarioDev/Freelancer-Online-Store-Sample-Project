import styled from 'styled-components'
import { breakpoints } from '../../styles/styles'

export const CategoryHeader = styled.div`
  text-align: center;
  padding: 3rem 1rem;
  background: linear-gradient(135deg, #f0f8ff 0%, #b8d8ff 100%);
  margin: -2rem -1rem 2rem;
  
  @media (min-width: ${breakpoints.tablet}) {
    padding: 4rem 2rem;
    margin: -2rem -2rem 2rem;
  }
`

export const CategoryTitle = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1rem;
  font-weight: 600;
`

export const CategoryDescription = styled.p`
  color: #666;
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`

export const FilterSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  gap: 1rem;
`

export const FilterButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  border: 1px solid #ddd;
  border-radius: 25px;
  background: white;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background: #f8f9fa;
    border-color: #333;
  }
`

export const SortSelect = styled.select`
  padding: 0.8rem 1.5rem;
  border: 1px solid #ddd;
  border-radius: 25px;
  background: white;
  cursor: pointer;
  
  &:focus {
    outline: none;
    border-color: #333;
  }
`

export const FilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2rem;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 8px;
`

export const FilterTag = styled.button<{ active: boolean }>`
  padding: 0.5rem 1rem;
  border-radius: 20px;
  border: 1px solid ${props => props.active ? '#4169e1' : '#ddd'};
  background: ${props => props.active ? '#4169e1' : 'white'};
  color: ${props => props.active ? 'white' : '#333'};
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    border-color: #4169e1;
    transform: translateY(-2px);
  }
`

export const ProductsSection = styled.div`
  // Estilização adicional para o ProductGrid herdado
` 

export const ProductInfo = styled.div`
  .add-to-cart {
    background: #4169e1;
    
    &:hover {
      background: #3457b2;
    }
  }
` 