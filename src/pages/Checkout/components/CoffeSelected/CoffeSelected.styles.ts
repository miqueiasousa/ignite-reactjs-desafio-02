import styled from 'styled-components'

export const Item = styled.div`
  display: flex;
  gap: 20px;

  img {
    width: 64px;
    height: 64px;
  }

  .details {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    .title {
      display: inline-flex;
      justify-content: space-between;
    }

    .actions {
      display: flex;
      gap: 0.5rem;

      .remove {
        display: flex;
        gap: 0.25rem;
        align-items: center;
        border: none;
        background-color: ${props => props.theme.colors.base.button};
        padding: 0.5rem;
        border-radius: 6px;
        color: ${props => props.theme.colors.base.text};
        font-size: ${props => props.theme.fontSize.xs};
        line-height: 1.6;
      }
    }
  }
`
