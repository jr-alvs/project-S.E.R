import { useMemo } from 'react';
import { Label } from '@components/atoms/Label';
import { ErrorComponent } from '@components/atoms/Error';
import { DefaultSettings } from '@components/molecules/inputs/defaultSettings';
import { ContainerTextArea, ControlTextArea, InputTextArea } from './styles';

interface ITextAreaProps extends DefaultSettings {
  label?: string;
  placeholder?: string;
  isRequired?: boolean;
  cols?: number;
  rows?: number;
}

export const TextArea = ({
  label,
  placeholder,
  isRequired,
  cols,
  rows,
  form,
  name,
}: ITextAreaProps) => {
  const fieldState = form.getFieldState(name);
  const error = useMemo(() => {
    return fieldState.error;
  }, [form.formState.errors]);

  return (
    <ContainerTextArea>
      <Label text={label} isRequired={isRequired} />

      <ControlTextArea>
        <InputTextArea
          cols={cols ?? 1}
          rows={rows ?? 3}
          placeholder={placeholder}
          {...form.register(name)}
          onChange={() => form.clearErrors(name)}
        />
      </ControlTextArea>

      {error?.message && <ErrorComponent text={error.message} />}
    </ContainerTextArea>
  );
};
