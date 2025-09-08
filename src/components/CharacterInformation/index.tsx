import type { FC } from 'react';
import { Information, Personal, Title } from './styles';

interface IProps {
  title: string | string[] | null;
  description: string | string[] | null;
}

const CharacterInformation: FC<IProps> = ({ title, description }) => {
  return (
    <Personal>
      <Title>{title}</Title>
      <Information>{description || 'Неизвестно'}</Information>
    </Personal>
  );
};

export default CharacterInformation;
