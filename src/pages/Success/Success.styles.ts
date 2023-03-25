import styled from 'styled-components'

export const SuccessContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-block: 5rem;
`

export const SuccessSubtitle = styled.h2`
  font-size: ${props => props.theme.fontSize.xl};
  font-weight: 400;
`

export const OrderDetail = styled.div`
  padding: 2.5rem;
  border-radius: 6px 36px;
  border: 2px solid ${props => props.theme.colors.purple[500]};
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const Detail = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`
