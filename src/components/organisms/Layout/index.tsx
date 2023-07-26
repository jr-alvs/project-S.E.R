import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import { Sidebar } from '@components/templates/SideBar';
import { ContainerLayout } from './styles';
import { Header } from '@/components/molecules/Header';

export const Layout = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('TOKEN');
  useEffect(() => {
    if (!token) {
      navigate('/auth/sign-in');
    }
  }, [token]);

  return (
    <Sidebar>
      <Header />
      <ContainerLayout>
        <Outlet />
      </ContainerLayout>
    </Sidebar>
  );
};
