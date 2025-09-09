import { useEffect, useState, type FC } from 'react';
import { Link, useNavigate, useParams } from 'react-router';
import {
  Button,
  Card,
  Description,
  FamilyMember,
  Image,
  Information,
  Name,
  PersonalInfo,
  Relative,
  Title,
} from './styles';
import { getCharacterById, getCharacterByName } from '../../services/api';
import type { ICharacter } from '../../types/character';
import Loading from '../../components/Loading';
import CharacterInformation from '../../components/CharacterInformation';
import NotFound from '../../components/NotFound';

const Character: FC = () => {
  const [character, setCharacter] = useState<ICharacter | null>(null);
  const [loading, setLoading] = useState(false);
  const { param } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      if (!param) return;
      setLoading(true);
      try {
        let res;
        if (/^\d+$/.test(param)) {
          res = await getCharacterById(param);
        } else {
          res = await getCharacterByName(param);
        }
        setCharacter(res || null);
      } catch (error) {
        console.error(`Ошибка: ${error}`);
      } finally {
        setLoading(false);
      }
    })();
  }, [param]);

  if (loading) {
    return <Loading />;
  }

  if (!character) {
    return <NotFound />;
  }

  const characterInformation = [
    ['День рождения', character.birthdate],
    ['Дебют в аниме', character.debut],
    ['Клан', character.clan],
  ];

  return (
    <>
      <Button onClick={() => navigate('/')}>Вернуться на главную</Button>
      <Card>
        <Image src={character.image ?? ''} alt={character.name} />
        <PersonalInfo>
          <Name>{character.name}</Name>
          <Information>
            {characterInformation.map(([title, desc]) => (
              <CharacterInformation
                key={`${title} ${desc}`}
                title={title}
                description={desc}
              />
            ))}
          </Information>

          <div>
            <Title>Семья</Title>
            <Relative>
              {Object.keys(character.family || {}).length
                ? Object.entries(character.family || {}).map(
                    ([relation, name]) => (
                      <Description key={name}>
                        <span>{relation}</span>:{' '}
                        <Link to={`/character/${name?.split(' ').join('+')}`}>
                          <FamilyMember>{name}</FamilyMember>
                        </Link>
                      </Description>
                    )
                  )
                : 'Неизвестно'}
            </Relative>
          </div>
        </PersonalInfo>
      </Card>
    </>
  );
};

export default Character;
