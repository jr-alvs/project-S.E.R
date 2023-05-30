import { useMemo } from 'react';

import { Label } from '@components/atoms/Label';
import { ErrorComponent } from '@/components/atoms/Error';

import { DefaultSettings } from '../defaultSettings';
import { ContainerTextArea, ControlTextArea, InputTextArea } from './styles';

interface ITextAreaProps extends DefaultSettings {
  label?: string;
  placeholder?: string;
  isRequired?: boolean;
  rows?: number;
}

export const TextArea = ({
  label,
  placeholder,
  isRequired,
  rows,
  form,
  name,
}: ITextAreaProps) => {
  const { error } = useMemo(() => {
    return form.getFieldState(name);
  }, [form.formState.errors]);

  return (
    <ContainerTextArea>
      <Label text={label} isRequired={isRequired} />

      <ControlTextArea>
        <InputTextArea
          rows={rows}
          placeholder={placeholder}
          {...form.register(name)}
        />
      </ControlTextArea>

      {error?.message && <ErrorComponent text={error.message} />}
    </ContainerTextArea>
  );
};
