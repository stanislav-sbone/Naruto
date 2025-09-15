import type { FC } from 'react';
import { HeaderBar, Link, Logo, Navigation } from './styles';
import { useNavigate } from 'react-router';
import { Switch } from 'antd';
import { useTheme } from '../../ThemeContext';

const Header: FC = () => {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  return (
    <HeaderBar>
      <Logo src="/logo.png" alt="naruto" onClick={() => navigate('/')} />
      <Navigation>
        <Link onClick={() => navigate('/')}>Персонажи</Link>
        <Link onClick={() => navigate('/about')}>Об аниме</Link>
        <Link>Еще что нибудь</Link>
      </Navigation>
      <Switch
        checked={theme === 'light'}
        checkedChildren={'☀️'}
        unCheckedChildren={'🌙'}
        onChange={toggleTheme}
      />
    </HeaderBar>
  );
};

export default Header;
