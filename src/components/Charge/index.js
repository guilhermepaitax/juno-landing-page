import React from 'react';

import { Section } from './styles';
import { Container } from '../Container';

import Cobrancas from '~/assets/cobrancas-recorrentes.png';

export default function Charge() {
  return (
    <Section>
      <Container>
        <ul>
          <li>
            <h2>Emita cobranças recorrentes </h2>
            <p>
              Com a Juno, você pode emitir cobranças recorrentes com lembretes
              que ajudam a diminuir a inadimplência dos seus clientes.
            </p>
          </li>
          <li>
            <img src={Cobrancas} alt="Cobrancas recorrentes" />
          </li>
        </ul>
      </Container>
    </Section>
  );
}
