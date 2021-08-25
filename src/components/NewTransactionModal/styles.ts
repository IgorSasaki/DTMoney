// External Modules
import styled from 'styled-components'

// Libraries
import { Colors } from '../../libraries/Color'

export const Container = styled.form`
  h2 {
    color: ${Colors.title};
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;

    background: ${Colors.inputBackground};
    border: 1px solid ${Colors.inputBorder};

    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: ${Colors.text};
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type='submit'] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: ${Colors.green};
    color: ${Colors.principalShape};
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    margin-top: 1.25rem;
    font-weight: 600;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`
