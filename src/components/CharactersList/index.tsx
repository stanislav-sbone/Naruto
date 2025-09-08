import { useEffect, useState, type FC } from 'react';
import { getAllCharacters } from '../../services/api';
import type { ICharacter } from '../../types/character';
import CharacterCard from '../CharacterCard';
import { List } from './styles';
import NotFound from '../NotFound';
import Loading from '../Loading';

interface IProps {
  search: string;
}

const CharactersList: FC<IProps> = ({ search }) => {
  const [characters, setCharacters] = useState<ICharacter[] | []>([]);
  const [filteredCharacters, setFilteredCharacters] = useState<
    ICharacter[] | []
  >([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const res = await getAllCharacters();
        setCharacters(res || []);
      } catch (error) {
        console.error(`Ошибка: ${error}`);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  useEffect(() => {
    setFilteredCharacters(
      characters.filter((character) =>
        character.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [characters, search]);

  if (loading) {
    return <Loading />;
  }

  if (filteredCharacters.length === 0) {
    return <NotFound />;
  }

  return (
    <List>
      {filteredCharacters.map((c) => (
        <CharacterCard key={c.id} character={c} />
      ))}
    </List>
  );
};

export default CharactersList;
