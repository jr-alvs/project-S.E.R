import { Required } from '../Required';
import { ContainerLabel } from './styles';

interface ILabelProps {
  text?: string;
  isRequired?: boolean;
}

export const Label = ({ isRequired, text }: ILabelProps) => {
  return (
    <ContainerLabel>
      {text} {isRequired && <Required />}
    </ContainerLabel>
  );
};
