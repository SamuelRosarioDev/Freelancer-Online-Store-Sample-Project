import styled from 'styled-components'
import { breakpoints } from '../../styles/styles'

export const Card = styled.div`
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: transform 0.2s;
  width: 100%;
  max-width: 320px;
  
  @media (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}) {
    width: calc(100% - 2rem);
    margin: 0 1rem;
  }

  @media (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop}) {
    width: calc(50% - 1.5rem);
    max-width: none;
  }

  @media (min-width: ${breakpoints.desktop}) {
    width: calc(33.333% - 2rem);
    max-width: 380px;
  }
  
  &:hover {
    transform: translateY(-5px);
  }
`

export const ImagePlaceholder = styled.div`
  background: #f0f0f0;
  width: 100%;
  height: 0;
  padding-bottom: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;

  &::after {
    content: 'Dimensões recomendadas: 500x500 pixels';
    position: absolute;
    top: 50%;
    font-size: 0.8rem;
    opacity: 0.7;
  }
`

export const ProductInfo = styled.div`
  padding: 1.25rem;
  
  .category {
    font-size: 0.8rem;
    color: #666;
    text-transform: uppercase;
    letter-spacing: 1px;
    display: block;
    margin-bottom: 0.5rem;
  }

  h3 {
    margin: 0;
    font-size: 1.1rem;
    color: #333;
    font-weight: 600;
  }
  
  p {
    margin: 0.5rem 0;
    color: #666;
    font-size: 0.9rem;
    
    &.price {
      font-size: 1.1rem;
      color: #333;
      margin-top: 1rem;
    }
  }

  .add-to-cart {
    width: 100%;
    padding: 0.8rem;
    margin-top: 1rem;
    background: #333;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.2s;
    
    &:hover {
      background: #444;
      transform: translateY(-2px);
    }
  }

  @media (min-width: ${breakpoints.tablet}) {
    padding: 1.5rem;
  }
` 