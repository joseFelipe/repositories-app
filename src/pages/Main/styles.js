import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 24px;
  color: ${props => (props.error ? 'red' : '#e2ee33')};
  font-family: Arial, Helvetica, sans-serif;
  small {
    color: #333333;
  }
`;
