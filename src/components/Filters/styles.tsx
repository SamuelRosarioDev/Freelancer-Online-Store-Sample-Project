import styled from 'styled-components'

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
  border: 1px solid ${props => props.active ? '#333' : '#ddd'};
  background: ${props => props.active ? '#333' : 'white'};
  color: ${props => props.active ? 'white' : '#333'};
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    border-color: #333;
    transform: translateY(-2px);
  }
` 