import styled from 'styled-components';

import BannerBg from '~/assets/banner-bg.png';

export const Section = styled.section`
  width: 100%;
  min-height: 537px;
  background: url(${BannerBg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 70%;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 120px 0 134px;
  color: #fff;

  h2 {
    max-width: 476px;
    font-size: 44px;
    font-weight: bold;
    line-height: 48px;
  }

  p {
    max-width: 523px;
    margin: 20px 0 14.4px;
    font-size: 18px;
    line-height: 140%;
    letter-spacing: 0.4px;
  }

  @media (max-width: 960px) {
    padding: 83px 0 84px;
  }
`;
