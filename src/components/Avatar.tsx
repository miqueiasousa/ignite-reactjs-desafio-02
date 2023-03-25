import styled from 'styled-components'

interface AvatarProps {
  bgColor: string
}

export const Avatar = styled.div<AvatarProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  background-color: ${props => props.bgColor};
  color: ${props => props.theme.colors.white};
  border-radius: 50%;
`
