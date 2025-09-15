import type { FC } from 'react';
import { Container, Image, Message } from './styles';

const NotFound: FC = () => {
  return (
    <Container>
      <Image src="/pakkun.png" alt="Pakkun" />
      <Message>Персонаж не найден</Message>
    </Container>
  );
};

export default NotFound;
