import type { FC } from 'react';
import { Container, Image, Message } from './style';

const Loading: FC = () => {
  return (
    <Container>
      <Image src="/naruto_loading.png" alt="Pakkun" />
      <Message>Возвращаем Саске в Коноху</Message>
    </Container>
  );
};

export default Loading;
