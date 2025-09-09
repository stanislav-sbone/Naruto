import type { FC } from 'react';
import { HeaderBar, Link, Logo, Navigation } from './styles';
import { useNavigate } from 'react-router';

const Header: FC = () => {
  const navigate = useNavigate();

  return (
    <HeaderBar>
      <Logo src="/public/logo.png" alt="naruto" onClick={() => navigate('/')} />
      <Navigation>
        <Link onClick={() => navigate('/')}>Персонажи</Link>
        <Link onClick={() => navigate('/about')}>Об аниме</Link>
        <Link>Еще что нибудь</Link>
      </Navigation>
      {/* <button>themeButton</button> */}
    </HeaderBar>
  );
};

export default Header;
