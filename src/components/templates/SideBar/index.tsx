import { PropsWithChildren, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useAuth } from '@stores/hook/useAuth';
import { Icon } from '@components/atoms/Icon';
import { Buttons } from '@components/molecules/buttons';
import { Label } from '@components/atoms/Label';
import {
  Container,
  Content,
  Navbar,
  NavbarItem,
  NavbarList,
  ToggleContent,
  ContentChildren,
  Link,
} from './styles';
import { sidebar_menus } from './settings';

export const Sidebar = ({ children }: PropsWithChildren) => {
  const { pathname } = useLocation();
  const [isOpenSideBar, setIsOpenSideBar] = useState<boolean>(false);
  const { signOut } = useAuth();

  return (
    <Container>
      <Content $isOpenSideBar={isOpenSideBar}>
        <ToggleContent
          onClick={() => setIsOpenSideBar((oldState) => !oldState)}
        >
          <Icon name='menu' size='xl' />
        </ToggleContent>
        <Navbar>
          <NavbarList>
            {sidebar_menus.map((menu) => (
              <Link
                key={menu.id}
                $isActive={pathname.includes(menu.path ?? '')}
                $isOpenSideBar={isOpenSideBar}
                to={menu.path ?? ''}
              >
                <Icon name={menu.icon} size='lg' />
                {isOpenSideBar && menu.label}
              </Link>
            ))}
          </NavbarList>
          <NavbarItem>
            <Buttons.Icons
              iconName='logout'
              size='lg'
              color='red'
              click={signOut}
            />
            {isOpenSideBar && <Label text='Sair' color='red' />}
            {/* <Icon name='logout' size='lg' color='red' /> */}
          </NavbarItem>
        </Navbar>
      </Content>
      <ContentChildren $isOpenSideBar={isOpenSideBar}>
        {children}
      </ContentChildren>
    </Container>
  );
};
