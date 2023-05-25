import { Label } from '@components/atoms/Label';
import { ContainerText, ControlText, InputText } from './styles';

interface ITextProps {
  label?: string;
  placeholder?: string;
  type?: 'text' | 'email';
  isRequired?: boolean;
}

export const Text = ({ label, placeholder, type, isRequired }: ITextProps) => {
  return (
    <ContainerText>
      <Label text={label} isRequired={isRequired} />

      <ControlText>
        <InputText type={type} placeholder={placeholder} />
      </ControlText>
    </ContainerText>
  );
};
