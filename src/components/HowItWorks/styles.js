import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  background: #f1f5fb;
  padding: 76px 0 62px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 960px) {
    padding: 46px 0 46px 6px;
  }

  h2 {
    font-weight: bold;
    font-size: 32px;
    line-height: 32px;
    max-width: 280px;
    margin-bottom: 43.34px;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const List = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  li {
    display: flex;
    margin-bottom: 45px;

    span {
      margin-right: 15px;
      color: #fc8b24;
      font-weight: 900;
      font-size: 24px;
      line-height: 150%;
    }

    p {
      width: 279px;
      font-size: 18px;
      line-height: 140%;
      letter-spacing: 0.4px;
    }
  }
`;
