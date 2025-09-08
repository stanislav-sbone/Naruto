import { useState, type FC } from 'react';
import CharactersList from '../../components/CharactersList';
import Filter from '../../components/Filter';

const Home: FC = () => {
  const [search, setSearch] = useState('');

  return (
    <div>
      <Filter search={search} setSearch={setSearch} />
      <CharactersList search={search}/>
    </div>
  );
};

export default Home;
