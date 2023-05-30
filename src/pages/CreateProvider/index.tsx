import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';

import { Box } from '@components/atoms/Box';
import { Grid } from '@components/molecules/grid';
import { Inputs } from '@components/molecules/inputs';
import { Buttons } from '@components/molecules/buttons';

import { form_validation } from './schema';

interface ICreateProviderData {
  picture?: string;
  name: string;
  phone: string;
  email: string;
  cpf: string;
  bio: string;
}

export const CreateProvider = () => {
  const navigate = useNavigate();
  const form = useForm<ICreateProviderData>({
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      cpf: '',
      bio: '',
    },
    resolver: yupResolver(form_validation),
  });

  const onSubmit = (onValid: ICreateProviderData) => {
    console.log(onValid);
    navigate('/providers');
  };

  return (
    <Box>
      <Grid.Container columns={2}>
        <Grid.Item>
          <h2>Informações pessoais</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quia
            incidunt reprehenderit facere
          </p>
        </Grid.Item>
        <Grid.Item column={2}>
          <Inputs.File
            form={form}
            name='picture'
            label='Foto de perfil'
            isRequired
          />
        </Grid.Item>
        <Grid.Item column={2}>
          <Inputs.Text
            form={form}
            name='name'
            label='Nome completo'
            isRequired
          />
        </Grid.Item>
        <Grid.Item column={1}>
          <Inputs.Text
            form={form}
            name='phone'
            label='Número de telefone'
            isRequired
          />
        </Grid.Item>
        <Grid.Item column={1}>
          <Inputs.Text form={form} name='email' label='E-mail' isRequired />
        </Grid.Item>
        <Grid.Item column={1}>
          <Inputs.Text form={form} name='cpf' label='CPF' isRequired />
        </Grid.Item>
        <Grid.Item column={2}>
          <Inputs.TextArea
            form={form}
            name='bio'
            label='BIO'
            placeholder='escreva algo interessante sobre você aqui ....'
            rows={5}
            isRequired
          />
        </Grid.Item>
        <Grid.Item column={2}>
          <Buttons.Default
            text='Criar prestador'
            type='submit'
            click={form.handleSubmit(onSubmit)}
          />
        </Grid.Item>
      </Grid.Container>
    </Box>
  );
};
