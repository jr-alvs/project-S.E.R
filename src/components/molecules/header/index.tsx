import { HeaderStyle } from './styles';
import logoSer from '@assets/logo.png';

export const Header = () => {
  return (
    <HeaderStyle>
      <img src={logoSer} alt='logo' />
    </HeaderStyle>
  );
};
