import styled from 'styled-components'

// Breakpoints para responsividade
export const breakpoints = {
  mobile: '320px',
  tablet: '768px',
  desktop: '1024px',
  widescreen: '1200px'
}

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

export const Header = styled.header`
  background-color: #ffffff;
  padding: 0.8rem 1rem;
  height: auto;
  min-height: 60px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: ${breakpoints.tablet}) {
    padding: 0.8rem 2rem;
    min-height: 70px;
  }
`

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  gap: 0.5rem;
  padding: 0;

  @media (min-width: ${breakpoints.tablet}) {
    flex-direction: row;
    justify-content: space-between;
    padding: 0 2rem;
    gap: 1rem;
  }
`

export const Logo = styled.h1`
  font-size: 1.1rem;
  color: #333;
  font-weight: 600;
  letter-spacing: 1px;
  margin: 0;

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 1.5rem;
  }
`

export const NavLinks = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  
  a {
    text-decoration: none;
    color: #333;
    font-weight: 500;
    font-size: 0.85rem;
    padding: 0.25rem 0.5rem;
    
    &:hover {
      color: #666;
    }
  }

  @media (min-width: ${breakpoints.tablet}) {
    width: auto;
    gap: 1.5rem;
    
    a {
      font-size: 1rem;
      padding: 0.5rem 0;
    }
  }

  @media (min-width: ${breakpoints.desktop}) {
    gap: 2rem;
  }
`

export const Main = styled.main`
  flex: 1;
  width: 100%;
  max-width: 1200px;
  margin: 1rem auto;
  padding: 0 1rem;
  margin-top: 80px;

  @media (min-width: ${breakpoints.tablet}) {
    margin: 2rem auto;
    margin-top: 100px;
    padding: 0 2rem;
  }
`

export const PageContainer = styled.div`
  width: 100%;
  margin: 0 auto;
`

export const ProductGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  width: 100%;
  justify-content: center;

  @media (min-width: ${breakpoints.tablet}) {
    gap: 1.5rem;
  }

  @media (min-width: ${breakpoints.desktop}) {
    gap: 2rem;
  }
`

export const ProductCard = styled.div`
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: transform 0.2s;
  width: 100%;
  
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
    
    strong {
      font-size: 1.1rem;
      color: #333;
    }
  }

  @media (min-width: ${breakpoints.tablet}) {
    padding: 1.5rem;
  }
`

export const Footer = styled.div`
  background: #333;
  color: #fff;
  padding: 2rem 1rem;
  margin-top: auto;

  @media (min-width: ${breakpoints.tablet}) {
    padding: 3rem 2rem;
  }
`

export const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  
  div {
    flex: 1;
    min-width: 250px;
    max-width: 300px;
    text-align: center;
  }
  
  @media (min-width: ${breakpoints.tablet}) {
    justify-content: space-between;
    
    div {
      text-align: left;
    }
  }

  h4 {
    margin-bottom: 1rem;
    font-size: 1.1rem;
    font-weight: 600;
    color: #fff;
  }
  
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    
    li {
      margin-bottom: 0.8rem;
      font-size: 0.9rem;
      color: #ccc;
      transition: color 0.2s;
      cursor: pointer;

      &:hover {
        color: #fff;
      }
    }
  }

  @media (min-width: ${breakpoints.desktop}) {
    gap: 4rem;
    
    h4 {
      font-size: 1.2rem;
      margin-bottom: 1.5rem;
    }
    
    li {
      font-size: 1rem;
    }
  }
`

export const PageTitle = styled.h2`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 2rem;
  padding: 0 1rem;
  
  @media (min-width: ${breakpoints.tablet}) {
    font-size: 2rem;
  }
`

export const PageIndicator = styled.button<{ color: string }>`
  background: white;
  border: none;
  font-size: 1.2rem;
  color: ${props => props.color};
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
  padding: 0.5rem 1rem;
  border-radius: 0 0 8px 8px;
  position: fixed;
  left: 50%;
  top: auto;
  bottom: -30px;
  transform: translateX(-50%) translateY(-100%);
  opacity: 0;
  pointer-events: none;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  z-index: 99;
  margin-top: -1px;

  &.visible {
    opacity: 1;
    pointer-events: all;
    transform: translateX(-50%) translateY(0);
  }

  &:hover {
    opacity: 1;
    transform: translateX(-50%) translateY(2px);
  }

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 1.4rem;
    bottom: -35px;
  }
`

export const FooterCredits = styled.div`
  text-align: center;
  margin-top: 3rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255,255,255,0.1);
  
  p {
    color: #ccc;
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
  }

  a {
    color: #ccc;
    text-decoration: none;
    font-size: 0.9rem;
    transition: color 0.2s;
    font-weight: 500;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;

    &:hover {
      color: #fff;
    }
  }
`
