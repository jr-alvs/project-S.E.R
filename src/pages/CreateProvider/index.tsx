import { Box } from '@components/atoms/Box';
import { Grid } from '@components/molecules/grid';
import { Inputs } from '@components/molecules/inputs';
import { Buttons } from '@components/molecules/buttons';

export const CreateProvider = () => {
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
          <Inputs.File label='Foto de perfil' isRequired />
        </Grid.Item>
        <Grid.Item column={2}>
          <Inputs.Text label='Nome completo' isRequired />
        </Grid.Item>
        <Grid.Item column={1}>
          <Inputs.Text label='Número de telefone' isRequired />
        </Grid.Item>
        <Grid.Item column={1}>
          <Inputs.Text label='E-mail' isRequired />
        </Grid.Item>
        <Grid.Item column={1}>
          <Inputs.Text label='CPF' isRequired />
        </Grid.Item>
        <Grid.Item column={2}>
          <Inputs.TextArea
            label='BIO'
            placeholder='escreva algo interessante sobre você aqui ....'
            rows={5}
            isRequired
          />
        </Grid.Item>
        <Grid.Item column={2}>
          <Buttons.Default text='Criar prestador' />
        </Grid.Item>
      </Grid.Container>
    </Box>
  );
};
