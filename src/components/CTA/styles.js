import styled from 'styled-components';

import BgCTA from '~/assets/cta.png';

export const Section = styled.section`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #00155f;
  min-height: 450px;
  padding: 137px 0 150.15px;

  @media (max-width: 960px) {
    height: 724px;
    align-items: flex-start;
    padding: 0 0 0 21px;
  }
`;

export const Feedback = styled.div`
  h2 {
    font-weight: bold;
    font-size: 32px;
    line-height: 32px;
    color: #ffffff;
    margin-bottom: 20px;
  }

  p {
    max-width: 287px;
    font-weight: normal;
    font-size: 18px;
    line-height: 140%;
    letter-spacing: 0.4px;
    color: #ffffff;
    margin-bottom: 27.14px;
  }

  @media (max-width: 960px) {
    padding-top: 77px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Image = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  background: url(${BgCTA});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 70%;
  width: 50%;

  @media (max-width: 960px) {
    width: 100%;
    height: 393px;
    bottom: 0;
    top: unset;
    background-position: 45%;
  }
`;
