import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 0 15px;
  margin: 0 auto;

  @media (min-width: 1220px) {
    max-width: 1140px;
  }

  @media (max-width: 960px) {
    max-width: 960px;
  }

  @media (max-width: 520px) {
    max-width: 720px;
  }

  @media (max-width: 320px) {
    max-width: 540px;
  }
`;
