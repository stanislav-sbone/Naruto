import { type FC } from 'react';
import type { ICharacter } from '../../types/character';
import { Card, Description, Image, Information, Name } from './styles';
import CharacterInformation from '../CharacterInformation';
import Abilities from '../Abilities';

interface IProps {
  character: ICharacter;
}

const CharacterCard: FC<IProps> = ({ character }) => {
  const characterInfo = [
    ['День рождения', character.birthdate],
    ['Клан', character.clan],
    ['Дебют в аниме', character.debut],
  ];

  return (
    <Card>
      <Image src={character.image || ''} alt={character.name} />
      <Description>
        <Name>{character.name}</Name>
        <Information>
          {characterInfo.map((info) => (
            <CharacterInformation
              key={info.toString()}
              title={info[0]}
              description={info[1]}
            />
          ))}
        </Information>
        <Abilities jutsu={character.jutsu!} />
      </Description>
    </Card>
  );
};

export default CharacterCard;
