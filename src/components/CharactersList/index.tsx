import { useEffect, useState, type FC } from 'react';
import { getAllCharacters } from '../../services/api';
import type { ICharacter } from '../../types/character';
import CharacterCard from '../CharacterCard';

const CharactersList: FC = () => {
  const [characters, setCharacters] = useState<ICharacter[] | []>([]);

  useEffect(() => {
    const fetchChars = async () => {
      const res = await getAllCharacters();
      setCharacters(res || []);
      console.log(res);
    };

    fetchChars();
  }, []);

  return (
    <div>
      {characters.map((c) => (
        <CharacterCard key={c.id} character={c} />
      ))}
    </div>
  );
};

export default CharactersList;
