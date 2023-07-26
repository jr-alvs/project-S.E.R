import { useMemo } from 'react';
import { Label } from '@components/atoms/Label';
import { ErrorComponent } from '@components/atoms/Error';
import { DefaultSettings } from '@components/molecules/inputs/defaultSettings';
import { ContainerText, ControlText, InputText } from './styles';

interface ITextProps extends DefaultSettings {
  label?: string;
  placeholder?: string;
  type?: 'text' | 'email';
  isRequired?: boolean;
}

export const Text = ({
  label,
  placeholder,
  type,
  isRequired,
  form,
  name,
}: ITextProps) => {
  const { error } = useMemo(() => {
    return form.getFieldState(name);
  }, [form.formState]);

  return (
    <ContainerText>
      <Label text={label} isRequired={isRequired} />

      <ControlText $hasError={!!error?.message}>
        <InputText
          type={type}
          placeholder={placeholder}
          {...form.register(name)}
          onChange={(event) => {
            form.register(name).onChange(event);
            form.clearErrors(name);
          }}
        />
      </ControlText>

      {error?.message && <ErrorComponent text={error.message} />}
    </ContainerText>
  );
};
