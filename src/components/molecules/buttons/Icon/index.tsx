import { Icon } from '../../../atoms/Icon';
import { IDefaultProps, sizes } from '../default-settings';
import { IconStyle } from './styles';

interface IIconsProps extends IDefaultProps {
  iconName: string;
}

export const Icons = ({
  text,
  background,
  color,
  size,
  iconName,
}: IIconsProps) => {
  return (
    <IconStyle
      $color={color}
      $background={background}
      $size={sizes[size ?? 'md']}
    >
      {text}
      <Icon name={iconName} color='#fff' />
    </IconStyle>
  );
};
