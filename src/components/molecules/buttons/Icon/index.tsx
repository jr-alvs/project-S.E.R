import { Icon } from '@components/atoms/Icon';
import { sizes } from '@components/molecules/buttons/defaultSettings';
import { IconStyle } from './styles';

interface IIconsProps extends React.ButtonHTMLAttributes<any> {
  click?: React.MouseEventHandler<HTMLButtonElement>;
  color?: string;
  size?: keyof typeof sizes;
  iconName?: string;
}

export const Icons = ({ color, size, iconName, click }: IIconsProps) => {
  return (
    <IconStyle $color={color} onClick={click}>
      <Icon name={iconName ?? ''} color={color} size={size} />
    </IconStyle>
  );
};
