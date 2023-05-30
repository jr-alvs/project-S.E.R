import { useMemo } from 'react';

import { Label } from '@components/atoms/Label';
import { ErrorComponent } from '@/components/atoms/Error';

import { DefaultSettings } from '../defaultSettings';
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
  }, [form.formState.errors]);

  return (
    <ContainerText>
      <Label text={label} isRequired={isRequired} />

      <ControlText $hasError={!!error?.message}>
        <InputText
          type={type}
          placeholder={placeholder}
          {...form.register(name)}
        />
      </ControlText>

      {error?.message && <ErrorComponent text={error.message} />}
    </ContainerText>
  );
};
