import React from 'react';

import { Container } from './styles';

import Header from '~/components/Header';
import Banner from '~/components/Banner';
import HowItWorks from '~/components/HowItWorks';

export default function Home() {
  return (
    <Container>
      <Header />
      <Banner />
      <HowItWorks />
    </Container>
  );
}
