import * as yup from 'yup';

export const form_validation = yup.object().shape({
  name: yup.string().required('O nome é de preenchimento obrigatório.'),
  phone: yup
    .string()
    .required('O número de telefone é de preenchimento obrigatório.'),
  email: yup
    .string()
    .email('O email deve ser válido.')
    .required('O email é obrigatório.'),
  cpf: yup.string().required('O cpf é de preenchimento obrigatório.'),
  bio: yup.string().required('A bio é de preenchimento obrigatório.'),
});
