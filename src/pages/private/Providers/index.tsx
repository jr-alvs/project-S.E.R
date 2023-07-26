import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useToast } from '@hook/useToast';
import { useQueryString } from '@hook/useQueryString';
import {
  IGetProviderRequest,
  deleteProvider,
  getProviders,
} from '@services/api/providers';
import { IPaginationRequest, IPaginationResponse } from '@interfaces/api';
import { IProvider } from '@interfaces/models';
import { Box } from '@components/atoms/Box';
import { Breadcrumbs } from '@components/molecules/Breadcrumbs';
import { Grid } from '@components/molecules/grid';
import { Table } from '@components/molecules/table';
import { Inputs } from '@components/molecules/inputs';
import { Buttons } from '@components/molecules/buttons';
import { headers } from './settings';

export const Providers = () => {
  const { addToast } = useToast();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const form = useForm<IPaginationRequest<IGetProviderRequest>>();

  const [params, setParams] =
    useQueryString<IPaginationRequest<IGetProviderRequest>>();

  const { mutate, isLoading } = useMutation({
    mutationFn: (provider_id: number) =>
      deleteProvider(provider_id).then((res) => res.data),
    onSuccess: (data) => {
      addToast({
        title: data.success,
        type: 'success',
        toastOption: {
          autoClose: 5000,
        },
      });
      queryClient.invalidateQueries([
        'get_all_providers',
        JSON.stringify(params),
      ]);
    },
  });

  const addActionToProvidersList = (
    providers: IPaginationResponse<IProvider>,
  ) => {
    providers.docs = providers.docs.map((provider) => ({
      ...provider,
      actions: (
        <Buttons.Default
          text='Deletar'
          background='error'
          size='sm'
          startIcon='delete'
          isLoading={isLoading}
          click={() => mutate(provider.id)}
        />
      ),
    }));

    return providers;
  };

  const { data } = useQuery({
    queryKey: ['get_all_providers', JSON.stringify(params)],
    queryFn: () =>
      getProviders(params).then((res) => addActionToProvidersList(res.data)),
  });

  return (
    <>
      <Breadcrumbs
        menus={[{ label: 'Home', path: '/home' }, { label: 'Prestadores' }]}
      ></Breadcrumbs>
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
            type='text'
            form={form}
            name='filter'
            placeholder='Pesquise por um usuario'
            handleClick={(text) => setParams({ filterName: text })}
          />
        </Grid.Item>
        <Grid.Item column={12}>
          <Box>
            <Table
              columns={headers}
              rows={data?.docs ?? []}
              rowsProps={{
                keyExtractor: (item) => item.id,
                rowAction: (item) => navigate(`/providers/${item.id}`),
                total: data?.total,
              }}
            />
          </Box>
        </Grid.Item>
      </Grid.Container>
    </>
  );
};
