import React from 'react';

import { Section, Row, List } from './styles';
import { Container } from '../Container';

export default function HowItWorks() {
  return (
    <Section>
      <Container>
        <Row>
          <h2>Como a Juno funciona?</h2>
          <List>
            <li>
              <span>1.</span>
              <p>
                Você se cadastra na Juno, emite cobranças e envia para seus
                clientes. É rápido e não precisa ter carteira de cobrança em
                nenhum banco.
              </p>
            </li>
            <li>
              <span>2.</span>
              <p>
                Seu cliente recebe a cobrança da maneira que você preferir e
                paga. A Juno cuida da conciliação bancária e da segurança das
                suas transações.
              </p>
            </li>
            <li>
              <span>3.</span>
              <p>
                O dinheiro cai na sua conta Juno e você pode usá-lo com seu
                cartão Juno, pagar contas ou transferir para uma conta bancária.
              </p>
            </li>
          </List>
        </Row>
      </Container>
    </Section>
  );
}
