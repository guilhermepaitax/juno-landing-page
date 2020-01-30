import styled from 'styled-components';

export const Button = styled.button`
  width: ${props => props.width || '150px'};
  height: ${props => props.height || '40px'};
  border: 0;
  border-radius: 4px;
  background: #3ecf0e;
  font-weight: bold;
  font-size: 16px;
  line-height: 150%;
  color: #ffffff;
`;
