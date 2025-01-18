import { 
  ContactContainer, 
  ContactForm, 
  Input, 
  TextArea, 
  Button,
  PageTitle,
  SocialLinks,
  SocialButton,
  ContactInfo,
  ContactDivider
} from './styles.tsx'
import { FaWhatsapp, FaInstagram, FaEnvelope } from 'react-icons/fa'

export function Contato() {
  const handleWhatsApp = () => {
    window.open('https://wa.me/5511999999999', '_blank')
  }

  const handleInstagram = () => {
    window.open('https://instagram.com/', '_blank')
  }

  const handleEmail = () => {
    window.location.href = 'mailto:contato@teste.com'
  }

  return (
    <ContactContainer>
      <PageTitle>Entre em Contato</PageTitle>
      
      <ContactInfo>
        <h3>Fale Conosco</h3>
        <p>Escolha a melhor forma de entrar em contato:</p>
        
        <SocialLinks>
          <SocialButton onClick={handleWhatsApp} type="button">
            <FaWhatsapp size={24} />
            WhatsApp
          </SocialButton>
          
          <SocialButton onClick={handleInstagram} type="button">
            <FaInstagram size={24} />
            Instagram
          </SocialButton>
          
          <SocialButton onClick={handleEmail} type="button">
            <FaEnvelope size={24} />
            E-mail
          </SocialButton>
        </SocialLinks>
      </ContactInfo>

      <ContactDivider>ou</ContactDivider>

      <ContactForm onSubmit={(e) => e.preventDefault()}>
        <h3>Envie uma mensagem</h3>
        <Input type="text" placeholder="Nome" />
        <Input type="email" placeholder="Email" />
        <Input type="tel" placeholder="Telefone" />
        <TextArea placeholder="Mensagem" />
        <Button type="submit">Enviar Mensagem</Button>
      </ContactForm>
    </ContactContainer>
  )
} 