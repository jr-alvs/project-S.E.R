import { Routes as RoutesDOM, Route, Navigate } from 'react-router-dom';
import { Providers } from '../pages/Providers';
import { Layout } from '../components/organisms/Layout';
import { CreateProvider } from '../pages/CreateProvider';

export const Routes = () => {
  return (
    <RoutesDOM>
      <Route path='/auth'>
        <Route path='sign-in' element={<h1>Sign in</h1>} />
      </Route>

      <Route path='/' element={<Layout />}>
        <Route path='home' element={<h1>Home</h1>} />
        <Route path='providers' element={<Providers />} />
        <Route path='providers/:id_provider' element={<CreateProvider />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Route>
    </RoutesDOM>
  );
};
