import type { FC } from 'react';
import { HeaderBar, Link, Logo, Navigation } from './styles';

const Header: FC = () => {
  return (
    <HeaderBar>
      <Logo src="/public/logo.png" alt="naruto" />
      <Navigation>
        <Link href="#">Персонажи</Link>
        <Link href="#">Об аниме</Link>
        <Link href="#">Еще что нибудь</Link>
      </Navigation>
      {/* <button>themeButton</button> */}
    </HeaderBar>
  );
};

export default Header;
