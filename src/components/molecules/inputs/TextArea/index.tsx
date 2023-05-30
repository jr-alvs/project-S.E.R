import { Label } from '@components/atoms/Label';
import { ContainerTextArea, ControlTextArea, InputTextArea } from './styles';
import { DefaultSettings } from '../defaultSettings';

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
    </ContainerTextArea>
  );
};
