// External Modules
import styled from 'styled-components'

// Libraries
import { Colors } from '../../libraries/Color'

export const Container = styled.main`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -10rem;

  div {
    background: ${Colors.principalShape};
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: ${Colors.title};

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;
    }

    &.highlight-background {
      background: ${Colors.green};
      color: ${Colors.principalShape};
    }
  }
`
