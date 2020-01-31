import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 72.16px 0 76.59px;

  @media (max-width: 960px) {
    padding: 51.16px 0 54px;
  }

  div {
    padding: 0 -15px 0 -15px;
  }

  ul {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    li {
      padding: 0 40px;

      h2 {
        color: #252aff;
        font-weight: bold;
        font-size: 32px;
        line-height: 32px;
        max-width: 377px;
        margin-bottom: 13px;
      }

      p {
        max-width: 317px;
        font-weight: normal;
        font-size: 18px;
        line-height: 140%;
        letter-spacing: 0.4px;
        color: #666666;
      }

      img {
        max-width: 656.4px;

        @media (max-width: 520px) {
          max-width: 293.88px;
        }
      }
    }

    li ~ li {
      padding: 0;
    }

    @media (max-width: 1125px) {
      flex-direction: column-reverse;

      li ~ li {
        margin-bottom: 40.55px;
      }
    }
  }
`;
