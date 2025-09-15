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
        <Link onClick={() => navigate('/')}>Главные герои</Link>
        <Link onClick={() => navigate('/tailed-beasts')}>Хвостатые звери</Link>
        <Link onClick={() => navigate('/about')}>Об аниме</Link>
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
