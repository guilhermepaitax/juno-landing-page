import React from 'react';

import { Section, Feedback, Image } from './styles';
import { Container } from '../Container';
import { Button } from '../Button';

export default function CTA() {
  return (
    <Section>
      <Image />
      <Container>
        <Feedback>
          <h2>Gostou?</h2>
          <p>Fazer seu cadastro na Juno é grátis e não leva nem 5 minutos.</p>
          <Button type="button" width="150px" height="34.58px">
            Comece agora
          </Button>
        </Feedback>
      </Container>
    </Section>
  );
}
