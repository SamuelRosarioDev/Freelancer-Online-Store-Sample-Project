import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import { GlobalStyle } from './styles/globalStyles'
import { Container, Header, Nav, Logo, NavLinks, Main, Footer, FooterContent, PageIndicator, FooterCredits } from './styles/styles'
import { Home } from './pages/Home'
import { Feminino } from './pages/Feminino'
import { Masculino } from './pages/Masculino'
import { Acessorios } from './pages/Acessorios'
import { Contato } from './pages/Contato'
import { useState, useEffect } from 'react'
import { FaUser } from 'react-icons/fa'

function HeaderWithIndicator() {
  const location = useLocation()
  const [showTitle, setShowTitle] = useState(false)
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  const getPageInfo = () => {
    switch(location.pathname) {
      case '/feminino':
        return { title: 'Moda Feminina', color: '#ff69b4' }
      case '/masculino':
        return { title: 'Moda Masculina', color: '#4169e1' }
      case '/acessorios':
        return { title: 'Acessórios', color: '#9370db' }
      default:
        return null
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setShowTitle(scrollPosition > 200)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const pageInfo = getPageInfo()

  return (
    <Header>
      <Nav>
        <Logo>FASHION STORE</Logo>
        <NavLinks>
          <Link to="/">Início</Link>
          <Link to="/feminino">Feminino</Link>
          <Link to="/masculino">Masculino</Link>
          <Link to="/acessorios">Acessórios</Link>
          <Link to="/contato">Contato</Link>
        </NavLinks>
      </Nav>
      {pageInfo && (
        <PageIndicator 
          color={pageInfo.color} 
          onClick={scrollToTop}
          className={showTitle ? 'visible' : ''}
        >
          {pageInfo.title}
        </PageIndicator>
      )}
    </Header>
  )
}

export function App() {
  return (
    <Router>
      <GlobalStyle />
      <Container>
        <HeaderWithIndicator />
        <Main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/feminino" element={<Feminino />} />
            <Route path="/masculino" element={<Masculino />} />
            <Route path="/acessorios" element={<Acessorios />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </Main>
        <Footer>
          <FooterContent>
            <div>
              <h4>Sobre nós</h4>
              <ul>
                <li>Nossa História</li>
                <li>Blog</li>
                <li>Carreiras</li>
              </ul>
            </div>
            <div>
              <h4>Ajuda</h4>
              <ul>
                <li>FAQ</li>
                <li>Entregas</li>
                <li>Devoluções</li>
              </ul>
            </div>
            <div>
              <h4>Contato</h4>
              <ul>
                <li>Email: contato@fashion.com</li>
                <li>Tel: (11) 1234-5678</li>
                <li>Whatsapp: (11) 91234-5678</li>
              </ul>
            </div>
          </FooterContent>
          <FooterCredits>
            <p>Desenvolvido por Samuel Rosário</p>
            <a href="https://portifolio-ant.pages.dev/" target="_blank" rel="noopener noreferrer">
              <FaUser /> Portfólio
            </a>
          </FooterCredits>
        </Footer>
      </Container>
    </Router>
  )
}
