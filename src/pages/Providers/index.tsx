import { Grid } from '@components/molecules/grid';
import { Buttons } from '@components/molecules/buttons';
import { Inputs } from '@components/molecules/inputs';
import { Box } from '@components/atoms/Box';

export const Providers = () => {
  return (
    <>
      <Grid.Container columns={12}>
        <Grid.Item column={4}>
          <Buttons.Default
            text='Novo prestador'
            size='md'
            endIcon='person_add_alt'
          />
        </Grid.Item>
        <Grid.Item column={8}>
          <Inputs.Search placeholder='pesquise por um usuário' />
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
