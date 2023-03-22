import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 2rem 0;
  background-color: ${props => props.theme.colors.background};
  position: sticky;
  top: 0;
  z-index: 9999;
`

export const NavContainer = styled.div`
  display: flex;
  gap: 0.75rem;
`

export const LocationButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem;
  border-radius: 6px;
  border: none;
  font-size: ${props => props.theme.fontSize.sm};
  background-color: ${props => props.theme.colors.purple[100]};
  color: ${props => props.theme.colors.purple[900]};
  justify-self: end;
`

export const CartButton = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem;
  border-radius: 6px;
  border: none;
  font-size: ${props => props.theme.fontSize.sm};
  background-color: ${props => props.theme.colors.yellow[100]};
  color: ${props => props.theme.colors.yellow[900]};
  justify-self: end;
`
