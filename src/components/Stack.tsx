import styled from 'styled-components'

import { defaultTheme } from '../styles/themes/default'

interface StackProps {
  spacing: keyof typeof defaultTheme.spacing
}

export const Stack = styled.div<StackProps>`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spacing[p.spacing]};
`
