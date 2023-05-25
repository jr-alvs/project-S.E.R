import { ContainerIcon } from './styles';

const sizes = {
  sm: '.7rem',
  md: '1rem',
  lg: '1.3rem',
};

interface IIconProps {
  name: string;
  color?: string;
  size?: keyof typeof sizes;
}
export const Icon = ({ name, color, size }: IIconProps) => {
  return (
    <ContainerIcon color={color} style={{ fontSize: sizes[size ?? 'md'] }}>
      {name}
    </ContainerIcon>
  );
};
