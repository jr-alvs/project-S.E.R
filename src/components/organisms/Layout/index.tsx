import { Outlet } from 'react-router-dom';
import { ContainerLayout } from './styles';
import { Header } from '@components/molecules/header';

export const Layout = () => {
  return (
    <>
      <Header />
      <ContainerLayout>
        <Outlet />
      </ContainerLayout>
    </>
  );
};
