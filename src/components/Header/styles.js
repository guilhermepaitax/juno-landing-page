import styled from 'styled-components';

export const Container = styled.header`
  background: #252aff;
  height: 63px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 0 15px;
    margin: 0 auto;

    img {
      width: 88px;
      height: 25px;
    }

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
  }
`;
