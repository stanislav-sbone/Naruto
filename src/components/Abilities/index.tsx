import { type FC } from 'react';
import { Ability, Container, Information, Title } from './styles';

interface IProps {
  jutsu: string[];
}

const Abilities: FC<IProps> = ({ jutsu }) => {
  return (
    <Container>
      <Title>Abilities</Title>
      <Information>
        {jutsu.map((jutsu) => (
          <Ability key={jutsu}>{jutsu}</Ability>
        ))}
      </Information>
    </Container>
  );
};

export default Abilities;
