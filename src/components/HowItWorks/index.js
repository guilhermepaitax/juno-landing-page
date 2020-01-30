import React from 'react';

import { Wrapper, Info } from './styles';
import { Container } from '../Container';

export default function HowItWorks() {
  return (
    <Wrapper>
      <Container>
        <h2>Como a Juno funciona?</h2>
        <div>
          <Info>
            <span>1.</span>
            <p>
              Você se cadastra na Juno, emite cobranças e envia para seus
              clientes. É rápido e não precisa ter carteira de cobrança em
              nenhum banco.
            </p>
          </Info>
          <Info>
            <span>2.</span>
            <p>
              Seu cliente recebe a cobrança da maneira que você preferir e paga.
              A Juno cuida da conciliação bancária e da segurança das suas
              transações.
            </p>
          </Info>
          <Info>
            <span>3.</span>
            <p>
              O dinheiro cai na sua conta Juno e você pode usá-lo com seu cartão
              Juno, pagar contas ou transferir para uma conta bancária.
            </p>
          </Info>
        </div>
      </Container>
    </Wrapper>
  );
}
