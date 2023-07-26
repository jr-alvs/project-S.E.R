import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { AxiosError, AxiosResponse } from 'axios';
import { yupResolver } from '@hookform/resolvers/yup';
import { useToast } from '@hook/useToast';
import { convertFileToBase64 } from '@utils/convertFileToBase64';
import {
  TCreateProviderData,
  createProvider,
  findProviderById,
  updateProvider,
} from '@services/api/providers';
import { IErrorResponse, ISuccessResponse } from '@interfaces/api';
import { Box } from '@components/atoms/Box';
import { Breadcrumbs } from '@components/molecules/Breadcrumbs';
import { Grid } from '@components/molecules/grid';
import { UserInformation } from '@components/templates/UserInformations';
import { Inputs } from '@components/molecules/inputs';
import { Buttons } from '@components/molecules/buttons';
import { form_validation } from './schema';

export const CreateProvider = () => {
  const { addToast } = useToast();
  const { id_provider } = useParams();
  const [profileFic, setProfilePic] = useState('');
  const isNewRecord = id_provider === 'new';

  const form = useForm<TCreateProviderData>({
    resolver: yupResolver(form_validation),
  });

  const previewFormData = form.watch();

  const fetchData = () => {
    if (!isNewRecord && id_provider) {
      findProviderById(id_provider).then(({ data }) => {
        data.id === undefined;
        setProfilePic(data.profilePic);
        form.reset(data);
        return data;
      });
    }
  };

  const mutateReturns = {
    OnSuccess: (success: AxiosResponse<ISuccessResponse, any>) => {
      addToast({
        title: success.data.success,
        type: 'success',
        toastOption: {
          autoClose: 5000,
        },
      });
    },
    OnError: (error: AxiosError<IErrorResponse>) => {
      addToast({
        title: error.response?.data.error ?? '',
        type: 'error',
        toastOption: {
          autoClose: 5000,
        },
      });
    },
  };

  const { mutate } = useMutation({
    mutationFn: (body: TCreateProviderData) => {
      return createProvider(body);
    },
    onSuccess: mutateReturns.OnSuccess,
    onError: mutateReturns.OnError,
  });

  const { mutate: updateMutation } = useMutation({
    mutationFn: (body: TCreateProviderData) => {
      return updateProvider(body, id_provider ?? '');
    },
    onSuccess: mutateReturns.OnSuccess,
    onError: mutateReturns.OnError,
  });

  const handleSubmit = async (onValid: TCreateProviderData) => {
    onValid.profilePic = profileFic;
    console.log(onValid);
    isNewRecord ? mutate(onValid) : updateMutation(onValid);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Breadcrumbs
        menus={[
          { label: 'Home', path: '/home' },
          { label: 'Prestadores', path: '/providers' },
          { label: previewFormData.name ?? 'Criar' },
        ]}
      ></Breadcrumbs>
      <Grid.Container columns={12}>
        <Grid.Item column={8}>
          <Box>
            <Grid.Container columns={12}>
              <Grid.Item column={12}>
                <h4>Informacoes pessoais</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos
                  deserunt maiores deleniti fugit beatae laboriosam nemo,
                  quaerat id et possimus obcaecati dolorum assumenda libero
                  veritatis tempora eum illum, unde est.
                </p>
              </Grid.Item>
              <Grid.Item column={12}>
                <Inputs.File
                  label='foto de perfil'
                  isRequired
                  form={form}
                  name='profilePic'
                  acceptFiles='image/*'
                  onFileChange={(e) => {
                    convertFileToBase64(e.target.files?.[0]).then((pic) => {
                      setProfilePic(pic);
                    });
                  }}
                />
              </Grid.Item>
              <Grid.Item column={3}>
                <Inputs.Color
                  label='selecione a cor'
                  isRequired
                  form={form}
                  name='color'
                />
              </Grid.Item>
              <Grid.Item column={12}>
                <Inputs.Text
                  type='text'
                  label='nome completo'
                  placeholder='Ex: Jhon Doe'
                  isRequired
                  form={form}
                  name='name'
                />
              </Grid.Item>
              <Grid.Item column={6}>
                <Inputs.Text
                  type='text'
                  label='numero de telefone'
                  placeholder='43 999999999'
                  isRequired
                  form={form}
                  name='phone'
                />
              </Grid.Item>
              <Grid.Item column={6}>
                <Inputs.Text
                  type='text'
                  label='e-mail'
                  placeholder='jhonDoe@email.com'
                  isRequired
                  form={form}
                  name='email'
                />
              </Grid.Item>
              <Grid.Item column={6}>
                <Inputs.Text
                  type='text'
                  label='cpf'
                  placeholder='000.000.000-00'
                  isRequired
                  form={form}
                  name='cpf'
                />
              </Grid.Item>
              <Grid.Item column={12}>
                <Inputs.TextArea
                  label='Bio'
                  placeholder='escreva algo interessante sobre voce aqui...'
                  isRequired
                  rows={5}
                  form={form}
                  name='bio'
                />
              </Grid.Item>
              <Grid.Item column={4}>
                <Buttons.Default
                  text={
                    id_provider == 'new'
                      ? 'Criar prestador(a)'
                      : 'Atualizar prestador(a)'
                  }
                  click={form.handleSubmit(handleSubmit)}
                />
              </Grid.Item>
            </Grid.Container>
          </Box>
        </Grid.Item>
        <Grid.Item column={4}>
          <UserInformation
            data={{
              bio: previewFormData.bio,
              email: previewFormData.email,
              name: previewFormData.name,
              phone: previewFormData.phone,
              picture: profileFic,
              color: previewFormData.color,
            }}
          />
        </Grid.Item>
      </Grid.Container>
    </>
  );
};
