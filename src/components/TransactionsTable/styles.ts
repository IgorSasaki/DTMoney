// External Modules
import styled from 'styled-components'
import { Colors } from '../../libraries/Color'

export const Container = styled.main`
  margin-top: 4rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      color: ${Colors.text};
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }

    td {
      padding: 1rem 2rem;
      border: 0;
      background: ${Colors.principalShape};
      color: ${Colors.text};
      border-radius: 0.25rem;

      &:first-child {
        color: ${Colors.title};
      }

      &.deposit {
        color: ${Colors.green};
      }

      &.withdraw {
        color: ${Colors.red};
      }
    }
  }
`
