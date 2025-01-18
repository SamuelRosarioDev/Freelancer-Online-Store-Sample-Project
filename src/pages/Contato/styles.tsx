import styled from 'styled-components'
import { PageTitle as GlobalPageTitle } from '../../styles/styles'

export const PageTitle = styled(GlobalPageTitle)`
  text-align: center;
`

export const ContactContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem 1rem;
`

export const ContactInfo = styled.div`
  text-align: center;
  margin-bottom: 2rem;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #333;
  }

  p {
    color: #666;
    margin-bottom: 1.5rem;
  }
`

export const SocialLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 2rem 0;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
  }
`

export const SocialButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  padding: 1rem;
  border: none;
  border-radius: 8px;
  background: #333;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s;
  width: 100%;

  @media (min-width: 768px) {
    width: auto;
    padding: 1rem 2rem;
  }

  &:hover {
    background: #444;
    transform: translateY(-2px);
  }
`

export const ContactDivider = styled.div`
  text-align: center;
  position: relative;
  margin: 2rem 0;
  color: #666;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    width: 45%;
    height: 1px;
    background: #ddd;
  }

  &::before {
    left: 0;
  }

  &::after {
    right: 0;
  }
`

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #333;
    text-align: center;
  }
`

export const Input = styled.input`
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: #333;
  }
`

export const TextArea = styled.textarea`
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: #333;
  }
`

export const Button = styled.button`
  padding: 1rem;
  background-color: #333;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #444;
  }
` 