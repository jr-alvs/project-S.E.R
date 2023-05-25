import logoSer from '../../../assets/logo.png';
import { HeaderStyle, ItemMenu, NavBar } from './styles';

export const Header = () => {
  return (
    <HeaderStyle>
      <img src={logoSer} alt='logo' />
      <NavBar>
        <ul>
          <ItemMenu>Home</ItemMenu>
          <ItemMenu $isActive>Prestadores</ItemMenu>
        </ul>
      </NavBar>
    </HeaderStyle>
  );
};
