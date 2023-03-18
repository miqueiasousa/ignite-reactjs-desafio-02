import styled, { css } from 'styled-components'

const titleVariants = {
  xl: css`
    font-size: ${p => p.theme.fontSize['4xl']};
    font-weight: 800;
  `,
  lg: css`
    font-size: ${p => p.theme.fontSize['3xl']};
    font-weight: 800;
  `,
  md: css`
    font-size: ${p => p.theme.fontSize['2xl']};
    font-weight: 800;
  `,
  sm: css`
    font-size: ${p => p.theme.fontSize.xl};
    font-weight: 700;
  `,
  xs: css`
    font-size: ${p => p.theme.fontSize.lg};
    font-weight: 700;
  `
}

interface TitleProps {
  variant: keyof typeof titleVariants
  color?: string
}

export const Title = styled.h1<TitleProps>`
  --color: ${p => p.color};

  font-family: 'Baloo 2', cursive;
  color: var(--color, ${p => p.theme.colors.base.title});

  ${p => titleVariants[p.variant]}
`
