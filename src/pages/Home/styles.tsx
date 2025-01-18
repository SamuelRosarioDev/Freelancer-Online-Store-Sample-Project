import styled from 'styled-components'
import { breakpoints } from '../../styles/styles'

export const HeroSection = styled.section`
  height: 500px;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/hero-bg.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  margin: -1rem;
  margin-bottom: 2rem;

  @media (min-width: ${breakpoints.tablet}) {
    height: 600px;
    margin: -2rem;
    margin-bottom: 2rem;
  }
`

export const HeroContent = styled.div`
  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    
    @media (min-width: ${breakpoints.tablet}) {
      font-size: 3.5rem;
    }
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    
    @media (min-width: ${breakpoints.tablet}) {
      font-size: 1.5rem;
    }
  }

  button {
    padding: 1rem 2rem;
    font-size: 1.1rem;
    background: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.2s;
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 2px 4px rgba(0,0,0,0.2);
    }
  }
`

export const FeaturedSection = styled.section`
  padding: 4rem 0;

  .products-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 0 1rem;
    max-width: 1200px;
    margin: 0 auto;

    @media (min-width: ${breakpoints.tablet}) {
      grid-template-columns: repeat(2, 1fr);
      padding: 0 2rem;
    }

    @media (min-width: ${breakpoints.desktop}) {
      grid-template-columns: repeat(3, 1fr);
      gap: 3rem;
    }
  }
`

export const SectionTitle = styled.h2`
  font-size: 2rem;
  color: #333;
  text-align: center;
  margin-bottom: 3rem;
`

export const ServicesSection = styled.section`
  padding: 4rem 0;
  background: #f8f9fa;
  margin: 0 -1rem;
  
  .services-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 0 1rem;

    @media (min-width: ${breakpoints.tablet}) {
      grid-template-columns: repeat(2, 1fr);
      padding: 0 2rem;
    }

    @media (min-width: ${breakpoints.desktop}) {
      grid-template-columns: repeat(4, 1fr);
    }
  }
`

export const ServiceCard = styled.div`
  text-align: center;
  padding: 2rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }

  .icon {
    font-size: 2rem;
    color: #333;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.2rem;
    color: #333;
    margin-bottom: 0.5rem;
  }

  p {
    color: #666;
    font-size: 0.9rem;
  }
`

export const LocationSection = styled.section`
  padding: 4rem 0;

  .location-container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 0 1rem;

    @media (min-width: ${breakpoints.desktop}) {
      grid-template-columns: 2fr 1fr;
      padding: 0;
    }
  }
`

export const MapContainer = styled.div`
  height: 450px;
  border-radius: 8px;
  overflow: hidden;
`

export const LocationInfo = styled.div`
  padding: 2rem;
  background: #f8f9fa;
  border-radius: 8px;

  h3 {
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 1rem;
  }

  p {
    color: #666;
    margin-bottom: 0.5rem;

    strong {
      color: #333;
    }
  }
` 