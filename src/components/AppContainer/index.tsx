import type { FC, ReactNode } from 'react';
import { Container } from './styles';

interface IProps {
  children: ReactNode;
}

const AppContainer: FC<IProps> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default AppContainer;
