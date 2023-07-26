import { Required } from '@components/atoms/Required';
import { ContainerLabel } from './styles';

interface ILabelProps {
  text?: string;
  isRequired?: boolean;
  color?: string;
  marginBottom?: string;
}

export const Label = ({
  isRequired,
  text,
  color,
  marginBottom,
}: ILabelProps) => {
  return (
    <ContainerLabel $color={color} $marginBottom={marginBottom}>
      {text} {isRequired && <Required />}
    </ContainerLabel>
  );
};
