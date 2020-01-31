import styled from 'styled-components';

export const Section = styled.footer`
  width: 100%;
  min-height: 90px;
  background: #252aff;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;

  span {
    height: 24px;
    font-weight: bold;
    font-size: 16px;
    line-height: 150%;
    color: #ffffff;
  }

  p {
    max-width: 386px;
    height: 71px;
    font-weight: bold;
    font-size: 14px;
    line-height: 24px;
    text-align: center;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 960px) {
    flex-direction: column;
    padding: 33px 0 40px;

    span {
      margin-bottom: 10px;
    }

    p {
      margin-bottom: 5px;
    }
  }
`;
