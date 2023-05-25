import { Outlet } from 'react-router-dom';
import { ContainerLayout } from './styles';
import { Header } from '../../molecules/header';

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
