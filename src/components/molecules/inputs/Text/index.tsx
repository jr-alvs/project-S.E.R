import { Label } from '@components/atoms/Label';
import { ContainerText, ControlText, InputText } from './styles';
import { DefaultSettings } from '../defaultSettings';

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
  return (
    <ContainerText>
      <Label text={label} isRequired={isRequired} />

      <ControlText>
        <InputText
          type={type}
          placeholder={placeholder}
          {...form.register(name)}
        />
      </ControlText>
    </ContainerText>
  );
};
