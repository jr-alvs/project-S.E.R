import { useForm } from 'react-hook-form';
import { ISignInProps, useAuth } from '@stores/hook/useAuth';
import { Box } from '@components/atoms/Box';
import { Grid } from '@components/molecules/grid';
import { Inputs } from '@components/molecules/inputs';
import { Buttons } from '@components/molecules/buttons';
import { ContainerSignIn } from './styles';

export const SignIn = () => {
  const { signIn, isLoading } = useAuth();
  const form = useForm<ISignInProps>();
  const handleSignIn = (data: ISignInProps) => {
    signIn(data);
  };

  return (
    <ContainerSignIn>
      <Box>
        <Grid.Container columns={1} columnGap={20}>
          <Inputs.Text type='email' form={form} name='email' label='E-mail' />
          <Inputs.Text
            type='text'
            form={form}
            name='password'
            label='Password'
          />
          <Buttons.Default
            text='Sign in'
            isLoading={isLoading}
            click={form.handleSubmit(handleSignIn)}
          />
        </Grid.Container>
      </Box>
    </ContainerSignIn>
  );
};
