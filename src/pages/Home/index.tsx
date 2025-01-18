import { 
  ProductCard, 
  ImagePlaceholder, 
  ProductInfo, 
  PageContainer 
} from '../../styles/styles'
import {
  HeroSection,
  HeroContent,
  FeaturedSection,
  SectionTitle,
  ServicesSection,
  ServiceCard,
  LocationSection,
  MapContainer,
  LocationInfo
} from './styles'
import { FaTruck, FaStore, FaSearch, FaClock } from 'react-icons/fa'

const featuredProducts = [
  { id: 1, name: 'Camiseta Básica', price: 'R$ 49,90', description: 'Camiseta 100% algodão' },
  { id: 2, name: 'Calça Jeans', price: 'R$ 159,90', description: 'Calça jeans moderna' },
  { id: 3, name: 'Vestido Floral', price: 'R$ 129,90', description: 'Vestido leve e elegante' },
]

const services = [
  {
    icon: <FaTruck />,
    title: 'Entrega Rápida',
    description: 'Entrega em até 24h para toda região'
  },
  {
    icon: <FaStore />,
    title: 'Retire na Loja',
    description: 'Compre online e retire em nossa loja'
  },
  {
    icon: <FaSearch />,
    title: 'Busca na Loja',
    description: 'Encontre produtos disponíveis na loja física'
  },
  {
    icon: <FaClock />,
    title: 'Horário Estendido',
    description: 'Loja aberta até às 22h'
  }
]

export function Home() {
  return (
    <PageContainer>
      <HeroSection>
        <HeroContent>
          <h1>Bem-vindo à Fashion Store</h1>
          <p>Descubra as últimas tendências em moda</p>
          <button>Ver Coleção</button>
        </HeroContent>
      </HeroSection>

      <FeaturedSection>
        <SectionTitle>Destaques</SectionTitle>
        <div className="products-grid">
          {featuredProducts.map(product => (
            <ProductCard key={product.id}>
              <ImagePlaceholder/>
              <ProductInfo>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p><strong>{product.price}</strong></p>
              </ProductInfo>
            </ProductCard>
          ))}
        </div>
      </FeaturedSection>

      <ServicesSection>
        <SectionTitle>Nossos Serviços</SectionTitle>
        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceCard key={index}>
              <div className="icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </ServiceCard>
          ))}
        </div>
      </ServicesSection>

      <LocationSection>
        <SectionTitle>Nossa Localização</SectionTitle>
        <div className="location-container">
          <MapContainer>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975774778855!2d-46.6521903!3d-23.5636398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzQ5LjEiUyA0NsKwMzknMDcuOSJX!5e0!3m2!1spt-BR!2sbr!4v1635789876543!5m2!1spt-BR!2sbr"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </MapContainer>
          <LocationInfo>
            <h3>Visite Nossa Loja</h3>
            <p>Av. Paulista, 1000</p>
            <p>São Paulo - SP</p>
            <p>CEP: 01310-100</p>
            <p><strong>Horário de Funcionamento:</strong></p>
            <p>Segunda a Sábado: 10h às 22h</p>
            <p>Domingo: 14h às 20h</p>
          </LocationInfo>
        </div>
      </LocationSection>
    </PageContainer>
  )
} 