import styled from 'styled-components'

export const SuccessContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-block: 5rem;
`

export const SuccessTitle = styled.h1`
  font-family: 'Baloo 2', cursive;
  font-size: ${props => props.theme.fontSize['3xl']};
  color: ${props => props.theme.colors.yellow[900]};
  margin-bottom: 0.25rem;
`

export const SuccessSubtitle = styled.h2`
  font-size: ${props => props.theme.fontSize.xl};
  font-weight: 400;
  margin-bottom: 2.5rem;
`

export const OrderInfo = styled.div`
  padding: 2.5rem;
  border-radius: 6px 36px;
  border: 2px solid ${props => props.theme.colors.purple[500]};
  display: flex;
  flex-direction: column;
  gap: 2rem;

  .item {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    > span {
      display: inline-flex;
      padding: 0.5rem;
      border-radius: 9999px;
      color: ${props => props.theme.colors.white};

      &.local {
        background-color: ${props => props.theme.colors.purple[500]};
      }

      &.time {
        background-color: ${props => props.theme.colors.yellow[500]};
      }

      &.payment {
        background-color: ${props => props.theme.colors.yellow[900]};
      }
    }

    > div {
      display: flex;
      flex-direction: column;
    }
  }
`
