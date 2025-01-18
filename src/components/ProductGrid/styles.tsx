import styled from 'styled-components'
import { breakpoints } from '../../styles/styles'

export const Grid = styled.div`
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