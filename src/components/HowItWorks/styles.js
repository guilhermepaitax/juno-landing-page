import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 100%;
  background: #f1f5fb;
  padding: 76px 0 106.59px;
  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    display: flex;
    flex-direction: column;

    h2 {
      font-weight: bold;
      font-size: 32px;
      line-height: 32px;
      width: 280px;
      margin-bottom: 43.34px;
    }

    > div {
      display: flex;
      justify-content: space-around;
    }
  }
`;

export const Info = styled.div`
  display: flex;

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

  & ~ & {
    margin-left: 141px;
  }
`;
