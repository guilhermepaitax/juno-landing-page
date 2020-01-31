import React from 'react';

import { Container } from './styles';

import Header from '~/components/Header';
import Banner from '~/components/Banner';
import HowItWorks from '~/components/HowItWorks';
import Charge from '~/components/Charge';
import CTA from '~/components/CTA';
import Footer from '~/components/Footer';

export default function Home() {
  return (
    <Container>
      <Header />
      <Banner />
      <HowItWorks />
      <Charge />
      <CTA />
      <Footer />
    </Container>
  );
}
