import { ContainerIcon } from './styles';

export const sizes = {
  xs: '.5rem',
  sm: '.7rem',
  md: '.85rem',
  lg: '1.3rem',
  xl: '2rem',
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
