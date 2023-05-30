import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { Grid } from '@components/molecules/grid';
import { Buttons } from '@components/molecules/buttons';
import { Inputs } from '@components/molecules/inputs';
import { Box } from '@components/atoms/Box';

export const Providers = () => {
  const navigate = useNavigate();
  const form = useForm();

  return (
    <>
      <Grid.Container columns={12}>
        <Grid.Item column={4}>
          <Buttons.Default
            text='Novo prestador'
            size='md'
            endIcon='person_add_alt'
            click={() => navigate('/providers/new')}
          />
        </Grid.Item>
        <Grid.Item column={8}>
          <Inputs.Search
            form={form}
            name='search'
            placeholder='pesquise por um usuário'
          />
        </Grid.Item>
      </Grid.Container>

      <Grid.Container columns={6} rowGap={20} columnGap={10}>
        <Grid.Item column={4}>
          <Box>
            <h1>Conteudo</h1>
          </Box>
        </Grid.Item>
        <Grid.Item column={2}>
          <Box>
            <h1>Conteudo</h1>
          </Box>
        </Grid.Item>
        <Grid.Item column={6}>
          <Box>
            <h1>Conteudo</h1>
          </Box>
        </Grid.Item>
        <Grid.Item column={4}>
          <Box>
            <h1>Conteudo</h1>
          </Box>
        </Grid.Item>
        <Grid.Item column={2}>
          <Box>
            <h1>Conteudo</h1>
          </Box>
        </Grid.Item>
      </Grid.Container>
    </>
  );
};
