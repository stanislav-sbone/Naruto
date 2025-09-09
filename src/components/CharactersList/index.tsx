import { useEffect, useState, type FC } from 'react';
import { getAllCharacters } from '../../services/api';
import type { ICharacter } from '../../types/character';
import CharacterCard from '../CharacterCard';
import { List } from './styles';
import NotFound from '../NotFound';
import Loading from '../Loading';
import Pagination from '../Pagination';

interface IProps {
  search: string;
}

const CharactersList: FC<IProps> = ({ search }) => {
  const [characters, setCharacters] = useState<ICharacter[] | []>([]);
  const [filteredCharacters, setFilteredCharacters] = useState<
    ICharacter[] | []
  >([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const charactersPerPage = 5;
  const lastCharacterIndex = currentPage * charactersPerPage;
  const firstCharacterIndex = lastCharacterIndex - charactersPerPage;
  const totalPages = Math.ceil(filteredCharacters.length / charactersPerPage);

  const currentCharacters = filteredCharacters.slice(
    firstCharacterIndex,
    lastCharacterIndex
  );

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
    setCurrentPage(1);
  }, [characters, search]);

  if (loading) {
    return <Loading />;
  }

  if (filteredCharacters.length === 0) {
    return <NotFound />;
  }

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <>
      <List>
        {currentCharacters.map((c) => (
          <CharacterCard key={c.id} character={c} />
        ))}{' '}
      </List>
      {filteredCharacters.length > 5 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          handlePageChange={handlePageChange}
        />
      )}
    </>
  );
};

export default CharactersList;
