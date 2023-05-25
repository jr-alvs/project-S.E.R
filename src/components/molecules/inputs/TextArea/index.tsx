import { Label } from '../../../atoms/Label';
import { ContainerTextArea, ControlTextArea, InputTextArea } from './styles';

interface ITextAreaProps {
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
}: ITextAreaProps) => {
  return (
    <ContainerTextArea>
      <Label text={label} isRequired={isRequired} />

      <ControlTextArea>
        <InputTextArea rows={rows} placeholder={placeholder} />
      </ControlTextArea>
    </ContainerTextArea>
  );
};
