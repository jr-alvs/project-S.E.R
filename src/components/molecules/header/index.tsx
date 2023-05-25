import { useLocation } from 'react-router-dom';
import { HeaderStyle, ItemMenu, NavBar } from './styles';
import logoSer from '@assets/logo.png';

const menus = [
  {
    id: 1,
    title: 'Home',
    path: '/home',
  },
  {
    id: 2,
    title: 'Prestadores',
    path: '/providers',
  },
];

export const Header = () => {
  const { pathname } = useLocation();

  return (
    <HeaderStyle>
      <img src={logoSer} alt='logo' />
      <NavBar>
        <ul>
          {menus.map((menu) => (
            <ItemMenu
              to={menu.path}
              key={menu.id}
              $isActive={pathname.includes(menu.path)}
            >
              {menu.title}
            </ItemMenu>
          ))}
        </ul>
      </NavBar>
    </HeaderStyle>
  );
};
