import { useState, type FC } from 'react';
import CharactersList from '../../components/CharactersList';
import Filter from '../../components/Filter';
import { HomeContainer } from './styles';

const Home: FC = () => {
  const [search, setSearch] = useState('');

  return (
    <HomeContainer>
      <Filter search={search} setSearch={setSearch} />
      <CharactersList search={search} />
    </HomeContainer>
  );
};

export default Home;
