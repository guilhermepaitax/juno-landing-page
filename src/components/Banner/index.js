import React from 'react';

import { Section } from './styles';
import { Button } from '../Button';
import { Container } from '../Container';

export default function Banners() {
  return (
    <Section>
      <Container>
        <div>
          <h2>Profissionalize seu negócio recebendo pagamentos por boleto</h2>
          <p>
            Na Juno você não precisa ter conta jurídica e nem carteira de
            cobrança junto ao banco para emitir boletos. Basta seu CPF. Simples
            assim!
          </p>
          <Button width="150px" height="34.58px">
            Comece agora
          </Button>
        </div>
      </Container>
    </Section>
  );
}
