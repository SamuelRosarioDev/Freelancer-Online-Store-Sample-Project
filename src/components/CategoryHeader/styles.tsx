import styled from 'styled-components'
import { breakpoints } from '../../styles/styles'

export const CategoryHeaderContainer = styled.div<{ bgColor?: string }>`
  text-align: center;
  padding: 3rem 1rem;
  background: ${props => props.bgColor || 'linear-gradient(to right, #f8f9fa, #e9ecef)'};
  margin: -2rem -1rem 2rem;
  
  @media (min-width: ${breakpoints.tablet}) {
    padding: 4rem 2rem;
    margin: -2rem -2rem 2rem;
  }
`

export const CategoryDescription = styled.p`
  color: #666;
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
` 