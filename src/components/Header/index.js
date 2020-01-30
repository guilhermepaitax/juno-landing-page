import React from 'react';

import { Container } from './styles';
import { Button } from '../Button';

import Logo from '~/assets/juno.svg';

export default function Header() {
  return (
    <Container>
      <div>
        <img src={Logo} alt="Juno Logo" />
        <Button type="button">Comece agora</Button>
      </div>
    </Container>
  );
}
