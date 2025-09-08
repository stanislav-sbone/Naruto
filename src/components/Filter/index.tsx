import type { Dispatch, FC } from 'react';
import { Clear, Container, Search } from './styles';
import { CloseOutlined } from '@ant-design/icons';

interface IProps {
  search: string;
  setSearch: Dispatch<React.SetStateAction<string>>;
}

const Filter: FC<IProps> = ({ search, setSearch }) => {
  return (
    <Container>
      <Search
        type="text"
        placeholder="Введите имя персонажа"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      {search.length > 0 && (
        <Clear onClick={() => setSearch('')}>
          <CloseOutlined />
        </Clear>
      )}
    </Container>
  );
};

export default Filter;
